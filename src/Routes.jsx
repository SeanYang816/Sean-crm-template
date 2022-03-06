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
import Books from 'pages/Home/Books'
import Chapters from 'pages/Home/Chapters'
import Content from 'pages/Home/Content'

const Routes = props => {
  return (
    <BrowserRouter>
      <DefaultRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/bibles" element={<Bibles />} />
        <Route path="/bibles/:bibleId/books" element={<Books />} />
        <Route
          path="/bibles/:bibleId/books/:bookId/chapters"
          element={<Chapters />}
        />
        <Route
          path="/bibles/:bibleId/chapters/:chapterId"
          element={<Content />}
        />
        <Route path="*" element={<PageNotFound />} />
      </DefaultRoutes>
    </BrowserRouter>
  )
}

Routes.propTypes = {}

export default Routes
