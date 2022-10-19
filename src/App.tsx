import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav"
import About from "./pages/About"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Sale from "./pages/Sale"
import { Notfound } from "./pages/NotFound"

function App() {

  return (
   <div className="relative">
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/sale" element={<Sale/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />

        {/* Auth pages */}

        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/signup" element={<SignUp/>} />
        <Route path="*" element={<Notfound/>} />

      </Routes>   
    </BrowserRouter>
   </div>
  )
}

export default App
