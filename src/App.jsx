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
 

function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>}>
    <Route index element = {<Home/>}></Route>
    <Route path="/shop" element = {<Shop/>}></Route>
    <Route path="/shop/:id" element = {<ProductDetails/>}></Route>
     
  </Route>
 ))

  return (
   <>
   <RouterProvider router = {router}></RouterProvider>
   </>
  )
}

export default App
