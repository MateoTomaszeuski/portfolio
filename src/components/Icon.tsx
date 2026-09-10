const paths = {
  'arrow-up-right': 'M7 17 17 7M7 7h10v10',
  'arrow-down': 'M12 4v16m-6-6 6 6 6-6',
  'arrow-up': 'M12 20V4m-6 6 6-6 6 6',
  'arrow-right': 'M4 12h16m-6-6 6 6-6 6',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  asterisk: 'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4 18.4 5.6',
  command: 'M9 9V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V9',
  code: 'M8 4H6v6l-3 2 3 2v6h2M16 4h2v6l3 2-3 2v6h-2',
  hash: 'M10 3 6 21M18 3l-4 18M4 8h17M3 16h17',
  database: 'M20 6c0 2.2-16 2.2-16 0s16-2.2 16 0ZM4 6v12c0 2.7 16 2.7 16 0V6M4 12c0 2.7 16 2.7 16 0',
}

type IconName = keyof typeof paths

export default function Icon({ name }: { name: IconName }) {
  return <svg className="icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[name]} /></svg>
}
