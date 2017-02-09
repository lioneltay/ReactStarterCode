import { ref } from 'config/constants'

// USER

// Saves user to database
// User should be the full user details
// User already has a uid from the register
export function saveUser(user) {
	return ref.child(`users/${user.info.uid}`).set(user)
		// return promise resolved with user for chaining
		.then(() => user)
}

export function fetchUser(uid) {
	return ref.child(`users/${uid}`).once('value')
		.then(snapshot => snapshot.val())
}


// LESSON HISTORY

const history = {
	history: {
		1: {
			lessonId: 1,
			timestamp: Date.now(),
			title: 'Nugget City',
			snippet: {
				html: '<div>This is the snippet which only shows on snippet view!</div>'
			},
			notes: {
				html: '<div>Hello <strong>These</strong> are notes!</div>',
			},
			homework: {
				completed: true,
				html: '<ul><li>Do homework</li><li>Do more homework</li></ul>',
			},
			links: {
				1: {
					linkId: 1,
					description: 'A link',
					linkText: 'Click Here',
				},
				2: {
					linkId: 2,
					description: 'Another link',
					linkText: 'Click Here for things',
				}
			},
		},
		2: {
			lessonId: 2,
			timestamp: Date.now(),
			title: 'Vectors',
			snippet: {
				html: '<div>This is the snippet which only shows on snippet view!</div>'
			},
			notes: {
				html: '<div>Hello <strong>These</strong> are notes!</div>',
			},
			homework: {
				completed: true,
				html: '<ul><li>Do homework</li><li>Do more homework</li></ul>',
			},
			links: {
				1: {
					linkId: 1,
					description: 'A link',
					linkText: 'Click Here',
				},
				2: {
					linkId: 2,
					description: 'Another link',
					linkText: 'Function Properties',
					url: '/math/worksheets/Functions/FunctionProperties',
				}
			},
		},
		3: {
			lessonId: 3,
			timestamp: Date.now(),
			title: 'A Fun Time',
			snippet: {
				html: '<div>This is the snippet which only shows on snippet view!</div>'
			},
			notes: {
				html: '<div>Hello <strong>These</strong> are notes!</div>',
			},
			homework: {
				completed: true,
				html: '<ul><li>Do homework</li><li>Do more homework</li></ul>',
			},
			links: {
				1: {
					linkId: 1,
					description: 'A link',
					linkText: 'Click Here',
					external: true,
				},
				2: {
					linkId: 2,
					description: 'Another link dfg dfg dfgdfg',
					linkText: 'Click Here for things fdgdf dfg dfgdfgdfgd fgdfg dfg',
					external: false,
				}
			},
		},
	}
}

//export function fetchUsersLessonHistory(uid) {
//	return ref.child(`usersLessonHistory/${uid}`).once('value')
//		.then(snapshot => snapshot.val())
//}

export function fetchUsersLessonHistory(uid) {
	ref.child(`usersLessonHistory/${uid}`).set(history)
		.then((data) => console.log('Done!', data))
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(history), 1000)
	})
}

/*
/usersLessonHistory
	[uid]
		history: {
			[hid]
				hid
				timestamp
				title
				notes: {

				}
				homework: {
					completed: true
					tasks: {
						[tid]: {
							tid
							link
							text
						}
					}					
				}
		}
*/


