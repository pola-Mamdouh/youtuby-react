import { Link } from 'react-router-dom'

export default function HorizontalVideoCard({
  thumbnail, duration, title, description, views, date, channelImg, channelName, onRemove
}) {
  return (
    <div className="card-hover bg-white rounded border border-gray-200 mb-3 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail area */}
        <div className="md:w-5/12 xl:w-4/12 relative overflow-hidden flex-shrink-0">
          <Link to="/watch" className="block relative">
            <img
              src={thumbnail}
              alt={title}
              className="card-top-image w-full h-full object-cover"
              style={{ minHeight: '140px', maxHeight: '200px' }}
            />
            <time className="absolute bottom-2 left-2 text-white bg-black/70 px-1 text-xs">
              {duration}
            </time>
            <i className="play-btn bi bi-play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl"></i>
            <i className="watch-later bi bi-clock absolute top-2 left-2 text-white bg-black/70 py-0.5 px-2 rounded text-lg cursor-pointer"></i>
          </Link>
          {onRemove && (
            <i
              className="remove-btn bi bi-x-lg absolute top-2 right-3 text-gray-700 cursor-pointer py-0.5 px-2 rounded z-10"
              style={{ position: 'absolute', top: '10px', right: '13px' }}
              onClick={onRemove}
            ></i>
          )}
        </div>
        {/* Info area */}
        <div className="md:w-7/12 xl:w-8/12 p-4">
          <Link to="/watch">
            <h4 className="font-bold text-base mb-2">{title}</h4>
          </Link>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <small className="text-gray-500 text-xs">
            <i className="bi bi-play-btn"></i> <span>{views}</span>
            <i className="bi bi-clock ms-1 mr-1"></i> <span>{date}</span>
          </small>
          <Link to="/channel" className="flex items-center gap-1 mt-2 text-sm text-black">
            <img src={channelImg} alt="" width="30" className="rounded-full inline-block" />
            <span>{channelName}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
