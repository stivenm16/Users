import React from 'react'

interface CommentProps {
  message: string
  name: string
  date: string
  img: string
}

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate)
  return date.toLocaleString() // Adjust the format as needed
}

const Comment: React.FC<CommentProps> = ({ message, name, date, img }) => {
  return (
    <div className="bg-indigo-100 rounded-lg p-4  shadow-md">
      <div className="flex gap-2">
        <img
          src={img}
          alt="User Profile"
          className="w-10 h-10 mb-2 rounded-full mr-2"
        />
        <p className="text-sm text-indigo-950">{name}</p>
      </div>
      <p className="text-gray-800">{message}</p>
      <div className="flex items-center mt-2">
        <p className="text-sm text-gray-500">Posted on:</p>
        <p className="text-sm text-gray-500 ml-2">{formatDate(date)}</p>
      </div>
    </div>
  )
}

export default Comment
