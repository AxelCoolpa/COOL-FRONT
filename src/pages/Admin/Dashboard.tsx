/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState([]);

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
      {users.map((user: any) => (
        <div key={user.id} className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-500">Email: {user.email}</p>
          <button
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            onClick={() => handleAcceptUser(user.id)}
          >
            Aceptar
          </button>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
