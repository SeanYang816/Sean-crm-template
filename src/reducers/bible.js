import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL, API_KEY } from "service/api"
const initialState = {
    bibles: [],
    books: [],
    chapters: [],
    content: {}
}

// First, create the thunk
export const fetchBibles = createAsyncThunk(
    'bible/fetchBiblesStatus',
    async (_, _thunkAPI) => {
        const res = await fetch(`${BASE_URL}/bibles?language=eng&include-full-details=true`, {
            headers: { 'api-key': API_KEY }
        })
            .then(res => res.json())
            .then(data => data.data)
        return res
    }
)

export const fetchBooks = createAsyncThunk(
    'bible/fetchBooksStatus',
    async (id, _thunkAPI) => {
        const res = await fetch(`${BASE_URL}/bibles/${id}/books`, {
            headers: { 'api-key': API_KEY }
        })
            .then(res => res.json())
            .then(data => data.data)
        return res
    }
)

export const fetchChapters = createAsyncThunk(
    'bible/fetchChaptersStatus',
    async ({ bibleId, bookId }, _thunkAPI) => {
        const res = await fetch(`${BASE_URL}/bibles/${bibleId}/books/${bookId}/chapters`, {
            headers: { 'api-key': API_KEY }
        })
            .then(res => res.json())
            .then(data => data.data)
        return res
    }
)

export const fetchContent = createAsyncThunk(
    'bible/fetchContentStatus',
    async ({ bibleId, chapterId }, _thunkAPI) => {
        console.log(chapterId)
        const res = await fetch(`${BASE_URL}/bibles/${bibleId}/chapters/${chapterId}?content-type=html&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=true`, {
            headers: { 'api-key': API_KEY }
        })
            .then(res => res.json())
            .then(data => data.data)
        return res
    }
)

const slice = createSlice({
    name: "bible",
    initialState,
    reducers: {
        doNothing(state) {
            console.log('Do nothing!')
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // builder.addCase(fetchBibles.pending, (state, action) => {
        // }),
        builder.addCase(fetchBibles.fulfilled, (state, action) => {
            // Add user to the state array
            state.bibles = (action.payload)
        }),
            builder.addCase(fetchBibles.rejected, (state, action) => {
                // Add user to the state array
                state.bibles = []
            })

        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            // Add user to the state array
            state.books = (action.payload)
        }),
            builder.addCase(fetchBooks.rejected, (state, action) => {
                // Add user to the state array
                state.books = []
            })

        builder.addCase(fetchChapters.fulfilled, (state, action) => {
            // Add user to the state array
            state.chapters = (action.payload)
        }),
            builder.addCase(fetchChapters.rejected, (state, action) => {
                // Add user to the state array
                state.chapters = []
            })

        builder.addCase(fetchContent.fulfilled, (state, action) => {
            // Add user to the state array
            state.content = (action.payload)
        }),
            builder.addCase(fetchContent.rejected, (state, action) => {
                // Add user to the state array
                state.content = []
            })

    },
})

export const { doNothing } = slice.actions

export default slice.reducer
