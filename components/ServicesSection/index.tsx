import React from 'react';
import ProductEvaluationCard from '../ProductEvaluationCard';

const ServicesSection = () => {
  const services = [
    'Prover suporte para a avaliação de novos produtos e tecnologias',
    'Realizar processos de testes de novos produtos e tecnologias',
    'Orientar e assessorar na criação de novos produtos e tecnologias',
    'Estruturar e gerenciar processos de inovação tecnológica',
    'Buscar e concretizar uma estratégia técnica, de acordo com os objetivos',
  ];

  return (
    <div className='flex flex-col bg-indigo-50 my-20 md:px-20 px-5 pb-20 '>
      <h2 className='-mt-4 uppercase  text-3xl text-center mb-28 text-indigo-700 font-bold'>
        Serviços
      </h2>
      <div className='grid gap-24 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service, index) => (
          <ProductEvaluationCard
            key={index}
            number={index + 1}
            text={service}
          />
        ))}
      </div>
      <div className='w-full flex justify-center -mb-28'>
        <button className='text-center bg-yellow-300 hover:bg-yellow-500 mt-20 rounded-lg p-4 w-96 text-xl text-indigo-700 font-bold'>
          Fale com um especialista
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
