import React from 'react';
import './css/main.css';
import './css/weather-icons.min.css';
import * as city from './city';
import {connect} from 'react-redux';
import {addWidget} from '../actions/WidgetActions';
import Select from 'react-select';

class AddWidget extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			city:'',
			addwidgetbox:false,
			selectedCity:'',
			cityOptions:[],	
			
		}
		this.showWidgetAddtionBox = this.showWidgetAddtionBox.bind(this);
		this.filterCities = this.filterCities.bind(this);
		this.handleSelectChangeCity = this.handleSelectChangeCity.bind(this);
		this.addCity = this.addCity.bind(this);
	}

	//Intial Call
	componentDidMount(){
		this.filterCities();
	}

	
	//filtering cities from selected cities and option for select
	filterCities(){
		const cities = city.default;
		const selectedCities = this.props.widgetsProps.widget;
		let citeisObj = [];
		for (let i =0;i<cities.length;i++) {
			citeisObj.push({
				"id": cities[i].id,
				"name": cities[i].name,
	        })
		}
		var filteredCities = cities;
		for(let k =0;k<selectedCities.length;k++) {
			filteredCities = filteredCities.filter((item) => item.id !== selectedCities[k].id);
		}


		/// creating options for selct
		let options = [];
		for (let l =0;l<filteredCities.length;l++) {
			options.push({
				"value": filteredCities[l].id,
				"label": filteredCities[l].name,
	        })
		}
		this.setState({
			cityOptions:options
		})

	}


	//handling select change
	handleSelectChangeCity = (selectedOption) =>{
		this.setState({ 
	    	selectedCity:selectedOption,
	   	});
	}


	// toggling b.w adding and canceling
	showWidgetAddtionBox(){
		this.setState({
			addwidgetbox:!this.state.addwidgetbox
		})
	}

	//Add widget
	addCity(){
		const that = this;
        if(this.state.selectedCity){
        	const newNewWidget = [{
	            "id": this.state.selectedCity.value,
	            "name": this.state.selectedCity.label,
	        }];
	        this.setState({
				selectedCity:'',
			})
			this.props.addNewWidget(newNewWidget).then(()=>{
			   that.filterCities();
			})
        }
        
	}
	

	render() {
		
		return (
			<div id="addwidgetContainer">	
				<div className="widget_cnt">	
					<div className="addClickCntr">
						<h4>Add Widget</h4>
						{this.state.addwidgetbox?
							<div className="addwidgetbox">
								<h5 className="head">Please select a city.</h5>
								<div className="selectCntr">
									<Select
										id="city" 
										name="city"
								        value={this.state.selectedCity}
								        onChange={this.handleSelectChangeCity}
								        options={this.state.cityOptions}
								        isSearchable='true'
								      />
							      </div>
								<div className="widBtn" onClick={this.addCity}>ADD</div>
								<div  className="widBtn" onClick={this.showWidgetAddtionBox}>Cancel</div>
							</div>
							:
							<i className="far fa-plus-square" onClick={this.showWidgetAddtionBox}></i>
						}
					</div>
				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
    return {
        widgetsProps:state.widgetRed,
    }
}


const mapDispatchtoProps = (dispatch) =>{
    return {
        addNewWidget:(postsValue) => dispatch(addWidget(postsValue))
    } 
}

export default connect(mapStateToProps,mapDispatchtoProps)(AddWidget)