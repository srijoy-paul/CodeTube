import React from 'react'

function Topic({ name }) {
    return (
        <button className="text-xs px-2 bg-gray-100 rounded-lg">{name}</button>
    )
}

export default Topic