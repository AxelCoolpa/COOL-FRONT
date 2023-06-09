import axios from "axios";
import  RegisterFormData  from "../features/RegisterSlice";

export const registerUserAPI = async (formData: typeof RegisterFormData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/signUp", formData);
    // Aquí puedes realizar el manejo de la respuesta de la API
    // por ejemplo, validar la respuesta o extraer datos relevantes
    // y retornar cualquier resultado necesario
    return response.data; // Puedes ajustar esto según la estructura de la respuesta de la API
  } catch (error:any) {
    throw new Error(error.message);
  }
};
