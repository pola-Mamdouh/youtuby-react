import { useState } from 'react'
import { Link } from 'react-router-dom'

const suggestedVideos = [
  { thumbnail: '/img/thumbnail/ruby.jpg', title: 'دورة تطوير تطبيقات الويب باستخدام لغة Ruby - أكاديمية حسوب', views: '1.6 مليون مشاهدة', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/mostaql2.png', title: 'أفضل النصائح لاختيار أفضل المستقلين والحفاظ على معدل توظيف مرتفع', views: '1.6 مليون مشاهدة', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/khamsat3.png', title: 'خطوات بسيطة للتسجيل بموقع خمسات والبدء بربح المال', views: '1.6 مليون مشاهدة', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/khamsat1.png', title: 'تعلم كيف تقدم مهاراتك على موقع خمسات', views: '1.6 مليون مشاهدة', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/mostaql.png', title: 'وظف أفضل المستقلين الموجودين في الوطن العربي - مستقل', views: '1.6 مليون مشاهدة', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
  { thumbnail: '/img/thumbnail/php.jpg', title: 'دورة تطوير تطبيقات الويب باستخدام لغة PHP - أكاديمية حسوب', views: '1.6 مليون مشاهدة', channelImg: '/img/ch-logo.png', channelName: 'أكاديمية حسوب' },
]

function Comment({ name, time, text, rating, hasReply }) {
  const [showReply, setShowReply] = useState(false)

  return (
    <div className="bg-white rounded border border-gray-200 mt-8 mb-3" style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <div className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-2/12 text-center flex-shrink-0">
            <img src="/img/avatar.jpg" alt="" className="rounded mx-auto" style={{ maxWidth: '6rem', width: '100%' }} />
            <p className="text-xs text-gray-500 mt-1">{time}</p>
          </div>
          <div className="sm:w-10/12">
            <div className="float-left">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  <i className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'} text-yellow-500`}></i>
                </span>
              ))}
            </div>
            <p className="mb-1">
              <Link to="#"><strong>{name}</strong></Link>
            </p>
            <p className="text-sm">{text}</p>
            <div className="mt-4 flex gap-2">
              {hasReply && (
                <button className="btn-comment text-sm" onClick={() => setShowReply(!showReply)}>
                  <i className="bi bi-reply"></i> الردود
                </button>
              )}
              <button className="btn-comment text-sm">
                <i className="bi bi-heart"></i> أعجبني
              </button>
            </div>
          </div>
        </div>

        {/* Reply */}
        {hasReply && showReply && (
          <div className="bg-white rounded border border-gray-200 mt-3 me-0 ms-10 p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-2/12 text-center flex-shrink-0">
                <img src="/img/avatar.jpg" alt="" className="rounded mx-auto" style={{ maxWidth: '6rem', width: '100%' }} />
                <p className="text-xs text-gray-500 mt-1">منذ 40 دقيقة</p>
              </div>
              <div className="sm:w-10/12">
                <p className="mb-1">
                  <Link to="#"><strong>أحمد أحمد</strong></Link>
                </p>
                <p className="text-sm">مرحبًا، شكرًا لكم على هذه الدورة الرائعة</p>
                <div className="mt-4">
                  <button className="btn-comment text-sm">
                    <i className="bi bi-heart"></i> أعجبني
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function WatchPage() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-20">
      <div className="mt-4 mb-4"></div>

      {/* Video + Info */}
      <div className="bg-white rounded border-0">
        <div className="flex flex-col lg:flex-row gap-0">
          <div className="lg:w-7/12">
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
          <div className="lg:w-5/12 px-3 py-2 lg:p-0 lg:pr-4 lg:pt-2">
            <small className="text-gray-500">
              <i className="bi bi-play-btn"></i> <span>200 ألف مشاهدة</span>
              <i className="bi bi-clock mr-2"></i> <span>قبل 4 أشهر</span>
              <Link to="/channel" className="flex items-center gap-2 mt-1">
                <img src="/img/ch-logo.png" alt="" className="rounded-full w-8 h-8" />
                <span className="text-sm">أكاديمية حسوب</span>
              </Link>
            </small>
            <h4 className="font-bold text-base mt-2">دورة تطوير واجهات المستخدم - أكاديمية حسوب</h4>
            <p className="text-sm">
              تم إعداد هذه الدورة على يد نخبة من أفضل المبرمجين العرب بتسلسل بسيط وواضح، بإنهائك لها ستصبح مطوّر
              {!showMore && <span id="dots">...</span>}
              {showMore && (
                <span>
                  {' '}واجهات مستخدم دون الحاجة لامتلاك معرفة سابقة بالبرمجة، خلال هذه ستتعلم تطوير واجهات المستخدم خطوة بخطوة اعتمادًا على التجربة العملية والمادة العلمية التي يقدمها مدربون محترفون.
                </span>
              )}
            </p>
            <button
              className="border border-primary text-primary bg-transparent rounded px-3 py-1 text-sm mb-4"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'عرض عناصر أقل' : 'عرض المزيد'}
            </button>
            <div className="flex gap-2 text-2xl">
              <i className="bi bi-heart cursor-pointer" title="أحببته"></i>
              <i className="bi bi-clock cursor-pointer" title="المشاهدة لاحقًا"></i>
              <i className="bi bi-share cursor-pointer" title="مشاركة"></i>
              <i className="bi bi-bookmark cursor-pointer" title="إضافة إلى قائمة تشغيل"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Comments + Suggestions */}
      <div className="flex flex-col xl:flex-row gap-4 mt-4 px-0 sm:px-2">
        {/* Comments */}
        <div className="xl:w-7/12 order-2 xl:order-1">
          {/* Comment header */}
          <div className="mb-3 flex items-center gap-2">
            <span>التعليقات 4</span>
            <span className="relative">
              <button className="border-0 bg-transparent text-sm dropdown-toggle cursor-pointer">
                الترتيب حسب ▾
              </button>
            </span>
          </div>

          {/* New comment box */}
          <div className="mb-4">
            <textarea
              className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-primary"
              rows="4"
              placeholder="إضافة تعليق عام"
            ></textarea>
            <button className="btn-comment text-sm mt-2 px-4 py-2">تعليق</button>
          </div>

          {/* Comments list */}
          <Comment name="أحمد أحمد" time="منذ 40 دقيقة" text="مرحبًا، شكرًا لكم على هذه الدورة الرائعة" rating={3} hasReply />
          <Comment name="محمد أحمد" time="منذ 40 دقيقة" text="جميل جدًا من أفضل الدورات التي شاهدتها. شكرًا لجهودكم" rating={3} hasReply />
          <Comment name="هادي" time="منذ 40 دقيقة" text="جميل جدًا دورة رائعة" rating={3} hasReply />
        </div>

        {/* Suggested sidebar */}
        <div className="xl:w-5/12 order-1 xl:order-2">
          <p className="font-medium mb-3">الاقتراحات</p>
          {suggestedVideos.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded border border-gray-200 p-2 mb-4"
              style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="sm:w-5/12 flex-shrink-0">
                  <Link to="/watch" className="block">
                    <img className="w-full h-full object-cover" src={v.thumbnail} alt={v.title} />
                  </Link>
                </div>
                <div className="sm:w-7/12">
                  <Link to="/watch">
                    <b><p className="text-sm font-bold mb-1">{v.title}</p></b>
                    <small className="text-gray-500 text-xs">
                      <i className="bi bi-film"></i> <span>{v.views}</span>
                    </small>
                    <Link to="/channel" className="flex items-center gap-1 mt-2">
                      <img src={v.channelImg} alt="" width="30" className="rounded-full" />
                      <span className="text-sm">{v.channelName}</span>
                    </Link>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
