import {  
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route

 } from "react-router-dom"
import Home from "./components/pages/Home"
import Layout from "./components/Layout"
 

function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>}>
    <Route index element = {<Home/>}></Route>
  </Route>
 ))

  return (
   <>
   <RouterProvider router = {router}></RouterProvider>
   </>
  )
}

export default App
