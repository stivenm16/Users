interface PostProps {
  title: string
  content: string
  srcImg: string
  name: string
}
const Post = ({ title, content, srcImg, name }: PostProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-96 m-5 cursor-pointer">
      <div className="flex items-center mb-4">
        <img
          src={srcImg}
          alt="User Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-bold">{name}</p>

          <p className="text-gray-600 text-sm">Posted on: XXXXXX</p>
        </div>
      </div>
      <p className="font-bold">{title}</p>
      <p className="mb-4">{content}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button className="flex items-center text-gray-500 mr-4">
            <svg
              className="w-5 h-5 fill-current mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>99</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post
