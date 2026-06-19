import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import RecentVideoCard from '../components/RecentVideoCard'

const suggestedVideos = [
  { thumbnail: '/img/thumbnail/restful.jpg', duration: '9:23', title: 'شرح فلسفة RESTful - تعلم كيف تبني واجهات REST برمجية بطريقة فعالة', views: '6 آلاف مشاهدة', date: 'قبل 2 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/khamsat2.jpg', duration: '2:23', title: 'أفضل طريقة لربح الكثير من المال من موقع خمسات - تعلم خطوة بخطوة', views: '7 آلاف مشاهدة', date: 'قبل 1 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { thumbnail: '/img/thumbnail/mostaql.png', duration: '9:23', title: 'وظف أفضل المستقلين الموجودين في الوطن العربي - مستقل', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/mostaql.png', channelName: 'مستقل' },
  { thumbnail: '/img/thumbnail/mostaql1.jpg', duration: '9:23', title: 'تواصل مع أفضل المبدعين العرب عن طريق منصة مستقل - المنصة الأولى عربيَا للعمل الحر', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/mostaql.png', channelName: 'مستقل' },
  { thumbnail: '/img/thumbnail/khamsat1.png', duration: '9:23', title: 'تعلم كيف تقدم مهاراتك على موقع خمسات - حقق دخل إضافي من خلال بيع الخدمات', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { thumbnail: '/img/thumbnail/ruby1.jpg', duration: '9:23', title: 'شرح فلسفة RESTful - تعلم كيف تبني واجهات REST برمجية بطريقة فعالة', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
]

const recentVideos = [
  { thumbnail: '/img/thumbnail/restful.jpg', duration: '7:20', date: 'قبل يوم', title: 'شرح فلسفة RESTful - 2026', channel: 'أكاديمية حسوب', views: '4,500 مشاهدة' },
  { thumbnail: '/img/thumbnail/khamsat1.png', duration: '7:20', date: 'قبل يوم', title: 'تعلم كيف تقدم مهاراتك على موقع خمسات', channel: 'خمسات', views: '2,500 مشاهدة' },
  { thumbnail: '/img/thumbnail/php.jpg', duration: '7:20', date: 'قبل يوم', title: 'دورة تطوير تطبيقات الويب باستخدام PHP', channel: 'أكاديمية حسوب', views: '8,500 مشاهدة' },
  { thumbnail: '/img/thumbnail/mostaql1.jpg', duration: '7:20', date: 'قبل يوم', title: 'تواصل مع أفضل المبدعين العرب - مستقل', channel: 'مستقل', views: '8,200 مشاهدة' },
]

const trendingItems = [
  { id: 0, thumbnail: '/img/thumbnail/khamsat3.png', title: 'خطوات بسيطة للتسجيل بموقع خمسات', meta: '2 مليون مشاهدة . قبل 6 أشهر', desc: 'وصف قصير للفيديو الرائج — لماذا انتشر وما الذي يقدمه للمشاهدين.' },
  { id: 1, thumbnail: '/img/thumbnail/php.jpg', title: 'دورة PHP - أكاديمية حسوب', meta: '1 مليون مشاهدة . قبل 6 أشهر', desc: 'وصف قصير للفيديو الرائج — لماذا انتشر وما الذي يقدمه للمشاهدين.' },
  { id: 2, thumbnail: '/img/thumbnail/khamsat2.jpg', title: 'أفضل طريقة لربح الكثير من المال من موقع خمسات', meta: '1 مليون مشاهدة . قبل 6 أشهر', desc: 'وصف قصير للفيديو الرائج — لماذا انتشر وما الذي يقدمه للمشاهدين.' },
  { id: 3, thumbnail: '/img/thumbnail/ruby1.jpg', title: 'دورة Ruby - أكاديمية حسوب', meta: '1 مليون مشاهدة . قبل 6 أشهر', desc: 'وصف قصير للفيديو الرائج — لماذا انتشر وما الذي يقدمه للمشاهدين.' },
]

export default function HomePage() {
  const [activeTrend, setActiveTrend] = useState(0)
  const activeTrendItem = trendingItems[activeTrend]

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20">
      {/* Suggested Videos */}
      <div id="suggested-videos" className="scroll-anchor">
        <div className="mt-2 mb-2"></div>
        <h4 className="my-4 font-bold text-lg">الفيديوهات المقترحة</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {suggestedVideos.map((v, i) => (
          <VideoCard key={i} {...v} />
        ))}
      </div>

      {/* Recent Videos */}
      <div id="recent-videos" className="scroll-anchor">
        <h4 className="my-4 font-bold text-lg">المرفوعة حديثًا</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recentVideos.map((v, i) => (
          <RecentVideoCard key={i} {...v} />
        ))}
      </div>

      {/* Trending Videos */}
      <div id="trending-videos" className="scroll-anchor">
        <h4 className="mb-4 mt-8 font-bold text-lg">الفيديوهات الرائجة</h4>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* List — shown second on mobile, first on lg */}
        <div className="lg:w-4/12 order-2 lg:order-1">
          <div className="flex flex-col border border-gray-200 rounded overflow-hidden">
            {trendingItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveTrend(i)}
                className={`flex items-center gap-2 p-3 border-b border-gray-200 text-right w-full
                  ${activeTrend === i ? 'list-item-active' : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="flex-shrink-0" style={{ width: '144px' }}>
                  <div className="relative" style={{ paddingTop: '56.25%' }}>
                    <img
                      src={item.thumbnail}
                      className="absolute inset-0 w-full h-full object-cover rounded"
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="me-3 text-right flex-1">
                  <div className="font-bold text-sm">{item.title}</div>
                  <small className="text-xs opacity-75">{item.meta}</small>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview — shown first on mobile, second on lg */}
        <div className="lg:w-8/12 order-1 lg:order-2">
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <img
              src={activeTrendItem.thumbnail}
              className="absolute inset-0 w-full h-full object-cover rounded"
              alt={activeTrendItem.title}
            />
            <Link to="/watch" className="absolute inset-0"></Link>
          </div>
          <h5 className="mt-3 font-bold">{activeTrendItem.title}</h5>
          <p className="text-sm text-gray-600">{activeTrendItem.desc}</p>
        </div>
      </div>
    </div>
  )
}
