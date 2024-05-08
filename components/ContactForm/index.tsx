import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Formulário enviado:', data);
  };

  return (
    <div className='text-blue-700 bg-white px-10 py-8 rounded-lg max-w-md'>
      <h3 className='text-xl font-bold mb-10'>
        Informe seus dados para falar com um especialista:
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <div className='flex flex-col mb-4'>
          <div className='flex items-center'>
            <label htmlFor='name' className='w-20 font-medium mr-2'>
              Nome:
            </label>
            <input
              type='text'
              id='name'
              className={`flex-1 border rounded-md px-3 py-2 bg-blue-50 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('name', { required: 'O nome é obrigatório' })}
            />
          </div>
          {errors.name && (
            <span className='text-red-500 mt-1'>{errors.name.message}</span>
          )}
        </div>

        <div className='flex flex-col mb-4'>
          <div className='flex items-center'>
            <label htmlFor='email' className='w-20 font-medium mr-2'>
              E-mail:
            </label>
            <input
              type='email'
              id='email'
              className={`flex-1 border rounded-md px-3 py-2 bg-blue-50 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('email', {
                required: 'O e-mail é obrigatório',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Por favor, insira um e-mail válido',
                },
              })}
            />
          </div>
          {errors.email && (
            <span className='text-red-500 mt-1'>{errors.email.message}</span>
          )}
        </div>

        <div className='flex flex-col mb-4'>
          <div className='flex items-center'>
            <label htmlFor='company' className='w-20 font-medium mr-2'>
              Empresa:
            </label>
            <input
              type='text'
              id='company'
              className={`flex-1 border rounded-md px-3 py-2 bg-blue-50 ${
                errors.company ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('company', { required: 'A empresa é obrigatória' })}
            />
          </div>
          {errors.company && (
            <span className='text-red-500 mt-1'>{errors.company.message}</span>
          )}
        </div>

        <div className='flex flex-col mb-4'>
          <div className='flex items-center'>
            <label htmlFor='phone' className='w-20 font-medium mr-2'>
              Telefone:
            </label>
            <InputMask
              mask='(99) 99999-9999'
              maskPlaceholder={null}
              id='phone'
              className={`flex-1 border rounded-md px-3 py-2 bg-blue-50 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('phone', {
                required: 'O telefone é obrigatório',
                pattern: {
                  value: /^\(\d{2}\)\s?\d{5}-\d{4}$/,
                  message:
                    'Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX',
                },
              })}
            />
          </div>
          {errors.phone && (
            <span className='text-red-500 mt-1'>{errors.phone.message}</span>
          )}
        </div>

        <button
          type='submit'
          className='text-sm md:text-base uppercase mt-8 col-span-2 bg-blue-300 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md disabled:bg-indigo-200'
        >
          FALE COM UM ESPECIALISTA
        </button>
      </form>
    </div>
  );
};
