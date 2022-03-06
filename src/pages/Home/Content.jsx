import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from 'reducers/bible'

const Content = props => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const content = useSelector(state => state.bible.content)

  const handleClick = (bibleId, chapterId) => {
    navigate(`/bibles/${bibleId}/chapters/${chapterId}`)
    dispatch(fetchContent({ bibleId, chapterId }))
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
      {content.id && (
        <div>
          <button
            onClick={() => handleBackClick(content.bibleId, content.bookId)}
          >
            Go back
          </button>
          <p>{content.reference}</p>
          <div dangerouslySetInnerHTML={{ __html: content.content }} />
          <p>{content.copyright}</p>
          <button
            onClick={() => handleClick(content.bibleId, content.previous?.id)}
          >
            Previous
          </button>
          <button onClick={() => handleClick(content.bibleId, content.next.id)}>
            Next
          </button>
        </div>
      )}
    </>
  )
}

Content.propTypes = {}

export default Content
