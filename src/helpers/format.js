function valOrNull(val) {
	return val ? val : null
}

export function formatDate(date, format) {
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

/*
	Takes details from form single layer key-value pairs and formats into a user object
*/
export function formatUserDetails(details) {
	return {
		info: {
			uid: valOrNull(details.uid),
			name: valOrNull(details.name),
			email: valOrNull(details.email),
		}
	}
}