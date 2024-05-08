import React from 'react';

interface CardProps {
  number: number;
  text: string;
}

const ProductEvaluationCard = ({ number, text }: CardProps) => {
  return (
    <div className='flex flex-col items-center bg-white rounded-lg shadow-lg h-36 w-100 p-6'>
      <div className='bg-gradient-to-b from-indigo-950 to-indigo-600 text-white rounded-full h-24 w-24 flex items-center justify-center -m-20'>
        <span className=' text-white text-4xl '>{number}</span>
      </div>
      <div className='text-center mt-24 text-gray-800'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductEvaluationCard;
