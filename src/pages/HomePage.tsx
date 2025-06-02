import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary-900 mb-6">
          Brio Content
        </h1>
        <p className="text-xl text-primary-700 mb-8">
          Geração de conteúdo inteligente com IA
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Entrar
          </Link>
          <Link
            to="/dashboard"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border border-primary-200"
          >
            Demo Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}