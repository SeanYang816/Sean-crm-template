import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { BASE_URL, API_KEY } from "service/api"
import axios from 'axios'

const initialState = {
    bibleId: '',
    bibles: [],
    books: [],
    chapters: {},
    content: {}
}

// First, create the thunk
export const fetchBibles = createAsyncThunk(
    'bible/fetchBiblesStatus',
    async () => {
        try {
            const res = await axios.get(`${BASE_URL}/bibles?language=eng&include-full-details=true`, {
                headers: { 'api-key': API_KEY }
            })
            return res.data.data
        } catch (error) { console.error(error) }
    }
)

export const fetchBooks = createAsyncThunk(
    'bible/fetchBooksStatus',
    async (id) => {
        const res = await axios.get(`${BASE_URL}/bibles/${id}/books`, {
            headers: { 'api-key': API_KEY }
        })
        return res.data.data
    }
)

export const fetchChapters = createAsyncThunk(
    'bible/fetchChaptersStatus',
    async ({ bibleId, bookId }) => {
        const res = await axios.get(`${BASE_URL}/bibles/${bibleId}/books/${bookId}/chapters`, {
            headers: { 'api-key': API_KEY }
        })
        return res.data.data
    }
)

export const fetchContent = createAsyncThunk(
    'bible/fetchContentStatus',
    async ({ bibleId, chapterId }) => {
        const res = await axios.get(`${BASE_URL}/bibles/${bibleId}/chapters/${chapterId}?content-type=html&include-notes=true&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=true`, {
            headers: { 'api-key': API_KEY }
        })
        return res.data.data
    }
)

const slice = createSlice({
    name: "bible",
    initialState,
    reducers: {
        doNothing() {
            console.warn('Do nothing!')
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // builder.addCase(fetchBibles.pending, (state, action) => {
        // }),
        builder.addCase(fetchBibles.fulfilled, (state, action) => {
            state.bibles = action.payload
            state.books = []
        }),
            builder.addCase(fetchBibles.rejected, (state) => {
                state.bibles = []
            })

        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = (action.payload)
            state.bibleId = action.payload[0].bibleId
        }),
            builder.addCase(fetchBooks.rejected, (state) => {
                state.books = []
            })

        builder.addCase(fetchChapters.fulfilled, (state, action) => {
            state.chapters[action.payload[0].bookId] = (action.payload)
        }),
            builder.addCase(fetchChapters.rejected, (state) => {
                state.chapters = []
            })

        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.content[action.payload.id] = action.payload
        }),
            builder.addCase(fetchContent.rejected, (state) => {
                state.content = []
            })

    },
})

export const { doNothing } = slice.actions

export default slice.reducer
