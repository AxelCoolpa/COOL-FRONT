/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import { useGetUsersQuery } from "../../api/getUsers";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState([]);
	const { data, error, isLoading, isFetching } = useGetUsersQuery(null)

  if (isLoading || isFetching) return <p>Loading...</p>
  if (error) return <p>Error.</p>

  // Función para aceptar a un usuario  
  const handleAcceptUser = (userId: string) => {
    // Lógica para aceptar al usuario (puedes implementarla posteriormente)
    console.log(`Sucessfull user: ${userId}`);
	alert('call to action')
  };

  // Cargar la lista de usuarios desde el archivo JSON
  fetch("/src/mocks/user-provider.json")
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) =>
      console.error("Error to updated user list:", error)
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard de Administrador</h1>
      {
      
      data?.map((user) => (
        <div key={user._id} className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-xl font-bold">{user.email}</h3>
          <h3 className="text-xl font-bold">{user.username}</h3>
          <h3 className="text-xl font-bold">{user.avatar}</h3>
          <p className="text-gray-500">ID: {user._id}</p>
          <p className="text-gray-500">Name: {user.firstname}</p>
          <p className="text-gray-500">Last Name: {user.lastName}</p>
          <button
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            onClick={() => handleAcceptUser(user._id)}
          >
            Aceptar
          </button>
          <hr className="my-4" />
        </div>
      ))
      
      }
    </div>
  );
};

export default Dashboard;
