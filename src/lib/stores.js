import { writable } from 'svelte/store'
import { persist, localStorage } from '$lib/persist'

// noinspection JSUnusedGlobalSymbols
export const db = persist(writable({
	clear: false,
	clear2: false,
	wallet: '0xB00Fc62B8B22243779A35effb8B98f18193daa09',
	contract: '0x6CC462bc49ceCFE943Bc4F477b23b92906e6074F',
	lands: ['134223', '134224', '134225', '133969', '133968', '133967', '133711', '133712', '133713', '133455', '133456', '133457'],
	blacklisted: ['150949'],
	start: '2022-03-21',
	end: '2022-03-27',
	data: [],
	selected: '0'
}), localStorage(), 'db')