import React from 'react'
import { FaFilter } from 'react-icons/fa';

type FilterProps = {
    content: string;
}

const buttonfilter: React.FC<FilterProps> = ({ content }) => {
  return (
    <div>
        <button className="text-red-600 flex justify-between border-2 border-red-700 text-xl font-bold rounded-lg px-4 py-2 hover:underline"><FaFilter size={20} className='mt-1 mx-2'/> {content}</button>
    </div>
  )
}

export default buttonfilter;

