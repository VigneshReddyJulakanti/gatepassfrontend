import './App.css';
import { Routes, Route } from "react-router-dom";
import EmailLogin from './Components/Login/EmailLogin';
function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<EmailLogin/>}></Route>
    </Routes>
    </>
  );
}

export default App;
