import React from 'react'
import Pokemon from 'components/Pokemon/Pokemon'
import Header from 'components/Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/bible', { replace: true })
  return (
    <>
      <Header />
      <button onClick={handleClick}>Bible</button>
      <Pokemon />
      <Outlet />
      </>
  )
}

export default Home
