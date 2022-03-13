import React from 'react'
import { useParams } from 'react-router-dom'

function PageNotFound() {
  const params = useParams()
  // Rainbow Giant Styled Text
  const style =
    'font-weight: bold; font-size: 36px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
  let message = `${params.pageName}`
  console.warn(`%c "${params.pageName}" doesn't exist !!!`, style)
  return (
    <div>
      {message === 'logout'
        ? 'you are logged out'
        : `Page "${message}" doesn't exist !!!`}
    </div>
  )
}

export default PageNotFound
