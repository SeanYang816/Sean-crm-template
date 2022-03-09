import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter,
  Routes as DefaultRoutes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom'

const Bible = props => {
  const params = useParams()
  return (
    <div>
      <div>Page {params.bibleId}</div>
    </div>
  )
}

Bible.propTypes = {}

export default Bible
