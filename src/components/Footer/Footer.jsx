import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { BASE_URL } from 'config/constants'
import './styles.scss'
import { connect } from 'react-redux'

const Footer = ({ isAuthed, authedId }) => (
	<footer className='Footer'>
		This is the footer
	</footer>
)

export default Footer