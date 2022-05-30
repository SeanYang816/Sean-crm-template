import React from 'react'
import {
  Outlet,
  useNavigate
} from 'react-router-dom'

const Bible = props => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/bibles', { replace: true })
  }

  return (
    <>
      <button onClick={handleClick}>
        Bible
      </button>
      <Outlet />
    </>
  )
}

Bible.propTypes = {}

export default Bible