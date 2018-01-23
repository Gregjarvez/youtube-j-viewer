import React from 'react';
import Editor from './container/Editor';
import Modeler from './container/Modeler';
import './styles/style.scss'

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <Editor />
        <Modeler />
      </div>
    </div>
  )
};


export default App;
