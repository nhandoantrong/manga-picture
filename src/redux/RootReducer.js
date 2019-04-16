import { combineReducers } from 'redux'
import currentImage from './reducers/currentImageReducer'
import updateImage from './reducers/updateImageReducer'
const MangaPicture = combineReducers({
    currentImage,
    updateImage
})

export default MangaPicture