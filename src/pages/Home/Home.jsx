import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <Outlet />
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.any
}

export default Home
