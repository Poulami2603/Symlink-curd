import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddUser from './Pages/AddUser';
import Edit from './Pages/Edit';
import './App.css';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
