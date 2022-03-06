import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChapters } from 'reducers/bible'

const Books = props => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const books = useSelector(state => state.bible.books)

  const handleBackClick = () => navigate(`/bibles`)

  const handleClick = async (bibleId, bookId) => {
    navigate(`/bibles/${bibleId}/books/${bookId}/chapters`)
    dispatch(fetchChapters({ bibleId, bookId }))
  }

  return (
    <>
      <button onClick={() => handleBackClick()}>Go back</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {books.length &&
          books.map((chapter, index) => {
            console.log(chapter)
            return (
              <button
                key={chapter.id}
                id={chapter.id}
                onClick={() => handleClick(chapter.bibleId, chapter.id)}
              >
                {chapter.name}
              </button>
            )
          })}
      </div>
    </>
  )
}

Books.propTypes = {
  chapter: PropTypes.object
}

export default Books
