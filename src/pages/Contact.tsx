import React from 'react'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  
  const { t } = useTranslation();
    return (
      <>
      <section className="text-center mb-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {t('contact.title')}
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          {t('contact.description') || 
          "¿Tienes una pregunta, propuesta o simplemente quieres saludar? Completa el formulario y te responderé lo antes posible."}
        </p>
      </section>
    
      <form 
        className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg space-y-5"
        action="mailto:tu_correo@ejemplo.com"
        method="POST"
        encType="text/plain"
      >
        <div>
          <label htmlFor="input1" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('contact.name')}
          </label>
          <input
            type="text"
            id="input1"
            name="Nombre"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
    
        <div>
          <label htmlFor="input2" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('contact.email')}
          </label>
          <input
            type="email"
            id="input2"
            name="Correo"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
    
        <div>
          <label htmlFor="textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('contact.message')}
          </label>
          <textarea
            id="textarea"
            name="Mensaje"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          ></textarea>
        </div>
    
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
          >
            {t('contact.send')}
          </button>
        </div>
      </form>
    </>
    
  )
}

export default Contact