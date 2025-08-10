// src/App.js
import './App.css';
import NavBar from './navBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home'; // Changed to named import
import { About } from './Pages/About'; // Changed to named import
import { Services } from './Pages/Services'; // Changed to named import
import { Contact } from './Pages/Contact'; // Changed to named import
import { Prices } from './Pages/Prices'; // Changed to named import
import { LoginSignUp } from './Pages/LoginSignUp'; // Changed to named import
// import { Portfolio } from './Pages/Portfolio'; // Uncomment and create this file/component
// import { Products } from './Pages/Products'; // Uncomment and create this file/component
// import { Product } from './Pages/Product'; // Uncomment and create this file/component

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/login" element={<LoginSignUp />} />
          {/* <Route path="/portfolio" element={<Portfolio category="all" />} /> */}
          {/* <Route path="/websites" element={<Portfolio category="websites" />} /> */}
          {/* <Route path="/apps" element={<Portfolio category="apps" />} /> */}
          {/* <Route path="/java" element={<Portfolio category="java" />} /> */}
          {/* <Route path="/CSharp" element={<Portfolio category="CSharp" />} /> */}
          {/* <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/productId" element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;