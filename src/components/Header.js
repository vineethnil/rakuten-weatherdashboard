import React from 'react';
import './css/main.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			
		};
	}

	//Intial Call
	componentDidMount(){
		
	}


	render() {
		
		return (
			<div id="headerContainer">		
				<div className="header_content">		
					<div className="logo_bar"><Link to="/">Weather DashBoard</Link></div>
					<div className="option_bar"><Link to="/settings">Settings</Link></div>
				</div>
			</div>
		);
	}

}
export default Header