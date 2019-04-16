import * as actionTypes from '../constants/actionType';

const initialState = localStorage.getItem('updateList') ? JSON.parse(localStorage.getItem('updateList')) : [];

const updateImage = (state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.PUSH_UPDATE_IMAGE:
            const index= state.findIndex(item => item.index=== action.image.index);
            if (index===-1)
                 state = [...state,action.image]
            else state[index]= {...action.image};
            localStorage.setItem('updateList', JSON.stringify(state));
            return state;
        default:
            return state;
    }
}

export default updateImage;