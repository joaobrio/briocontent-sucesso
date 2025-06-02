import { useState } from 'react'

export default function DashboardPage() {
  const [prompt, setPrompt] = useState('')
  const [contentType, setContentType] = useState('blog')
  const [generatedContent, setGeneratedContent] = useState('')

  const handleGenerate = async () => {
    // TODO: Integrar com n8n
    console.log('Gerando conteúdo:', { prompt, contentType })
    setGeneratedContent('Conteúdo gerado aparecerá aqui...')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          
          <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Gerar Conteúdo
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="content-type" className="block text-sm font-medium text-gray-700">
                    Tipo de Conteúdo
                  </label>
                  <select
                    id="content-type"
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  >
                    <option value="blog">Blog Post</option>
                    <option value="social">Social Media</option>
                    <option value="email">Email Marketing</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                    Descrição do Conteúdo
                  </label>
                  <textarea
                    id="prompt"
                    rows={4}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Descreva o conteúdo que deseja gerar..."
                  />
                </div>
                
                <button
                  onClick={handleGenerate}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Gerar Conteúdo
                </button>
              </div>
            </div>
            
            {generatedContent && (
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Conteúdo Gerado
                </h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-gray-700">{generatedContent}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}