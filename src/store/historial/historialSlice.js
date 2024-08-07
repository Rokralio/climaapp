
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageSave: '',
  data: [],
  requestCount: 0,
};

export const historialSlice = createSlice({
  name: 'historial',
  initialState,
  reducers: {
    startSaving: (state) => {
      state.isSaving = true;
      state.messageSave = '';
    },
    savingSuccess: (state, action) => {
      state.isSaving = false;
      state.messageSave = action.payload;
    },
    savingFailure: (state, action) => {
      state.isSaving = false;
      state.messageSave = action.payload;
    },
    setRequestCount: (state, action) => {
      state.requestCount = action.payload;
    },
    resetRequestCount: (state) => {
      state.requestCount = 0;
    },
    setHistorialData: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { 
  startSaving, 
  savingSuccess, 
  savingFailure, 
  setRequestCount, 
  resetRequestCount,
  setHistorialData
} = historialSlice.actions;

export default historialSlice.reducer;
