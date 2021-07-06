import {combineReducers} from 'redux'
import reducerDetail from './reducerDetail'
import reducerHome from './reducerHome'
import reducerCart from './reducerCart'
import reducerQuestions from './reducerQuestions'
import reducerBlog from './reducerBlog'

// const initialState = {

// }

export default combineReducers({
 main: reducerHome,
 detail: reducerDetail,
 cart: reducerCart,
 questions: reducerQuestions,
 blog: reducerBlog
})
