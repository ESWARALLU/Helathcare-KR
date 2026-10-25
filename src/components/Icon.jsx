const paths = {
  leaf: 'M20 4c-7 0-13 4-15 10-1 3 0 6 2 8s5 3 8 2c6-2 10-8 10-15 0-2 0-4-1-5zM5 19c3-6 7-10 13-12',
  heart: 'M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9z',
  activity: 'M3 12h4l3 8 4-16 3 8h4',
  shield: 'M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z',
  clipboard: 'M9 4h6v2H9zM6 6h12v15H6zM9 11h6M9 15h6',
  hand: 'M8 13V6a2 2 0 1 1 4 0v6m0-5a2 2 0 1 1 4 0v5m0-4a2 2 0 1 1 4 0v6a6 6 0 0 1-6 6H9a5 5 0 0 1-4-2l-2.5-3.5a1.5 1.5 0 0 1 2.2-2L7 15',
  home: 'M4 11l8-7 8 7M6 10v9h12v-9',
  users: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 2.5-5 5-5s5 2 5 5M17 11a3 3 0 1 0 0-6M15 15c2 0 5 1.5 5 5',
  stethoscope: 'M6 3v6a4 4 0 0 0 8 0V3M10 13v2a5 5 0 0 0 10 0v-2m-5 7v2',
  phone: 'M5 4h3l2 5-2 1a9 9 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  chat: 'M21 11.5a8.4 8.4 0 0 1-1.1 4.2L21 20l-4.4-1A8.5 8.5 0 1 1 21 11.5z',
  map: 'M9 18l-5 2V6l5-2 6 2 5-2v14l-5 2-6-2z M9 4v14 M15 6v14',
  check: 'M4 12l5 5L20 6',
  utensils: 'M6 3v8a2 2 0 0 0 4 0V3M8 11v10M18 3c-2 1-3 3-3 6v12M15 9h6',
  bed: 'M3 18v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 18h18M3 18v2M21 18v2M11 13h8a2 2 0 0 1 2 2v3',
  video: 'M3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM15 10l6-3v10l-6-3',
}

export default function Icon({ name, className = 'h-6 w-6' }) {
  const d = paths[name] || paths.check
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={d} />
    </svg>
  )
}
