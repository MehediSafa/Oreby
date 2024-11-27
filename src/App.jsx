import {  
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route

 } from "react-router-dom"
import Home from "./components/pages/Home"
import Layout from "./components/Layout"
import Shop from "./components/pages/Shop"
import ProductDetails from "./components/pages/ProductDetails"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Error from "./components/pages/Error"
import Cart from "./components/pages/Cart"
import Checkout from "./components/pages/Checkout"
 

function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>}>
    <Route index element = {<Home/>}></Route>
    <Route path="/shop" element = {<Shop/>}></Route>
    <Route path="/shop/:id" element = {<ProductDetails/>}></Route>
    <Route path="/about" element = {<About/>}></Route>
    <Route path="/contact" element = {<Contact/>}></Route>
    <Route path="/contact" element = {<Contact/>}></Route>
    <Route path="/cart" element = {<Cart/>}></Route>
    <Route path="/checkout" element = {<Checkout/>}></Route>
    <Route path="*" element = {<Error/>}></Route>
     
  </Route>
 ))

  return (
   <>
   <RouterProvider router = {router}></RouterProvider>
   </>
  )
}

export default App
