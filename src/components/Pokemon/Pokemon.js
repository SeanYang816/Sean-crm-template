import React from 'react'
import { useSelector } from 'react-redux'
import { starter } from 'selectors/pokedex'

const Pokemon = () => {
  const { genOne } = useSelector(starter)
  return (
    <>
      {genOne.map(({ number, name, type1, type2 }) => {
        return (
          <div key={number} style={{ marginBottom: '10px' }}>
            <div><span>#{number}</span>&nbsp;<b>{name}</b></div>
            <p>type: {type1}{type2 ? `, ${type2}` : ''}</p>
          </div>
        )
      })}
    </>
  )
}

Pokemon.propTypes = {}

export default Pokemon