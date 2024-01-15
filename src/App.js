import './App.css';
import Todo from './todo';

const App = ()=>{
  if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('../public/sw')
      .then(registration =>{
        console.log(`Service worker registered: ${registration}`);
      })
      .catch(error =>{
        console.log(`Service worker registration failed: ${error}`);
      })
    })
  }

  return <Todo />
}

export default App;