import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Customers from './components/Cusotmers';
import Promote from './components/Promote';
import Help from './components/Help';
import Income from './components/Income'




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='customers' element={<Customers />} />
          <Route path='income' element={<Income />} />
          <Route path='promote' element={<Promote />} />
          <Route path='help' element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
