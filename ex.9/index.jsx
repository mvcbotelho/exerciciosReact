import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

ReactDOM.render(
    <Field initalValue="Teste" />
    ,document.getElementById('app')
)
