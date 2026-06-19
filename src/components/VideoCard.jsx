import { Link } from 'react-router-dom'

export default function VideoCard({ thumbnail, duration, title, views, date, channelImg, channelName }) {
  return (
    <div className="card-hover bg-white rounded border border-gray-200 p-1 mb-4">
      <Link to="/watch" className="relative overflow-hidden block">
        <img
          src={thumbnail}
          className="card-img-scale w-full object-cover"
          alt={title}
        />
        <time className="absolute bottom-2 left-2 text-white bg-black/70 px-1 text-xs">
          {duration}
        </time>
        <i
          className="watch-later bi bi-clock absolute top-2 left-2 text-white bg-black/70 py-0.5 px-2 rounded text-lg cursor-pointer"
          title="المشاهدة لاحقًا"
        ></i>
      </Link>
      <div className="p-2">
        <p className="font-medium text-sm leading-snug mb-1">{title}</p>
      </div>
      <div className="px-2 pb-1 border-t border-gray-100 pt-1">
        <small className="text-gray-500">
          <span className="block">{views}</span>
          <span className="block">{date}</span>
        </small>
      </div>
      <Link to="/channel" className="flex items-center gap-2 px-3 py-2">
        <img src={channelImg} alt="" width="30" className="rounded-full" />
        <span className="text-sm">{channelName}</span>
      </Link>
    </div>
  )
}
