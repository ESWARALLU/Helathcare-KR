import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center py-20">
      <p className="section-label">404</p>
      <h1 className="mt-3 text-3xl font-bold text-teal-900">Page Not Found</h1>
      <p className="mt-3 max-w-md text-sm text-teal-900/70">
        The page you're looking for doesn't exist. Let's get you back to care.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  )
}
