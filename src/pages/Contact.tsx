import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  
  const { t } = useTranslation();
    return (
    <>
    <h1 className='text-center'>
        {t('contact.title')}
    </h1>
    <p>
    {t('contact.description')}
    </p>
    <form className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
  <div className="mb-4">
    <label htmlFor="input1" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Campo de texto 1</label>
    <input type="text" id="input1" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
  </div>

  <div className="mb-4">
    <label htmlFor="input2" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Campo de texto 2</label>
    <input type="text" id="input2" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
  </div>

  <div className="mb-4">
    <label htmlFor="textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Comentario</label>
    <textarea id="textarea" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
  </div>

  <div className="flex justify-center">
    <button type="submit" className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
      Enviar
    </button>
  </div>
</form>

    </>
  )
}

export default Contact