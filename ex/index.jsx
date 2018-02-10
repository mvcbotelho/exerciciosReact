import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Carvalho'>
        <Member name='Marcus' />
        <Member name='Maria' />
        <Member name='João' />
    </Family>,
    document.getElementById('app')
)