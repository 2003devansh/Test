import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  formData: Record<string, any> | null;
  errors: Record<string, string>;
}

const initialState: FormState = {
  formData: null,
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormErrors: (state, action: PayloadAction<Record<string, string>>) => {
      state.errors = action.payload;
    },
    resetForm: (state) => {
      state.formData = null;
      state.errors = {};
    },
    setFormData: (state, action: PayloadAction<Record<string, any>>) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormErrors, resetForm, setFormData } = formSlice.actions;
export default formSlice.reducer;
