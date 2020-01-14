import React from 'react';
import './css/main.css';
import Header from './Header';
import Widget from './Widget';
import {connect} from 'react-redux';
import {addWidget, fetchWidget} from '../actions/WidgetActions';

const widgetValue = [];

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			widgets:[],
		};
		this.addWidget = this.addWidget.bind(this);
	}

	//Intial Call
	componentDidMount(){
		// this.props.fetchallWidget();
		this.setState({
			widgets:this.props.widgetsProps.widget
		})
	}

	addWidget(){
		console.log("here");
		console.log(this.props.widgetsProps.widget);
		const newNewWidget = [{
            "id": 2172797,
            "name": "London",
        }];
		this.props.addNewWidget(newNewWidget);
		console.log(this.props.widgetsProps.widget);

	}


	render() {
		const widget_list=this.props.widgetsProps.widget.map((widget, index) => {
		  return (
		  	<div className="col-sm-12 col-md-4" key={widget.id}>
		     	<Widget data={widget}/>
		    </div>
		  );
		});
		return (
			<div id="onbrg_outer_cntr">	
				<Header/>			
				<div id="homeContainer">
					<div className="container">
					  <div className="row">
					  	{widget_list}
					  </div>
					</div>
					<div onClick={this.addWidget}>Click Here</div>
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
        addNewWidget:(postsValue) => dispatch(addWidget(postsValue)),
        fetchallWidget:() => dispatch(fetchWidget())
    } 
}

export default connect(mapStateToProps,mapDispatchtoProps)(Home); 