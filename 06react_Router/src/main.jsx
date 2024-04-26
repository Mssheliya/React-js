import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import WebLayout from './WebLayout.jsx'
import { About, Contact, Github, Home, User } from './components/index.jsx'
import { getGithubData } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//     {
//        path: "/",
//        element: <WebLayout />,
//        children: [
//           {
//             path: "",
//             element: <Home/>
//           }, 
//           {
//             path: "about",
//             element: <About />
//           }
//        ]  
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<WebLayout />}>
           <Route path='' element= {<Home />}/> 
           <Route path='about' element= {<About />}/> 
           <Route path='contact' element= {<Contact />}/> 
           <Route path='user/:id' element= {<User />}/> 
           <Route 
            loader={getGithubData}
            path='github' 
            element= {<Github />}
           /> 
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router= {router}/>
  </React.StrictMode>,
)
