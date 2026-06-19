import { Link } from 'react-router-dom'

const navItems = [
  { icon: 'bi-house-door-fill', label: 'الصفحة الرئيسية', to: '/' },
  { icon: 'bi-compass', label: 'الفيديوهات المقترحة', to: '/#suggested-videos' },
  { icon: 'bi-plus-square', label: 'المرفوعة حديثًا', to: '/#recent-videos' },
  { icon: 'bi-fire', label: 'الفيديوهات الرائجة', to: '/#trending-videos' },
  { icon: 'bi-play-btn-fill', label: 'فيديوهاتي', to: '#' },
  { icon: 'bi-clock-history', label: 'سجل المشاهدة', to: '/history' },
  { icon: 'bi-collection-play', label: 'الإشتراكات', to: '#' },
  { icon: 'bi-film', label: 'الأفلام والعروض', to: '#' },
  { icon: 'bi-controller', label: 'ألعاب الفيديو', to: '#' },
  { icon: 'bi-handbag', label: 'الموضة والجمال', to: '#' },
  { icon: 'bi-mortarboard', label: 'محتوى تعليمي', to: '#' },
  { icon: 'bi-gear-fill', label: 'الإعدادات', to: '#' },
  { icon: 'bi-question-circle-fill', label: 'مساعدة', to: '#' },
]

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel — slides from right (RTL start) */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 overflow-y-auto pt-4
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ width: '280px' }}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            onClick={onClose}
            className="sidebar-link flex items-center gap-2 px-4 py-3 border-b border-gray-100 text-black text-sm"
          >
            <i className={`bi ${item.icon}`}></i>
            {item.label}
          </Link>
        ))}
        <a
          href="https://academy.hsoub.com/"
          className="block px-4 py-3 text-gray-500 text-xs"
        >
          دورة تطوير واجهات المستخدم <br /> &copy; 2026 أكاديمية حسوب
        </a>
      </div>
    </>
  )
}
