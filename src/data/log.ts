export interface LogItem {
  id: number
  date: string
  title: string
  desc: string
  tag: string
}

export const allLog: LogItem[] = [
  {
    id: 1,
    date: '2026.05.09',
    title: `開発ログ`,
    desc: 'ポートフォリオサイトの開発。',
    tag: 'UPDATE',
  },
  {
    id: 2,
    date: '2026.05.09',
    title: `イベント`,
    desc: 'ハッカソンなど。',
    tag: 'EVENT',
  },
]

//最新順にソートした配列をエクスポート
export const sortedLog = [...allLog].sort((a, b) => {
  const dateA = new Date(a.date.replace(/\./g, '-')).getTime()
  const dateB = new Date(b.date.replace(/\./g, '-')).getTime()
  return dateB - dateA
})
