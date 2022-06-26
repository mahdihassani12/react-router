import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummery from './components/OrderSummery';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import New from './components/New';
import Featured from './components/Featured';
import Users from './components/Users';
import User from './components/User';
import Profile from './components/Profile';
import { AuthProvider } from './components/Auth';

function App() {
  return (
    <div className="app-div">
      <>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/About' element={<About></About>} ></Route>
            <Route path='/Contact' element={<Contact></Contact>} ></Route>
            <Route path='/OrderSummery' element={<OrderSummery></OrderSummery>} ></Route>
            <Route path='*' element={<NoMatch></NoMatch>} ></Route>
            <Route path='/Products' element={<Products></Products>} >
              <Route index element={<Featured></Featured>} />
              <Route path='New' element={<New></New>} />
              <Route path='Featured' element={<Featured></Featured>} />
            </Route>
            <Route path='/Users' element={<Users></Users>} ></Route>
            <Route path='/Users/:user_id' element={<User></User>} ></Route>
            <Route path='/Profile' element={<Profile></Profile>} ></Route>
          </Routes>
        </AuthProvider>
      </>
    </div>
  );
}

export default App;
