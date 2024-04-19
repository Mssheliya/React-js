import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Nav } from './First.jsx'

//------------------------------------------------------------********---------------------------------------------------------------------

function MyApp(username){
  this.username = username
  return(
    <>
      <p>Your Username is:- {username}</p>
    </>
  )
}
const ali = new MyApp("Ali");

//------------------------------------------------------------********---------------------------------------------------------------------

const CreateElemnt = (
    <p id='world'>Hello World</p>
)

const ReactElement = React.createElement(
    "a",
    {
      href:"Https://github.com/Mssheliya",
      id: "github",
    },
    "go to My Github"
)

//------------------------------------------------------------********---------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("head")).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode> 
)
ReactDOM.createRoot(document.getElementById('container')).render(
    ReactElement
)
