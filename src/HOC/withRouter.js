import React, { PropTypes, Component } from 'react'

// HOC to add router and params to the props of a component
// mergeParams allows the router params to be merged into props directly, these will still be overwritten if a component instance is given props with the same name
/*
	mergeParams:
	[bool]: if true, merge router params with props
	[object]: merge router params whose prop names appear as object properties and rename them as specified in object
	[array]: merge router params whose names appear in array and keep the same names
*/
const withRouter = (ComponentToWrap, mergeParams) => {
	
	const CompWithRouter = (props, context) => {
		const params = context.router.params
		
		// Just add params as a property
		if (!mergeParams) {
			return <ComponentToWrap params={params} router={context.router} {...props} />
		} 
		
		// Merge all params
		else if (typeof mergeParams === 'boolean') {
			return <ComponentToWrap {...params} router={context.router} {...props} />
		}
		
		// Merge params for which their name appear in mergeParams
		else if (Array.isArray(mergeParams)) {
			const filteredParams = mergeParams.reduce((a,key) => {
				// skip over undefined properties
				// important to check explicit equality as we don't want to skip falsely values
				if (params[key] !== undefined) {
					a[key] = params[key]
				}
				return a
			}, {})
			return <ComponentToWrap {...filteredParams} router={context.router} {...props} />
		}
		
		// Merge params for which their name appears as a property on mergeParams, and give them the specified name
		else if (typeof mergeParams === 'object') {
			const filteredParams = Object.keys(mergeParams)
				.reduce((a,key) => {
					// skip over undefined properties
					// important to check explicit equality as we don't want to skip falsely values
					if (params[key] !== undefined) {
						a[mergeParams[key]] = params[key]
					}
					return a
				}, {})
			return <ComponentToWrap {...filteredParams} router={context.router} {...props} />
		} 
		
		else {
			throw new Error(`Invalid mergeParams: ${typeof mergeParams}`)
		}
	}
	
	// Accept router from context, react-router makes this available
	CompWithRouter.contextTypes = {
		router: PropTypes.object,
	}
	
	return CompWithRouter
}

export default withRouter