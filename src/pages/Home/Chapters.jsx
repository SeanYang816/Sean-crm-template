import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from 'reducers/bible'

const Chapters = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const chapters = useSelector(state => state.bible.chapters)

  const handleBackClick = bibleId => navigate(`/bibles/${bibleId}/books`)

  const handleClick = async (bibleId, chapterId) => {
    navigate(`/bibles/${bibleId}/chapters/${chapterId}`, {
      state: { chapter: chapterId, ...location.state }
    })
    dispatch(fetchContent({ bibleId, chapterId }))
  }
  const book = location.state.book

  return (
    <>
      <button onClick={() => handleBackClick(chapters[book].bibleId)}>
        Go back
      </button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {chapters[book] &&
          chapters[book].map(chapter => {
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
