import { useState } from 'react';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  const [currentForm , setCurrentForm]=useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm ==="login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    
  
    </div>
  );
}

export default App;
