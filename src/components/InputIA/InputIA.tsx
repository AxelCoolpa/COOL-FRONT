// import React, { useEffect, useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import axios from "axios";
// import { baseURL } from "../../baseURL";

// const InputIA = () => {
//   const [destinationsData, setDestinationsData] = useState(null);
//   const [model, setModel] = useState(null);
//   const [pregunta, setPregunta] = useState("");
//   const [respuesta, setRespuesta] = useState("");

//   useEffect(() => {
//     async function fetchDestinationsData() {
//       try {
//         const response = await axios.get(`${baseURL}/destinations`); // Reemplaza 'ruta-a-tu-api' con la URL correcta de tu API
//         return response.data; // Suponiendo que la respuesta de la API contiene los datos necesarios
//       } catch (error) {
//         console.error(
//           "Error al obtener los datos de destinos desde la API:",
//           error
//         );
//         return null;
//       }
//     }

//     async function loadModel() {
//       try {
//         const loadedModel = await tf.loadLayersModel(
//           "/src/mocks/user-provider.json"
//         );
//         setModel(loadedModel);
//       } catch (error) {
//         console.error("Error al cargar el modelo de IA:", error);
//       }
//     }

//     async function fetchData() {
//       const data = await fetchDestinationsData();
//       setDestinationsData(data);
//     }

//     loadModel();
//     fetchData();
//   }, []);

//   const procesarPregunta = () => {
//     const respuestaEncontrada = destinationsData?.destinos.find((destino) => {
//       const actividades = destino.actividades.map(
//         (actividad) => actividad.pregunta
//       );
//       return actividades.includes(pregunta);
//     });

//     if (respuestaEncontrada) {
//       setRespuesta(respuestaEncontrada.respuesta);
//     } else {
//       setRespuesta("Lo siento, no tengo la respuesta para esa pregunta.");
//     }
//   };

//   return (
//     <div className="relative">
//     <div className="absolute top-8  w-[15vw] flex">
//       <input
//         type="text"
//         value={pregunta}
//         onChange={(e) => setPregunta(e.target.value)}
//         className="border border-gray-300 px-4 py-2 rounded w-full"
//         placeholder="Ingrese una pregunta"
//       />
//       <button
//         onClick={procesarPregunta}
//         className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Enviar pregunta
//       </button>
//     </div>
//     <p className="mt-2">Respuesta: {respuesta}</p>
//   </div>
  
//   );
// };

// export default InputIA;
