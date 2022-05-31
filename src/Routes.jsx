import React, { useEffect, useCallback } from 'react'
import {
  BrowserRouter,
  Routes as DefaultRoutes,
  Route,
  useLocation,
  useSearchParams
} from 'react-router-dom'
import Home from 'pages/Home/Home'
import PageNotFound from 'pages/Home/PageNotFound'
import { getLocation } from 'reducers/router'
import { useDispatch } from 'react-redux'
import Bible from 'components/Bible'
import BibleList from 'components/Bible/BibleList/BibleList'
import BibleItem from 'components/Bible/BibleItem/BibleItem'

// eslint-disable-next-line react/display-name
const WithRouter = () => () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

let count = 0
const Routes = props => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const query = Object.fromEntries([...searchParams])
  useEffect(() => {
    dispatch(getLocation({query, ...location}))
    console.log(++count)
  }, [dispatch, location, query])
  return (
    <DefaultRoutes>
      <Route path="/" element={<Home />} />
      <Route path="bible" element={<Bible />} />
      <Route path="bibles" element={<BibleList />} />
      <Route path="/bible_:bibleId" element={<BibleItem />} />
      <Route path="*" element={<PageNotFound />} />
    </DefaultRoutes>
  )
}

Routes.propTypes = {}

export default WithRouter(Routes)
