import { Form } from './components/Login/Login';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import Room from './components/Dashboard/Room/Room';
import { DashboardContent } from './components/Dashboard/DashboardContent';
import Users from './components/Dashboard/Users/Users';
import UsersCreate from './components/Dashboard/Users/UsersCreate';
import Bookings from './components/Dashboard/Bookings/Bookings';
import RoomDetails from './components/Dashboard/Room/RoomDetails';
import RoomCreate from './components/Dashboard/Room/RoomCreate';
import UsersDetails from './components/Dashboard/Users/UsersDetails';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/slices/authSlice';
import Contact from './components/Dashboard/Contact/Contact';

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }))
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

            <Route index element={<DashboardContent />} />

            <Route path="room" element={<Room />}>
              <Route path='show/:id' element={<RoomDetails />} />
              <Route path='create' element={<RoomCreate />} />
            </Route>

            <Route path='bookings' element={<Bookings />} >

            </Route>

            <Route path='users' element={<Users />}>
              <Route path='create' element={<UsersCreate />} />
              <Route path='show/:id' element={<UsersDetails />} />
            </Route>

            <Route path='contacts' element={<Contact />}>

            </Route>

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
