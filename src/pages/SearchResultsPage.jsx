import { useState } from 'react'
import HorizontalVideoCard from '../components/HorizontalVideoCard'

const results = [
  { thumbnail: '/img/thumbnail/devtools.jpg', duration: '7:33', title: 'كيف تستخدم أدوات المطوِّر DevTools في Chrome', description: 'نتعرف في هذا الدرس على أدوات المطور DevTools التي يتيحها متصفح google chrome والتي تمكنك من تتبع مشاكل التنسيق CSS بفعالية، واكتشاف أخطاء Javascript بسهولة، بالإضافة إلى أنها تقدم لك إضاءات ومعلومات حول أداء الموقع.', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/khamsat3.png', duration: '7:33', title: 'خطوات بسيطة للتسجيل بموقع خمسات والبدء بربح المال', description: 'ستتعرف من خلال هذا الدرس على كيفية إنشاء حساب في موقع خمسات، وأيضًا ستتعرف على كيفية استعمال موقع خمسات وكيف تعرض خدماتك عليه لكي تربح المال', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { thumbnail: '/img/thumbnail/frontend.jpg', duration: '7:33', title: 'دورة تطوير واجهات المستخدم - أكاديمية حسوب', description: 'تم إعداد هذه الدورة على يد نخبة من أفضل المبرمجين العرب بتسلسل بسيط وواضح، بإنهائك لها ستصبح مطوّر واجهات مستخدم دون الحاجة لامتلاك معرفة سابقة بالبرمجة.', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/khamsat1.png', duration: '7:33', title: 'تعلم كيف تقدم مهاراتك على موقع خمسات', description: 'ستتعلم في هذا الدرس كيفية ربح مبالغ كبيرة من خلال تقديم مهاراتك على موقع خمسات، عند مشاهدتك لهذا المقطع واتباعك الخطوات بشكل جيد سيصل ربحك إلى 100$ يوميًا', views: '1.2 مليون مشاهدة', date: 'قبل 4 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { thumbnail: '/img/thumbnail/mostaql.png', duration: '2:40', title: 'وظف أفضل المستقلين الموجودين في الوطن العربي - مستقل', description: 'تعلم كيفية التواصل مع المستقلين الموجودين في مختلف البلدان العربية، وكيفية اختيار أفضل مستقل وتوظيفه لإنجاز أعمالك', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/mostaql.png', channelName: 'مستقل' },
]

const filterGroups = [
  {
    label: 'تاريخ التحميل',
    name: 'g1',
    options: ['آخر ساعة', 'اليوم', 'هذا الأسبوع', 'هذا الشهر', 'هذا العام'],
  },
  {
    label: 'النوع',
    name: 'g2',
    options: ['فيديو', 'قناة', 'قائمة تشغيل', 'فيلم', 'عرض'],
  },
  {
    label: 'التصنيف بحسب',
    name: 'g3',
    options: ['مدى الصلة', 'تاريخ التحميل', 'عدد المشاهدات', 'التقييم'],
  },
  {
    label: 'المدة',
    name: 'g4',
    options: ['قصير (أقل من أربع دقائق)', 'طويل (أكثير من أربع دقائق)'],
  },
]

export default function SearchResultsPage() {
  const [showFilters, setShowFilters] = useState(true)
  const [selected, setSelected] = useState({ g1: null, g2: null, g3: null, g4: null })

  function handleCheck(groupName, option) {
    setSelected(prev => ({
      ...prev,
      [groupName]: prev[groupName] === option ? null : option,
    }))
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20">
      <div className="mt-4 mb-4"></div>

      {/* Results count + filter toggle */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm">حوالي 800 نتيجة</span>
        <button
          className="flex items-center gap-1 text-sm bg-transparent border-0 cursor-pointer text-gray-700"
          onClick={() => setShowFilters(!showFilters)}
        >
          <i className="bi bi-funnel"></i> تصفية
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-4">
          {filterGroups.map(group => (
            <div key={group.name}>
              <div className="text-center font-medium text-sm mb-2">{group.label}</div>
              <hr className="mb-3" />
              {group.options.map(option => (
                <label key={option} className="flex items-center gap-2 mb-3 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    name={group.name}
                    checked={selected[group.name] === option}
                    onChange={() => handleCheck(group.name, option)}
                    className="accent-primary"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      <div>
        {results.map((r, i) => (
          <HorizontalVideoCard key={i} {...r} />
        ))}
      </div>
    </div>
  )
}
