// noinspection DuplicatedCode,JSUnusedGlobalSymbols

import { get } from 'svelte/store'
import { db } from '$lib/stores'
import { variables } from '$lib/variables'

const GLOBAL_TIMEOUT = 5000
const GLOBAL_RETRIES = 1
const GLOBAL_RETRY_DELAY = 100

const delay = delay => new Promise(resolve => setTimeout(() => resolve(), delay))

const fetchWithTimeout = async (resource, options = {}, f) => {
	//console.log(`fetchWithTimeout(${resource})`)

	let id = null
	let response

	if (typeof AbortController === 'function') {
		const { timeout = GLOBAL_TIMEOUT } = options
		const controller = new AbortController()
		id = setTimeout(() => controller.abort(), timeout)

		if (typeof f === 'function') {
			//console.log(`Server-side fetch ${resource}`)
			response = await f(resource, { ...options, signal: controller.signal })
		} else {
			response = await fetch(resource, { ...options, signal: controller.signal })
		}
	} else {
		if (typeof f === 'function') {
			//console.log(`Server-side fetch ${resource}`)
			response = await f(resource, options)
		} else {
			response = await fetch(resource, options)
		}
	}

	if (id !== null) {
		clearTimeout(id)
	}

	return response
}

const fetchWithRetryDelay = async (resource, options = {}, f, n = GLOBAL_RETRIES) => {
	//console.log(`fetchWithRetryDelay(${resource})`)

	try {
		return await fetchWithTimeout(resource, options, f)
	} catch(error) {
		console.error(error)

		if (n === 1) throw error

		await delay(GLOBAL_RETRY_DELAY)

		return fetchWithRetryDelay(resource, options, f, n - 1)
	}
}

// noinspection JSUnusedGlobalSymbols
export const EtherScanAPI = {
	getContractABI: (contract_address, f, options) => fetchWithRetryDelay(`${variables.ETHERSCAN_API_ROOT}?module=contract&action=getabi&address=${contract_address}&page=1&startblock=0&sort=asc&apikey=${variables.ETHERSCAN_API_KEY}`, options, f),
	getBalance: (contract_address, wallet_address, f, options) => fetchWithRetryDelay(`${variables.ETHERSCAN_API_ROOT}?module=account&action=tokenbalance&contractaddress=${contract_address}&address=${wallet_address}&tag=latest&&apikey=${variables.ETHERSCAN_API_KEY}`, options, f),
	getTransferEvents: (contract_address, wallet_address, nft = false, f, options) => fetchWithRetryDelay(`${variables.ETHERSCAN_API_ROOT}?module=account&action=${!nft ? 'tokentx' : 'tokennfttx'}&contractaddress=${contract_address}&address=${wallet_address}&apikey=${variables.ETHERSCAN_API_KEY}`, options, f)
}

export const getContributions = (land, start, end, f, options) => fetchWithRetryDelay(`${variables.API_ROOT}/stat/land/contribution?landId=${land}&from=${start}&to=${end}`, options, f)

export const getCount = async (wallet_address, contract_address) => {
	let $db = get(db)
	let wallet = wallet_address || $db.wallet
	let contract = contract_address || $db.contract
	let balance_api = await EtherScanAPI.getBalance(contract, wallet).catch(error => console.error(error))
	let balance_data = await balance_api?.json().catch(error => console.error(error))

	if (balance_data?.message === 'OK' && balance_data?.status === '1') {
		return parseInt(balance_data?.result)
	}

	return 0
}

export const getLands = async (wallet_address, contract_address) => {
	let tokens = []
	let $db = get(db)
	let wallet = wallet_address || $db.wallet
	let contract = contract_address || $db.contract
	let transfers_api = await EtherScanAPI.getTransferEvents(contract, wallet, true).catch(error => console.error(error))
	let transfers_data = await transfers_api?.json().catch(error => console.error(error))

	if (transfers_data.message === 'OK' && transfers_data.status === '1' && Array.isArray(transfers_data.result)) {
		transfers_data.result.map(({tokenName, tokenSymbol, tokenID }) => {
			// noinspection JSUnresolvedVariable
			if (tokenName === 'League of Kingdoms LAND' && tokenSymbol === 'LOKL') {
				// noinspection JSUnresolvedVariable
				tokens.push(tokenID)
			}
		})
	}

	return tokens
}

export const getData = (lands, start, end) => {
	let $db = get(db)
	let l = lands || $db.lands
	let s = start || $db.start
	let e = end || $db.end

	if (Array.isArray($db.data))  {
		if ($db.data.length === 0) {
			$db.data = [{ start: s, end: e, data: {}}]

			$db.data.map((p, i) => {
				if (p.start === s && p.end === e) {
					l.map(async land => {
						let contributions_api = await getContributions(land, s, e).catch(error => console.error(error))
						let contributions_data = await contributions_api?.json().catch(error => console.error(error))

						if (typeof p.data === 'undefined') {
							$db.data[i].data = {}
						}

						$db.data[i].data[land] = contributions_data

						db.set($db)
					})
				}
			})

			console.log('Loaded from server')
		} else {
			let found = false

			$db.data.map(p => {
				if (p.start === s && p.end === e) {
					found = true
				}
			})

			if (found) {
				$db.data.map((p, i) => {
					if (p.start === s && p.end === e) {
						if (p.data && Object.keys(p.data).length === 0) {
							l.map(async land => {
								let contributions_api = await getContributions(land, s, e).catch(error => console.error(error))
								let contributions_data = await contributions_api?.json().catch(error => console.error(error))

								if (typeof p.data === 'undefined') {
									$db.data[i].data = {}
								}

								$db.data[i].data[land] = contributions_data

								db.set($db)
							})

							console.log('Loaded from server')
						} else {
							console.log('Loaded from cache')
						}
					}
				})
			} else {
				$db.data.push({ start: s, end: e, data: {}})

				$db.data.map((p, i) => {
					if (p.start === s && p.end === e) {
						l.map(async land => {
							let contributions_api = await getContributions(land, s, e).catch(error => console.error(error))
							// noinspection UnnecessaryLocalVariableJS
							let contributions_data = await contributions_api?.json().catch(error => console.error(error))

							if (typeof p.data === 'undefined') {
								$db.data[i].data = {}
							}

							$db.data[i].data[land] = contributions_data

							db.set($db)
						})
					}
				})

				console.log('Loaded from server')
			}
		}
	}
}