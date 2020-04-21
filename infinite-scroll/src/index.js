import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let fetchData = (()=>{
  return async function(){
    try{
      let response = await fetch('https://jsonplaceholder.typicode.com/photos');
      let data = await response.json();          
      return data;
    }catch(e){
      console.log(e);
    }
    
  }
})();

fetchData().then((data)=>{
  data = data.slice(0,50);
  ReactDOM.render(<App photos={data}/>,document.getElementById('root'));
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
