import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

export function AuthHOC(ComponentToWrap) {
	class AuthedComponent extends Component {
		componentDidMount() {
			if (!this.props.authenticated) browserHistory.push('/')
		}
		
		componentWillUpdate() {
			if (!this.props.authenticated) browserHistory.push('/')
		}
		
		render() {
			return <ComponentToWrap {...this.props} />
		}
	}
	
	AuthedComponent.propTypes = {
		authenticated: PropTypes.bool.isRequired,
	}
	
	const mapStateToProps
	return AuthedComponent
}