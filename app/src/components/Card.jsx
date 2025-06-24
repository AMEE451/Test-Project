import React from 'react'

const Card = ({ home }) => {
  return (
    <div className='p-3 bg-white rounded overflow-visible'>
      <div className="p-2 rounded transform transition hover:scale-105">
        <img src={home.image} alt="" className='w-full h-48 object-fill rounded' />
        <h2 className="text-gray-500 font-semibold">{home.name} </h2>
        <p className="text-gray-500">{home.location}</p>
        <p className="text-blue-600 font-semibold">{home.price}</p>
        <div className="mt-3 flex gap-2 flex justify-center">
          <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">Add</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">Edit</button>
          <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">Delete</button>
        </div>
      </div>

    </div>
  )
}

export default Card