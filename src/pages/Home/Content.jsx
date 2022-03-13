import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from 'reducers/bible'

const Content = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const content = useSelector(state => state.bible.content)
  const chapter = content[location.state.chapter]

  const handleClick = (bibleId, chapterId) => {
    navigate(`/bibles/${bibleId}/chapters/${chapterId}`, {
      state: { chapter: chapterId, book: bibleId }
    })
    if (!content[chapterId]) {
      dispatch(fetchContent({ bibleId, chapterId }))
    }
  }

  const handleBackClick = (bibleId, bookId) =>
    navigate(`/bibles/${bibleId}/books/${bookId}/chapters`)

  // id(pin): "NAM.3"
  // bibleId(pin): "bba9f40183526463-01"
  // number(pin): "3"
  // bookId(pin): "NAM"
  // reference(pin): "Nahum 3"
  // copyright(pin): "Berean Study Bible © Bible Hub, 2020."
  // verseCount(pin): 19
  // content: ....
  return (
    <>
      {chapter && (
        <div>
          <button
            onClick={() => handleBackClick(chapter.bibleId, chapter.bookId)}
          >
            Go back
          </button>
          <p>{content.reference}</p>
          <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
          <p>{content.copyright}</p>
          <button
            onClick={() => handleClick(chapter.bibleId, chapter.previous.id)}
          >
            Previous
          </button>
          <button onClick={() => handleClick(chapter.bibleId, chapter.next.id)}>
            Next
          </button>
        </div>
      )}
    </>
  )
}

Content.propTypes = {}

export default Content
