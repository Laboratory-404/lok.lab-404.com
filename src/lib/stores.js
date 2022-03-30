import { writable } from 'svelte/store'
import { persist, localStorage } from '$lib/persist'

// noinspection JSUnusedGlobalSymbols
export const db = persist(writable({
	lands: [],
	selected: '0'
}), localStorage(), 'db')