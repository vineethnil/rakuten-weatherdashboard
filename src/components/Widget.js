import React from 'react';
import './css/main.css';
import './css/weather-icons.min.css';

class Widget extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			city:'',
			icon:'',
			degree:'',
			desc:'',
			minTemp:'',
			maxTemp:'',
		};
	}

	//Intial Call
	componentDidMount(){
		const city = this.props.data.name;
		this.getWeatherDetails(city);
	}

	//get weather details of the city
	getWeatherDetails(city){
		fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=f13819a3570693bb579b1457e599279e', {
	        method: 'GET',
	    })
	    .then(respose => respose.json())
	    .then(parsedJSON => {
	    	const data = parsedJSON;
	    	console.log(data);
	    	this.setState({
	    		city:data.name,
				icon:'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png',
				degree:data.main.temp,
				desc:data.weather[0].description,
				minTemp:data.main.temp_min,
				maxTemp:data.main.temp_max,
	    	})
	    })
	    .catch(err => {
	        console.log(err);
	    });
	}


	render() {
		
		return (
			<div id="widgetContainer">		
				<section className="widget_cnt">
					<span className="cityName">{this.state.city}</span>
					<div className="icon">
						<img src={this.state.icon} alt="weather" />
					</div>
					<span className="degree">{this.state.degree}&#176;</span>
					<span className="desc">{this.state.desc}</span>
					<div className="highlowCntr">
						<div className="high">
							<i className="fas fa-caret-down"></i>
							<p>{this.state.minTemp}&#176;</p>
							<span>Min</span>
						</div>
						<div className="low">
							<i className="fas fa-caret-up"></i>
							<p>{this.state.maxTemp}&#176;</p>
							<span>Max</span>
						</div>
					</div>
				</section>
			</div>
		);
	}

}
export default Widget