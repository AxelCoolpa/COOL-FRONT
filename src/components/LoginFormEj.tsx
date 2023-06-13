import React from 'react'

const LoginFormEj: React.FC=() => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("path/to/background-image.jpg")' }}>
    <main className="max-w-lg p-8 bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Nombre</label>
          <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Mensaje</label>
          <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md" rows={4}></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar</button>
      </form>
    </main>
  </div>      
    )
};

export default LoginFormEj