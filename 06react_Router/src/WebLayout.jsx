import React from 'react'
import {
   Header, 
   Footer
} from './components';
import { Outlet } from 'react-router-dom';

function WebLayout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  )
}

export default WebLayout
