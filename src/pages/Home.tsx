import React from 'react'

const Home = () => {
  return (
    <>
        <div className="container mx-auto border rounded-md">
            <h1 className="text-center text-2xl font-bold p-2">Bienvenido a mi sitio</h1>
            <p className='text-center'>Este es un párrafo dentro del contenedor.</p>
            <div className="flex justify-center gap-2 p-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Mi botón
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Mi botón
                </button>
            </div>
            


        </div>
    </>
  )
}

export default Home