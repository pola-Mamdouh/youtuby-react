import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar({ onOpenSidebar }) {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  function handleSearch(e) {
    e.preventDefault()
    navigate('/search')
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-30 bg-gray-100 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center h-14 gap-2">
        {/* Sidebar toggle */}
        <button
          onClick={onOpenSidebar}
          className="border border-primary text-primary bg-transparent rounded px-3 py-1 text-lg leading-none flex-shrink-0"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 font-bold text-lg text-black flex-shrink-0">
          يوتيوبي
          <span className="text-white bg-primary px-1 rounded" style={{ borderRadius: '15%' }}>
            <i className="bi bi-play-btn"></i>
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="mr-auto lg:hidden border border-gray-400 rounded px-2 py-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-600 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </button>

        {/* Collapsible section */}
        <div className={`${menuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-start lg:items-center gap-2 absolute lg:static top-14 right-0 left-0 bg-gray-100 lg:bg-transparent p-4 lg:p-0 lg:flex-1 border-t lg:border-0 border-gray-200`}>
          {/* Nav links (home page only) */}
          {isHome && (
            <ul className="flex flex-col lg:flex-row gap-1 mx-auto">
              <li>
                <a href="#suggested-videos" className="nav-link-hover px-3 py-1 rounded text-sm">
                  الفيديوهات المقترحة
                </a>
              </li>
              <li>
                <a href="#recent-videos" className="nav-link-hover px-3 py-1 rounded text-sm">
                  المرفوعة حديثًا
                </a>
              </li>
              <li>
                <a href="#trending-videos" className="nav-link-hover px-3 py-1 rounded text-sm">
                  الفيديوهات الرائجة
                </a>
              </li>
            </ul>
          )}

          {/* Search */}
          <form onSubmit={handleSearch} className="flex gap-2 lg:mr-auto">
            <input
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-primary"
              type="search"
              placeholder="نص البحث..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="border border-green-600 text-green-600 bg-transparent rounded px-3 py-1 text-sm"
            >
              بحث
            </button>
          </form>

          {/* Login */}
          <Link to="/login" className="text-primary px-2 py-1 text-sm font-medium">
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </nav>
  )
}
