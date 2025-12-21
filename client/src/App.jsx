import  {Fragment, useState} from 'react'
import './App.css'

import InputTodo from './components/inputTodo'
import ListTodos from './components/listTodos'

function App() {

  return <Fragment>
    <div className="container">
     <ListTodos/>
    </div>
    </Fragment>
}

export default App
