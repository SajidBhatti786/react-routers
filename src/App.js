import './pages/index.css';
import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans';
import VanDetail from "./pages/VanDetail";
import Host from './pages/Host';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Category from './pages/Category';
import Layout from './pages/Layout';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './pages/Host/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVansDetails';
import Pricing from './pages/Host/Pricing';
import Photos from './pages/Host/Photos';
import Details from './pages/Host/Details';
import NotFount from './pages/Host/NotFount';
import AuthRequired from './pages/Host/AuthRequired';
import Cart from './Cart';
import Login from './Login';
import HostVansDetailsLayout from './pages/Host/HostVansDetailsLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='vans/product/Route:category' element={<Category />} />
          <Route element={<AuthRequired />}>
            <Route path='host' element={<HostLayout />} >
              <Route index  element={<Dashboard />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='income' element={<Income />} />
              <Route path='vans' element={ <HostVans/>} />
              <Route path='vans/:id' element={<HostVanDetail/>} >
                <Route index  element={<Details />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='photos' element={<Photos/> } />
              </Route>
          </Route>
        </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFount />} />
          <Route path='/login' element={<Login/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
