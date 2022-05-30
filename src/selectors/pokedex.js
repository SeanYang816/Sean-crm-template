import { createSelector } from 'reselect'

export const starter = createSelector(
  (state) => state.pokedex.genOne,
  (genOne) => ({
    genOne
  })
)