import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">
          MiApp
        </Link>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
            }
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  )
}