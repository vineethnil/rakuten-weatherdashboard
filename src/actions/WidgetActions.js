
import axios from 'axios';
import {ADD_WIDGET, DELETE_WIDGET, FETCH_ALL_WIDGET} from './types';

const addWidget = (payloadvalue) =>dispatch =>  {
    dispatch({
        type:ADD_WIDGET,
        payload:payloadvalue
    });
    return Promise.resolve();
}

const deleteWidget = (payloadvalue) => {
     // console.log(payloadvalue);
    return {
        type:DELETE_WIDGET,
        payload:payloadvalue
    }
}

const fetchWidget = () =>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            dispatch({type:FETCH_ALL_WIDGET,payload:res.data.slice(0,10)})
        })
        .catch(err =>{
            console.log(err);
        })
    }
}

export {
    addWidget,
    deleteWidget,
    fetchWidget
}