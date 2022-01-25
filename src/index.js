import React from 'react';
import ReactDOM  from 'react-dom';
// we are importing libraries from json package
import App from './components/App'
// this will import all the code from App.js 
import './Styles/global.css'


// with react, we want to separate components into separate files. 
// it is easier to maintain the code if components are separate
// 
// easier to create a components folder and create js files within
// each JS file will need to have React imported & exported default App
// each newly created js document should be imported to this index.js


// all index.JS needs to have is the imports above and the below code: 

const reactContentRoot = document.getElementById("root"); 
ReactDOM.render(<App />, reactContentRoot) 
// this code can even be simplified to look as below:
// ReactDOM.render(<App />, document.getElementById("root")) 
// the above renders out our app

// once the above has imports and code, we will work within App.js



