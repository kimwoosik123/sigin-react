import React from 'react'
import { Outlet } from 'react-router-dom';

export default function FooterComponent() {
  return (
    <>
    <footer id="footer">
        <h1>footer</h1>
      </footer>
      <Outlet />
    </>
  )
}
