import React from 'react'

interface CommentProps {
  message: string
  name: string
  date: string
  img: string
}

const Comment: React.FC<CommentProps> = ({ message, name, date, img }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <img
        src={img}
        alt="User Profile"
        className="w-10 h-10 mb-2 rounded-full mr-2"
      />
      <p className="text-gray-800">{message}</p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-sm text-gray-500 ml-2">{date}</p>
      </div>
    </div>
  )
}

export default Comment
