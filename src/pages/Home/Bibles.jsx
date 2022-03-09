import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter,
  Routes as DefaultRoutes,
  Route,
  Link,
  Outlet,
  useNavigate
} from 'react-router-dom'

const Bibles = props => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/bible_wtffff', { replace: true })}>
        Bible
      </button>
      <Outlet />
    </div>
  )
}

Bibles.propTypes = {}

export default Bibles
