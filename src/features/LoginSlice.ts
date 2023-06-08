import { createSlice } from "@reduxjs/toolkit";

// Definir el slice
const loginSlice = createSlice({
  name: "login",
  initialState: {
    formData: {
      username: "",
      password: "",
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = { username: "", password: "" };
    },
    // Aquí puedes agregar más acciones relacionadas con el inicio de sesión, como acciones para manejar el éxito o el fallo del inicio de sesión.
  },
});

// Exportar las acciones
export const { updateFormData, resetFormData } = loginSlice.actions;

// Exportar el reducer
export default loginSlice.reducer;
