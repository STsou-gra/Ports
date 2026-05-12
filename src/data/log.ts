export interface LogItem {
  id: number
  date: string
  title: string
  desc: string //第2見出し
  article: string
  tag: string
}

export const allLog: LogItem[] = [
  {
    id: 1,
    date: '2026.05.09',
    title: `開発ログ`,
    desc: 'ポートフォリオサイトの開発。',
    article: `
### 実装したこと
- Markdown表示機能
- Prism.jsによるシンタックスハイライト

C#のコードテスト：
\`\`\`csharp
public void Update(){
    Debug.Log("Hello Portfolio!");
}
\`\`\`
`,
    tag: 'UPDATE',
  },
  {
    id: 2,
    date: '2026.05.09',
    title: `イベント`,
    desc: 'ハッカソンなど。',
    article: '',
    tag: 'EVENT',
  },
]

//最新順にソートした配列をエクスポート
export const sortedLog = [...allLog].sort((a, b) => {
  const dateA = new Date(a.date.replace(/\./g, '-')).getTime()
  const dateB = new Date(b.date.replace(/\./g, '-')).getTime()
  return dateB - dateA
})
