import { t } from 'i18next'

const Skills = () => {
  
  return (
    <>
    <h1 className="text-3xl font-bold text-center mb-4">{t('skills.title')}</h1>
    <p className="max-w-2xl mx-auto text-center text-gray-600 mb-10">{t('skills.description')}</p>
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
      {/* Frontend */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-blue-500 text-blue-600 dark:text-blue-300">
          {t('skills.frontend')}
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>HTML</li>
          <li>CSS / TailwindCSS</li>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
        </ul>
      </div>
  
      {/* Backend */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-green-500 text-green-600 dark:text-green-300">
          {t('skills.backend')}
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB / Mongoose</li>
          <li>SQL / PostgreSQL</li>
        </ul>
      </div>
  
      {/* Otros */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-purple-500 text-purple-600 dark:text-purple-300">
          {t('skills.other')}
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>Git / GitHub</li>
          <li>Docker (básico)</li>
          <li>Pruebas unitarias</li>
          <li>Metodologías ágiles</li>
        </ul>
      </div>
    </div>
  </>
  
  )
}

export default Skills