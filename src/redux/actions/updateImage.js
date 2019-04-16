import * as actionTypes from '../constants/actionType'


export const updateImage = (image) =>({
    type : actionTypes.PUSH_UPDATE_IMAGE,
    image
})