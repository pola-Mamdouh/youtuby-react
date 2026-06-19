import { Link } from 'react-router-dom'

export default function RecentVideoCard({ thumbnail, duration, date, title, channel, views }) {
  return (
    <div className="mb-4">
      <figure className="relative m-0" style={{ paddingTop: '56.25%' }}>
        <img
          src={thumbnail}
          className="absolute inset-0 w-full h-full object-cover rounded"
          alt={title}
        />
        <Link to="/watch" className="absolute inset-0"></Link>
        {/* Overlay gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 p-2 rounded"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.55) 85%)' }}
        >
          <small className="absolute bottom-2 right-2 text-white bg-black/70 px-1 rounded text-xs">
            {date}
          </small>
          <time className="absolute bottom-2 left-2 text-white bg-black/70 px-1 text-xs">
            {duration}
          </time>
        </div>
      </figure>
      <figcaption className="mt-2">
        <Link to="/watch" className="font-bold text-sm text-black block hover:text-primary">
          {title}
        </Link>
        <small className="text-gray-500 text-xs">
          قناة: <Link to="/channel" className="hover:text-primary">{channel}</Link> . {views}
        </small>
      </figcaption>
    </div>
  )
}
