export interface NewsItem {
  id: number
  date: string
  title: string
  desc: string
  tag: string
}

export const allNews: NewsItem[] = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  date: '2026.03.09',
  title: `活動ログ #${i + 1}`,
  desc: 'ハッカソンの進捗や、エンジンのバグ修正などの細かい記録です。',
  tag: i % 2 === 0 ? 'UPDATE' : 'EVENT',
}))
