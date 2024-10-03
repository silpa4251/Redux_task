
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Display from './Components/Display';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Input />}/>
      <Route path='/display' element={<Display />}/>
      </Routes>
      
    </div>
  );
} 

export default App;
