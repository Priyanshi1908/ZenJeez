import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'; 
import Signup from './Components/Signup';
import ProductsLayout from './Components/ProductsLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Signup />} />
        
        <Route path="/Products" element={<ProductsLayout />} />


      </Routes>

    </BrowserRouter>
    </Provider>
   
  );
}

export default App;
