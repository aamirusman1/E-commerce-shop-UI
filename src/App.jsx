import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  
    return(
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/product" element = {<Product/>} />
          <Route path="/productlist" element = {<ProductList/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/cart" element = {<Cart/>} />
        </Routes>
      </Router>

    )
     

};

export default App;