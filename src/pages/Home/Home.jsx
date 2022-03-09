import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter,
  Routes as DefaultRoutes,
  Route,
  Link,
  Outlet
} from 'react-router-dom'

const Home = props => {
  return (
    <>
      <Link to="bibles">Bibles</Link>
    </>
  )
}

Home.propTypes = {}

export default Home
