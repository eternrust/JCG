export type IconName =
  'addSquare'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'backSquare'
  | 'danger'
  | 'filterSquare'
  | 'infoCircle'
  | 'lamp'
  | 'medal'
  | 'medalStar'
  | 'moreSquare'
  | 'notification'
  | 'user'
  | 'rank'
  | 'ranking'
  | 'downloadSquare'
  | 'setting'
  | 'taskSquare'
  | 'checkCircle'
  | 'trashSquare'
  | 'verify'

type icon = {
  path: string;
  viewBox: string;
}

export const IconSet: Record<IconName, icon> = {
  addSquare: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z',
    viewBox: '0 0 24 24',
  },
  arrowDown: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.13 9.17-3.53 3.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3.53-3.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3 3 3-3c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z',
    viewBox: '0 0 24 24',
  },
  arrowLeft: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-2.4 13c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L9.2 12.53a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3 3 3Z',
    viewBox: '0 0 24 24',
  },
  arrowRight: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-1.4 10.53-3.53 3.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3-3-3-3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.3.29.3.77 0 1.06Z',
    viewBox: '0 0 24 24',
  },
  arrowUp: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.13 12c-.15.15-.34.22-.53.22s-.38-.08-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.76 0 1.06Z',
    viewBox: '0 0 24 24',
  },
  backSquare: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-2.27 14.13H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.92c1.28 0 2.33-1.04 2.33-2.33s-1.04-2.33-2.33-2.33H8.85l.26.26c.29.3.29.77-.01 1.07-.15.15-.34.22-.53.22s-.38-.07-.53-.22L6.47 9.72a.754.754 0 0 1 0-1.06l1.57-1.57c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.33.33h5.15c2.11 0 3.83 1.72 3.83 3.83 0 2.11-1.72 3.82-3.83 3.82Z',
    viewBox: '0 0 24 24',
  },
  checkCircle: {
    path: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.78 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z',
    viewBox: '0 0 24 24',
  },
  danger: {
    path: 'M21.76 15.92 15.36 4.4C14.5 2.85 13.31 2 12 2s-2.5.85-3.36 2.4l-6.4 11.52c-.81 1.47-.9 2.88-.25 3.99.65 1.11 1.93 1.72 3.61 1.72h12.8c1.68 0 2.96-.61 3.61-1.72.65-1.11.56-2.53-.25-3.99ZM11.25 9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9Zm1.46 8.71-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02s-.13-.01-.2-.02a.636.636 0 0 1-.18-.06.758.758 0 0 1-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71l.15-.12c.06-.04.12-.07.18-.09.06-.03.12-.05.18-.06.13-.03.27-.03.39 0 .07.01.13.03.19.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Z',
    viewBox: '0 0 24 24',
  },
  downloadSquare: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-7.72 8.98c.29-.29.77-.29 1.06 0l1.72 1.72V6.51c0-.41.34-.75.75-.75s.75.34.75.75v6.19l1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3a.776.776 0 0 1-.53.22.753.753 0 0 1-.53-.22l-3-3a.754.754 0 0 1 0-1.06Zm9.77 6.24c-2.01.67-4.12 1.01-6.24 1.01s-4.23-.34-6.24-1.01a.753.753 0 0 1-.47-.95c.13-.39.55-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47.12.4-.09.82-.48.95Z',
    viewBox: '0 0 24 24',
  },
  filterSquare: {
    path: 'M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68ZM8.46 10.68l-.49-.51c-.26-.26-.47-.73-.47-1.05v-1.2c0-.63.47-1.1 1.05-1.1h2.14c.41 0 .66.45.44.8L9.28 10.6c-.18.29-.59.33-.82.08Zm8.04-1.66c0 .42-.26.94-.52 1.2l-2.25 1.99c-.31.26-.52.78-.52 1.2v2.25c0 .31-.21.73-.47.89l-.74.47c-.68.42-1.62-.05-1.62-.89v-2.77c0-.37-.21-.84-.42-1.1L9.72 12a.542.542 0 0 1-.07-.64l2.68-4.3c.1-.15.26-.25.44-.25h2.68c.58 0 1.05.47 1.05 1.05v1.16Z',
    viewBox: '0 0 24 24',
  },
  infoCircle: {
    path: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm-.75 6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8Zm1.67 8.38c-.05.13-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.09-.1-.16-.2-.21-.33A.995.995 0 0 1 11 16c0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38Z',
    viewBox: '0 0 24 24',
  },
  lamp: {
    path: 'M19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56Zm-3.95 15.637c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0a.698.698 0 0 1-.623-1.218.69.69 0 0 1 .243-.122c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51Z',
    viewBox: '0 0 24 24',
  },
  medal: {
    path: 'M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15Zm3.79.61c.33-.17.71.08.71.45v4.85c0 .9-.63 1.34-1.41.97l-2.68-1.27c-.23-.1-.59-.1-.82 0l-2.68 1.27c-.78.36-1.41-.08-1.41-.98l.02-4.84c0-.37.39-.61.71-.45 1.13.57 2.41.89 3.77.89 1.36 0 2.65-.32 3.79-.89Z',
    viewBox: '0 0 24 24',
  },
  medalStar: {
    path: 'm21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47c-.19.8-1.21 1.05-1.74.42l-2.99-3.44a.498.498 0 0 1 .25-.81 8.492 8.492 0 0 0 4.53-2.83c.19-.23.53-.26.74-.05l2.22 2.22c.76.76.49 1.71-.27 1.89Zm-18.55 0 1.65.39c.37.09.66.37.74.74l.35 1.47c.19.8 1.21 1.05 1.74.42l2.99-3.44c.24-.28.11-.72-.25-.81a8.492 8.492 0 0 1-4.53-2.83.5.5 0 0 0-.74-.05l-2.22 2.22c-.76.76-.49 1.71.27 1.89ZM12 2C8.13 2 5 5.13 5 9c0 1.45.43 2.78 1.17 3.89a6.986 6.986 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02A6.968 6.968 0 0 0 19 9c0-3.87-3.13-7-7-7Zm3.06 6.78-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.85-.83c-.49-.49-.33-.98.35-1.09l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.32-.64.84-.64 1.16 0l.59 1.18c.08.16.29.32.48.35l1.07.18c.67.11.83.6.34 1.09Z',
    viewBox: '0 0 24 24',
  },
  moreSquare: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z',
    viewBox: '0 0 24 24',
  },
  notification: {
    path: 'm20.19 14.06-1.13-1.88c-.25-.41-.47-1.2-.47-1.68V8.63c0-3.63-2.95-6.58-6.57-6.58C8.39 2.06 5.44 5 5.44 8.63v1.86c0 .48-.22 1.27-.46 1.68l-1.13 1.88c-.43.73-.53 1.56-.26 2.28.27.73.88 1.31 1.68 1.57 1.08.36 2.17.62 3.28.81.11.02.22.03.33.05l.44.06c.26.04.52.07.79.09 1.26.119 2.53.119 3.79 0 .23-.02.46-.04.68-.07.18-.02.36-.04.54-.07.11-.01.22-.03.33-.05 1.12-.18 2.23-.46 3.31-.82a2.65 2.65 0 0 0 1.64-1.58c.28-.75.2-1.57-.21-2.26ZM12.75 10a.76.76 0 1 1-1.52 0V6.9a.76.76 0 0 1 1.52 0V10Zm2.08 10.01A3.015 3.015 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z',
    viewBox: '0 0 24 24',
  },
  rank: {
    path: 'M6.67 14H4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1Zm6.66-4h-2.67c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1h4.67c.55 0 1-.45 1-1v-9a2 2 0 0 0-2-2ZM20 17h-2.67c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-2c0-1.1-.9-2-2-2ZM15.01 4.85c.31-.31.43-.68.33-1-.1-.32-.41-.55-.85-.62l-.96-.16c-.04 0-.13-.07-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.01.04-.1.11-.14.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.04.03.07.15.06.19l-.21.92c-.16.69.1 1 .27 1.12.17.12.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.89.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19l.75-.75Z',
    viewBox: '0 0 24 24',
  },
  ranking: {
    path: 'm13.3 8.11 1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46L17 16.26c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33c-.41-.24-1.07-.24-1.48 0L9.01 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36L5.14 14.4c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.44 1.89-1.44 2.6-.01ZM6 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Zm12 0c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Zm-6-5c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z',
    viewBox: '0 0 24 24',
  },
  setting: {
    path: 'M20.1 9.221c-1.81 0-2.55-1.28-1.65-2.85.52-.91.21-2.07-.7-2.59l-1.73-.99c-.79-.47-1.81-.19-2.28.6l-.11.19c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.641 1.641 0 0 0-2.26-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.85-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85-.52.91-.21 2.07.7 2.59l1.73.99c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76a1.92 1.92 0 0 0-1.91-1.9Zm-8.1 6.03c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Z',
    viewBox: '0 0 24 24',
  },
  taskSquare: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9l-2.25 2.25c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06Zm0-7-2.25 2.25c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06Zm7.59 8.72h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.75.75 0 1 1 0 1.5Zm0-7h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.75.75 0 1 1 0 1.5Z',
    viewBox: '0 0 24 24',
  },
  trashSquare: {
    path: 'M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.43 13.76c-.06.85-.13 1.91-2.05 1.91h-3.42c-1.91 0-1.99-1.06-2.05-1.91l-.31-3.96a.94.94 0 0 1 .24-.7.9.9 0 0 1 .67-.29h6.32c.25 0 .5.11.67.29.17.19.26.44.24.69l-.31 3.97Zm1.04-5.94h-.06c-1.04-.1-1.99-.17-2.9-.21a40.81 40.81 0 0 0-3.67-.03c-.6.03-1.21.07-1.81.13l-1.09.11H7.2c-.35 0-.65-.26-.68-.62-.04-.37.24-.71.61-.74l1.09-.11c.43-.04.85-.07 1.28-.09l.08-.47c.08-.5.23-1.46 1.73-1.46h1.39c1.51 0 1.66.99 1.73 1.47l.08.48c.75.04 1.52.1 2.36.18.38.04.65.37.62.75-.04.35-.34.61-.69.61Z',
    viewBox: '0 0 24 24',
  },
  user: {
    path: 'M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2Zm5.08 12.149c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z',
    viewBox: '0 0 24 24',
  },
  verify: {
    path: 'm21.56 10.739-1.36-1.58c-.26-.3-.47-.86-.47-1.26v-1.7c0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36c-.69-.59-1.82-.59-2.52 0l-1.57 1.37c-.3.25-.87.46-1.26.46H6.18c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59c-.58.69-.58 1.81 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52Zm-5.4-.63-4.83 4.83a.75.75 0 0 1-1.06 0l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z',
    viewBox: '0 0 24 24',
  },
};