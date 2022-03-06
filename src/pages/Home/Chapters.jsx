import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from 'reducers/bible'

const Chapters = props => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const chapters = useSelector(state => state.bible.chapters)

  const handleBackClick = bibleId => navigate(`/bibles/${bibleId}/books`)

  const handleClick = async (bibleId, chapterId) => {
    navigate(`/bibles/${bibleId}/chapters/${chapterId}`)
    dispatch(fetchContent({ bibleId, chapterId }))
  }

  return (
    <>
      <button onClick={() => handleBackClick(chapters[0].bibleId)}>
        Go back
      </button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {chapters.length &&
          chapters.map((chapter, index) => {
            console.log(chapter)
            return (
              <button
                key={chapter.id}
                id={chapter.id}
                onClick={() => handleClick(chapter.bibleId, chapter.id)}
              >
                {chapter.bookId} {chapter.number}
              </button>
            )
          })}
      </div>
    </>
  )
}

Chapters.propTypes = {}

export default Chapters
