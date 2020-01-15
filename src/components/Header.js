import React from 'react';
import './css/main.css';
import {Link} from 'react-router-dom';
import logo from '../images/rakuten_logo.png';

class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			
		};
	}

	render() {
		
		return (
			<div id="headerContainer">		
				<div className="header_content">		
					<div className="logo_bar">
						<Link to="/">
							<img src={logo} alt="logo"/>
							Weather DashBoard
						</Link>
					</div>
					<div className="option_bar"><Link to="/settings">Settings</Link></div>
				</div>
			</div>
		);
	}

}
export default Header