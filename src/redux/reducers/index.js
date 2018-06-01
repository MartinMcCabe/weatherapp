import { combineReducers } from 'redux'
import weather from './weatherReducer'
// will add more reducers here later if needed

const rootReducer = combineReducers({
    weather
})

export default rootReducer
