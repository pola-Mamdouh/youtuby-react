import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

const channelVideos = [
  { thumbnail: '/img/thumbnail/restful.jpg', duration: '9:23', title: 'شرح فلسفة RESTful - تعلم كيف تبني واجهات REST برمجية بطريقة فعالة', views: '6 آلاف مشاهدة', date: 'قبل 2 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/khamsat2.jpg', duration: '2:23', title: 'أفضل طريقة لربح الكثير من المال من موقع خمسات - تعلم خطوة بخطوة', views: '7 آلاف مشاهدة', date: 'قبل 1 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { thumbnail: '/img/thumbnail/mostaql.png', duration: '9:23', title: 'وظف أفضل المستقلين الموجودين في الوطن العربي - مستقل', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/mostaql.png', channelName: 'مستقل' },
  { thumbnail: '/img/thumbnail/mostaql1.jpg', duration: '9:23', title: 'تواصل مع أفضل المبدعين العرب عن طريق منصة مستقل', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/mostaql.png', channelName: 'مستقل' },
  { thumbnail: '/img/thumbnail/khamsat1.png', duration: '9:23', title: 'تعلم كيف تقدم مهاراتك على موقع خمسات', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/khamsat.jpg', channelName: 'خمسات' },
  { thumbnail: '/img/thumbnail/ruby1.jpg', duration: '9:23', title: 'شرح فلسفة RESTful - تعلم كيف تبني واجهات REST برمجية بطريقة فعالة', views: '3 آلاف مشاهدة', date: 'قبل 5 أشهر', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
]

const channelTabs = ['الصفحة الرئيسية', 'فيديوهاتي', 'قوائم التشغيل', 'القنوات', 'مناقشة', 'حول']

export default function ChannelPage() {
  const [showMore, setShowMore] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20">
      <div className="mt-4 mb-4"></div>

      {/* Banner */}
      <div className="mb-0">
        <img src="/img/h-channel.jpg" alt="" className="w-full object-cover rounded" />
      </div>

      {/* Channel Tab Nav */}
      <nav className="bg-gray-50 border-b border-gray-200 px-0 mb-4">
        <ul className="flex flex-wrap justify-center gap-0">
          {channelTabs.map((tab, i) => (
            <li key={i} className="me-2">
              <button
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-sm font-medium border-0 bg-transparent cursor-pointer
                  ${activeTab === i ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Featured Video + Description */}
      <div className="bg-white rounded border-0 mb-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-6/12">
            <video
              controls
              poster="/img/poster.png"
              muted
              loop
              className="w-full align-middle"
            >
              <source src="/video/hsoub.webm" type="video/webm" />
              <source src="/video/hsoub.mp4" type="video/mp4" />
              <track kind="captions" src="/video/caption.vtt" srcLang="ar" label="عربي" />
              لا يدعم متصفك العنصر
            </video>
          </div>
          <div className="lg:w-6/12 px-3 py-2 lg:p-0 lg:pr-4 lg:pt-2">
            <h4 className="mt-3 font-bold text-base">دورة تطوير واجهات المستخدم - أكاديمية حسوب</h4>
            <p className="text-sm">
              تم إعداد هذه الدورة على يد نخبة من أفضل المبرمجين العرب بتسلسل بسيط وواضح، بإنهائك لها ستصبح مطوّر
              {!showMore && <span>...</span>}
              {showMore && (
                <span>
                  {' '}واجهات مستخدم دون الحاجة لامتلاك معرفة سابقة بالبرمجة، خلال هذه ستتعلم تطوير واجهات المستخدم خطوة بخطوة اعتمادًا على التجربة العملية والمادة العلمية التي يقدمها مدربون محترفون.
                </span>
              )}
            </p>
            <small className="text-gray-500">
              <i className="bi bi-play-btn"></i> <span>200 ألف مشاهدة</span>
              <i className="bi bi-clock mr-2"></i> <span>قبل 4 أشهر</span>
            </small>
          </div>
        </div>
      </div>

      {/* Latest Videos */}
      <p className="content-title my-4">آخر الفيديوهات المرفوعة</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {channelVideos.map((v, i) => (
          <VideoCard key={i} {...v} />
        ))}
      </div>
    </div>
  )
}
