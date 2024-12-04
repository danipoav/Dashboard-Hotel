import { useEffect, useState } from 'react';
import { Form } from './components/Login/Login';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import Room from './components/Dashboard/Room/Room';
import { DashboardContent } from './components/Dashboard/DashboardContent';
import Users from './components/Dashboard/Users/Users';
import UsersCreate from './components/Dashboard/Users/UsersCreate';

function App() {

  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    const status = localStorage.getItem('isAuth');
    if (status === 'true') {
      setIsAuth(true)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'user@user.com' && password === 'user') {
      setIsAuth(true);
      localStorage.setItem('isAuth', 'true')
    } else {
      alert('Credenciales incorrectas');
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {<Route
            path="/"
            element={isAuth ? <Navigate to="/home" /> : <Form handleLogin={handleLogin} />}
          />}
          <Route path="/home" element={isAuth ? <Dashboard /> : <Navigate to="/" />}>
            <Route index element={<DashboardContent />}></Route>
            <Route path="room" element={<Room />}>
            </Route>
            <Route path='users' element={<Users />}>
              <Route path='create' element={<UsersCreate />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
