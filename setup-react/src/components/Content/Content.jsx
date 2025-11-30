import React from 'react'
import { Outlet } from 'react-router-dom'
import './Content.scss'

const Content = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Content
