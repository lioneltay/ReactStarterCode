import React, { PropTypes, Component } from 'react'
import { Navigation, Footer } from 'components'
import { Main } from 'components'
import { connect } from 'react-redux'
import './styles.scss'

class MainContainer extends Component {
	render() {		
		return (
			<div className='Main'>
				<header>
					<Navigation />
				</header>
				
				<section className='body'>
					{this.props.children}
				</section>
				
				<Footer />
			</div>
		)
	}
}

export default MainContainer