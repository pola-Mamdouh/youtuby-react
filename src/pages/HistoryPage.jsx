import { useState } from 'react'
import HorizontalVideoCard from '../components/HorizontalVideoCard'

const initialVideos = [
  { id: 1, thumbnail: '/img/thumbnail/devtools.jpg', duration: '7:33', title: 'كيف تستخدم أدوات المطوِّر DevTools في Chrome', description: 'نتعرف في هذا الدرس على أدوات المطور DevTools التي يتيحها متصفح google chrome والتي تمكنك من تتبع مشاكل التنسيق CSS بفعالية، واكتشاف أخطاء Javascript بسهولة.', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { id: 2, thumbnail: '/img/thumbnail/khamsat3.png', duration: '7:33', title: 'خطوات بسيطة للتسجيل بموقع خمسات والبدء بربح المال', description: 'ستتعرف من خلال هذا الدرس على كيفية إنشاء حساب في موقع خمسات، وأيضًا ستتعرف على كيفية استعمال موقع خمسات وكيف تعرض خدماتك عليه لكي تربح المال', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { id: 3, thumbnail: '/img/thumbnail/frontend.jpg', duration: '7:33', title: 'دورة تطوير واجهات المستخدم - أكاديمية حسوب', description: 'تم إعداد هذه الدورة على يد نخبة من أفضل المبرمجين العرب بتسلسل بسيط وواضح، بإنهائك لها ستصبح مطوّر واجهات مستخدم دون الحاجة لامتلاك معرفة سابقة بالبرمجة.', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { id: 4, thumbnail: '/img/thumbnail/khamsat1.png', duration: '7:33', title: 'تعلم كيف تقدم مهاراتك على موقع خمسات', description: 'ستتعلم في هذا الدرس كيفية ربح مبالغ كبيرة من خلال تقديم مهاراتك على موقع خمسات، عند مشاهدتك لهذا المقطع واتباعك الخطوات بشكل جيد سيصل ربحك إلى 100$ يوميًا', views: '1.2 مليون مشاهدة', date: 'قبل 4 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { id: 5, thumbnail: '/img/thumbnail/mostaql.png', duration: '2:40', title: 'وظف أفضل المستقلين الموجودين في الوطن العربي - مستقل', description: 'تعلم كيفية التواصل مع المستقلين الموجودين في مختلف البلدان العربية، وكيفية اختيار أفضل مستقل وتوظيفه لإنجاز أعمالك', views: '1 مليون مشاهدة', date: 'قبل 9 أشهر', channelImg: '/img/mostaql.png', channelName: 'مستقل' },
]

const recordTypes = ['سجل المشاهدة', 'سجل البحث', 'التعليقات', 'المنتدى']
const dateFilters = ['منذ 24 ساعة', 'منذ 3 أيام', 'منذ أسبوع', 'منذ شهر']

export default function HistoryPage() {
  const [videos, setVideos] = useState(initialVideos)
  const [activeType, setActiveType] = useState(0)
  const [activeDate, setActiveDate] = useState(0)

  function removeVideo(id) {
    setVideos(prev => prev.filter(v => v.id !== id))
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20">
      <div className="mt-4 mb-4"></div>

      <div className="flex flex-col lg:flex-row gap-0">
        {/* Right sidebar filter */}
        <div className="lg:w-3/12 bg-white" style={{ minHeight: '560px' }}>
          <input
            type="search"
            placeholder="ابحث في النتائج"
            className="w-full border-0 border-b border-gray-200 px-4 py-3 text-sm focus:outline-none"
          />
          <hr />

          <div className="px-4 pt-3">
            <label className="block mb-2 text-sm font-medium">نوع السجل:</label>
            <div className="flex flex-col">
              {recordTypes.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveType(i)}
                  className={`text-right px-3 py-2 text-sm border-b border-gray-100 w-full bg-transparent
                    ${activeType === i ? 'list-item-active' : 'hover:bg-gray-50 text-black'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <label className="block mb-2 mt-4 text-sm font-medium">التاريخ:</label>
            <div className="flex flex-col">
              {dateFilters.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDate(i)}
                  className={`text-right px-3 py-2 text-sm border-b border-gray-100 w-full bg-transparent
                    ${activeDate === i ? 'list-item-active' : 'hover:bg-gray-50 text-black'}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:w-9/12 pt-6 lg:pt-0 lg:pr-4">
          {videos.map(v => (
            <HorizontalVideoCard
              key={v.id}
              {...v}
              onRemove={() => removeVideo(v.id)}
            />
          ))}
          {videos.length === 0 && (
            <p className="text-gray-500 text-center mt-8">لا توجد فيديوهات في السجل</p>
          )}
        </div>
      </div>
    </div>
  )
}
