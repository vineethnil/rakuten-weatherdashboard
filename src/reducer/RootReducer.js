import {combineReducers} from 'redux';
import widgetReducer from './WidgetReducer';

const rootreducer = combineReducers({
    widgetRed: widgetReducer
})

export default rootreducer;