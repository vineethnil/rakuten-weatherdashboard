import React from 'react';
import './css/main.css';

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
					<div className="logo_bar">Weather DashBoard</div>
					<div className="title_bar">Today</div>
					<div className="option_bar">Settings</div>
				</div>
			</div>
		);
	}

}
export default Header