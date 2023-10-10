import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store'; 
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import Products from './Components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Products" element={<Products />}/>
          
      </Routes>
         <Nav />

    </BrowserRouter>
    </Provider>
   
  );
}

export default App;
