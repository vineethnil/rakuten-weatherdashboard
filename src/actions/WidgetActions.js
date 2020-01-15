import {ADD_WIDGET, DELETE_WIDGET} from './types';

const addWidget = (payloadvalue) =>dispatch =>  {
    dispatch({
        type:ADD_WIDGET,
        payload:payloadvalue
    });
    return Promise.resolve();
}

const deleteWidget = (payloadvalue) => {
    return {
        type:DELETE_WIDGET,
        payload:payloadvalue
    }
}

export {
    addWidget,
    deleteWidget
}