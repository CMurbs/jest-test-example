import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
