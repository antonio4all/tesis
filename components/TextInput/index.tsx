import React from 'react';

interface TextInputProps {
  label: string;
  id: string;
  value: string;
  error: string;
}

const TextInput = ({ label, id, value, error, ...props }: TextInputProps) => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='flex items-center'>
        <label htmlFor={id} className='w-20 font-medium mr-2'>
          {label}:
        </label>
        <input
          type='text'
          id={id}
          value={value}
          className={`flex-1 border rounded-md px-3 py-2 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          {...props}
        />
      </div>
      {error && <span className='text-red-500 mt-1'>{error}</span>}
    </div>
  );
};

export default TextInput;
