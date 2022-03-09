import React from 'react'
import {
  BrowserRouter,
  Routes as DefaultRoutes,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/Home/PageNotFound'
import Bibles from 'pages/Home/Bibles'
import Bible from 'pages/Home/Bible'

const Routes = props => {
  return (
    <BrowserRouter>
      <DefaultRoutes>
        <Route path="/" element={<Home />} />
        <Route path="bibles" element={<Bibles />} />
        <Route path="/bible_:bibleId" element={<Bible />} />
        <Route path="*" element={<PageNotFound />} />
      </DefaultRoutes>
    </BrowserRouter>
  )
}

Routes.propTypes = {}

export default Routes
