import React from 'react'

type AddProps = {
    content: string;
}

const buttonadd: React.FC<AddProps> = ({ content }) => {
  return (
    <div>
        <button className="text-white bg-[#DA1A31] rounded-lg text-xl mr-5 px-4 py-2 font-bold">{content}</button>
    </div>
  )
}

export default buttonadd;

