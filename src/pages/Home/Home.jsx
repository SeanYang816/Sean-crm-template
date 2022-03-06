import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import { BASE_URL, API_KEY, runParam } from 'service/api'
import PropTypes from 'prop-types'
import styles from './Home.module.scss'

const params = {
  language: 'eng'
  // abbreviation: 'bsb',
  // name: 'Berean Study Bible',
  // ids: 'de4e12af7f28f599-01'
  // 'include-full-details': true
}

const bibleId = 'de4e12af7f28f599-01'
const GET_BOOKS = `bibles/${bibleId}/books`

const Home = props => {
  const [bibles, setBibles] = useState([])
  const [books, setBooks] = useState([])
  const [chapters, setChapters] = useState([])
  const [chapter, setChapter] = useState([])

  const handleBibleClick = async bibleId => {
    try {
      const res = await fetch(`${BASE_URL}bibles/${bibleId}/books`, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': API_KEY
        }
      })
        .then(res => res.json())
        .then(data => setBooks(data.data))
    } catch (error) {
      console.error(error)
    }
  }
  const handleBookClick = async bookId => {
    try {
      const res = await fetch(
        `${BASE_URL}bibles/${bibleId}/books/${bookId}/chapters`,
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
          }
        }
      )
        .then(res => res.json())
        .then(data => setChapters(data.data))
    } catch (error) {
      console.error(error)
    }
  }

  const chapterParam = {
    'content-type': 'text',
    'include-notes': 'false',
    'include-titles': 'true',
    'include-chapter-numbers': 'false',
    'include-verse-numbers': 'true',
    'include-verse-spans': 'false'
  }
  const handleChapterClick = async chapterId => {
    try {
      const res = await fetch(
        `${BASE_URL}bibles/${bibleId}/chapters/${chapterId}?${runParam(
          chapterParam,
          true
        )}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY
          }
        }
      )
        .then(res => res.json())
        .then(data => setChapter(data.data))
    } catch (error) {
      console.error(error)
    }
  }

  console.log(chapters)
  console.log(chapter.content)

  useEffect(() => {
    fetch(`${BASE_URL}bibles?${runParam(params, true)}`, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY
      }
    })
      .then(res => res.json())
      .then(data => setBibles(data.data))
  }, [])

  return (
    <>
      <div>Home</div>
      {/* Bibles */}
      {bibles.length && (
        <div>
          <p>Length: {bibles.length}</p>
          <hr />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)'
            }}
          >
            {bibles.map(item => {
              const {
                name: bibleName,
                id,
                abbreviation: abbr,
                language: { name: language },
                updatedAt
              } = item
              return (
                <div key={id}>
                  <button
                    key={id}
                    id={id}
                    className={styles.card}
                    onClick={() => handleBibleClick(id)}
                  >
                    <div style={{ fontSize: '24px' }}>{abbr} BIBLE</div>
                    {/* <div>ID : {id}</div>
                    <div style={{ fontSize: '11px' }}>{bibleName}</div>
                    <div>{language}</div> */}
                    <div style={{ fontSize: '11px' }}>
                      {updatedAt.slice(0, 9)}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {books.length && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(8, 1fr)'
          }}
        >
          {books.map(item => {
            const { id, bibleId, abbreviation, name, nameLong } = item
            return (
              <button
                key={id}
                id={id}
                className={styles.card}
                onClick={() => handleBookClick(id)}
              >
                {/* <p>ID: {id}</p>
                <p>Bible ID: {bibleId}</p>
                <p>Abbr: {abbreviation}</p> */}
                <p>{name}</p>
                {/* <p>Name Long: {nameLong}</p> */}
              </button>
            )
          })}
        </div>
      )}
      {chapters.length && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)'
          }}
        >
          {chapters.map(item => {
            const { id, bibleId, bookId, number, reference } = item
            return (
              <button
                key={id}
                id={id}
                className={styles.card}
                onClick={() => handleChapterClick(id)}
              >
                <p>
                  {/* {`${bookId[0].toUpperCase()}${bookId
                    .slice(1)
                    .toLowerCase()} ${number}`} */}
                  {reference} {number === 'intro' && 'Intro'}
                </p>
                {/* <p>Bible ID: {bibleId}</p> */}
              </button>
            )
          })}
        </div>
      )}
      {chapter.content && (
        <div>
          {/* // const { id, bibleId, bookId, number, reference, content, copyright, next, verseCount } = item */}
          <p>{chapter.content}</p>
        </div>
      )}
    </>
  )
}

Home.propTypes = {}

export default Home
