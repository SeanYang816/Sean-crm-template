import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChapters } from 'reducers/bible'

const Books = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const books = useSelector(state => state.bible.books)
  const chapters = useSelector(state => state.bible.chapters)

  const handleBackClick = () => navigate(`/bibles`)

  const handleClick = async (bibleId, bookId) => {
    navigate(`/bibles/${bibleId}/books/${bookId}/chapters`, {
      state: { book: bookId }
    })
    if (!chapters[bookId]) {
      dispatch(fetchChapters({ bibleId, bookId }))
    }
  }

  return (
    <>
      <button onClick={() => handleBackClick()}>Go back</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {books.length &&
          books.map(chapter => {
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
