import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Todo from './views/Todo';
import User from './views/User';

function App() {
  return (
    <>
      <Todo />
      <Routes>
        {/* <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} /> */}
        <Route path='/user' element={<User/>} />
      </Routes>
    </>
  );
}

export default App;
