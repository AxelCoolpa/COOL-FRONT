import axios from "axios";
import { LoginFormData } from "../features/LoginSlice";

export const loginUserAPI = async (formData: LoginFormData): Promise<void> => {
  try {
    const response = await axios.post("http://localhost:3000/api/signIn", formData);
    // Aquí puedes manejar la respuesta de la API, por ejemplo, guardar el token de autenticación en el estado de la aplicación.
    console.log(response.data); // Solo como ejemplo, puedes adaptar esto a tus necesidades
  } catch (error:any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
