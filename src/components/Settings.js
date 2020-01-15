import React from 'react';
import './css/main.css';
import Header from './Header';
import Widget from './Widget';
import AddWidget from './AddWidget';
import {connect} from 'react-redux';
import {deleteWidget} from '../actions/WidgetActions';
import {Link} from 'react-router-dom';

class Settings extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			widgets:[],
		};
		this.deleteWidget = this.deleteWidget.bind(this);
	}

	//Intial Call
	componentDidMount(){
		this.setState({
			widgets:this.props.widgetsProps.widget
		})
	}

	deleteWidget(widget){
		this.props.deleteWidget(widget);
	}	


	render() {
		const widget_list=this.props.widgetsProps.widget.map((widget, index) => {
		  return (
		  	<div className="col-12 col-sm-4 widgetBox" key={widget.id}>
		  		<div id="delete_widget" onClick={() => this.deleteWidget(widget.id)}><i className="far fa-times-circle"></i></div>
		     	<Widget data={widget}/>
		    </div>
		  );
		});
		return (
			<div id="onbrg_outer_cntr">	
				<Header/>			
				<div id="settingsContainer">
					<div className="container">
					  <h3>Settings <Link to="/">Return back home</Link></h3>
					  <div className="row">
					  	<div className="col-12 col-sm-4">
		     				<AddWidget/>
		     			</div>
					  	{widget_list}
					  </div>
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
        deleteWidget:(widgetId) => dispatch(deleteWidget(widgetId))
    } 
}



export default connect(mapStateToProps,mapDispatchtoProps)(Settings); 