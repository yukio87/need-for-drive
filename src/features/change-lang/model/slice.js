import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lang: 'ru',
}

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleLang(state) {
      state.lang = state.lang === 'ru' ? 'en' : 'ru'
    },
  },
})

export const { toggleLang } = langSlice.actions
export const langReducer = langSlice.reducer

export const getLang = (store) => store.lang.lang
