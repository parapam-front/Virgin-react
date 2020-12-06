import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer';
// import thunk from 'redux-thunk'

const store = createStore(rootReducer)


const app = (
        <Provider store={store}>
            <App/>
        </Provider>
)

ReactDom.render(
        app,
        document.getElementById('app')
)
