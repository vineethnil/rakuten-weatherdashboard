import React from 'react';
import './css/main.css';
import Header from './Header';
import Widget from './Widget';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.state = { 
			widgets:[],
		};
	}

	//Intial Call
	componentDidMount(){
		this.setState({
			widgets:this.props.widgetsProps.widget
		})
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
					  	{this.props.widgetsProps.widget.length>0?
					  		<>
					  			{widget_list}
					  		</>
					  		:
					  		<p className="empty_text">No widget to show. Please add widget on <Link to="/settings">settings</Link></p>
					  	}
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

export default connect(mapStateToProps,)(Home); 