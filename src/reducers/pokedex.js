import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  genOne: [
    {
      number: '001',
      name: 'Bulbasaur',
      type1: 'grass',
      type2: 'poison',
    },
    {
      number: '004',
      name: 'Charmander',
      type1: 'fire',
      type2: null,
    },
    {
      number: '007',
      name: 'Squirtle',
      type1: 'water',
      type2: null,
    },
  ]
}

const slice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    getPokemon() {
      console.log('do nothing')
    },
  }
})

export const { getPokemon } = slice.actions

export default slice.reducer
