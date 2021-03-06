
import {ADD_WIDGET, DELETE_WIDGET} from '../actions/types';

const initState = {
    widget:[
        {
            "id": 2643743,
            "name": "London",
        },
        {
            "id": 5128638,
            "name": "New York",
        },
        {
            "id": 1277333,
            "name": "Bangalore",
        },
    ]
}

const widgetReducer =(state=initState,action) =>{
   switch(action.type){
        case ADD_WIDGET:
            const newWidget = [...action.payload,...state.widget];
            const newState = {...state,widget:newWidget}
            return newState;
        case DELETE_WIDGET:
            const filteredWidget = state.widget.filter(eachwidget => {
                            return eachwidget.id !== action.payload;
                        });
            const updatedWidget = {...state,widget:filteredWidget}
            return updatedWidget;
        default:
            return state;
    }
}

export default widgetReducer;