// noinspection DuplicatedCode

import cookie from 'cookie'
import { v4 as uuid } from '@lukeed/uuid'

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')
	event.locals.gid = cookies.gid || uuid()

	const response = await resolve(event)

	if (!cookies.gid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set('set-cookie', cookie.serialize('gid', event.locals.gid, {
			path: '/',
			httpOnly: true,
			sameSite: true,
			secure: true
		}))
	}

	return response
}