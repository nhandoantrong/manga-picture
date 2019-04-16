import data from '../../data/list.json'
import * as acionTypes from '../constants/actionType'

const initialState ={}

const currentImageReducer = (state = initialState,action) =>{
    switch (action.type) {
        case acionTypes.CHANGE_INDEX :
        {
            return state={...data[action.index],index:action.index};
        }
        default :
        {
            return state;
        }
    }

}

export default currentImageReducer