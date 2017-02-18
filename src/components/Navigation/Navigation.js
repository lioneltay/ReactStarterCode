import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import './styles.scss'
import { BASE_URL } from 'config/constants'
import { connect } from 'react-redux'


const Navigation = ({ isAuthed, authedId, admin }) => {
	return (
		<nav className='Navigation'>
			This is the nav bar
		</nav>
	)
}

export default Navigation



