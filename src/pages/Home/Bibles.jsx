import React, { useEffect } from 'react'
import { fetchBibles, fetchBooks } from 'reducers/bible'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Bibles = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const bibles = useSelector(state => state.bible.bibles)
  const books = useSelector(state => state.bible.books)
  const handleClick = async id => {
    navigate(`/bibles/${id}/books`)
    if (!books.length) {
      dispatch(fetchBooks(id))
    }
  }

  useEffect(() => {
    dispatch(fetchBibles())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {bibles.length &&
          bibles.map(item => (
            <button
              key={item.id}
              style={{ border: '1px black solid' }}
              onClick={() => handleClick(item.id)}
            >
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>{item.abbreviation}</p>
              {/* <p>{item.description}</p> */}
              {/* <p>{item.info}</p> */}
              <p>{item.copyright}</p>
              <p>{item.updatedAt}</p>
            </button>
          ))}
      </div>
    </>
  )
}

Bibles.propTypes = {}

export default Bibles
