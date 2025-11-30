import React from 'react'
import { useRoutes } from 'react-router-dom'
// import PrivateRoutes from './PrivateRoutes'
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"

const Allrouters = () => {
  // Kết hợp cả public và private routes
  const routes = useRoutes([...PublicRoutes, ...PrivateRoutes]);
  return (
    <div>
      {routes}
    </div>
  )
}

export default Allrouters
