// src/data/works.ts
export interface Project {
  id: number // ID
  title: string // 作品記事タイトル
  tech: string // 使用技術
  desc: string // 第二見出し（pタグ）
  article: string //記事内容(Markdown形式)
  date: string // 書かれた日付
  thumb: string // 作品の種類
  videoUrl?: string // YouTube埋め込みURL (https://www.youtube.com/embed/動画ID)
  images?: string[] // 複数画像のURL
  githubUrl?: string // ソースコードへのリンク
  siteUrl?: string // 公開サイトや動画へのリンク
}

export const allWorks: Project[] = [
  {
    id: 1,
    title: 'ポートフォリオサイトへようこそ',
    tech: 'Vue.js / TypeScript',
    desc: 'パンパカパーン！ポートフォリオサイトが作成されました！',
    article: `
ポートフォリオサイトへようこそ！ここでは個人開発物や参加したハッカソンなどで作成した物を載せていきます。
現在はこれまでの開発物・実績の掲載中です。
### テスト
- Markdown表示機能
- Prism.jsによるシンタックスハイライト

C#のコードテスト：
\`\`\`csharp
public void Update(){
    Debug.Log("Hello Portfolio!");
}
\`\`\`

\`\`\`csharp
// これはコメントです（緑やグレーになるはず）
public void TestMethod() {
    string message = "こんにちは"; // 文字列は別の色になるはず
    int value = 123; // 数値も色が変わるはず
}
\`\`\`
`,
    date: '2026-05-11',
    thumb: 'Web',
  },
]

//最新順並び替え処理
export const sortedWorks = [...allWorks].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
})

//作成例
/*{
    id: 1,
    title: 'ポートフォリオサイトへようこそ',
    tech: 'Vue.js / TypeScript',
    desc: 'パンパカパーン！ポートフォリオが作成されました！',
    date: '2026-05-11',
    thumb: 'Web',
    images: ['engine_01.jpg', 'engine_02.jpg'], // ダミー画像名
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // サンプルID
    githubUrl: 'https://github.com/yourname/engine',
    siteUrl: 'https://youtube.com/watch?v=...',
  },
    {
    id: 2,
    title: '3D Character Model',
    tech: 'Blender',
    desc: 'オリジナルキャラのモデリング',
    date: '2026-02-05',
    thumb: '3D',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    tech: 'Vue.js / TS',
    desc: 'このサイトの制作',
    date: '2026-03-09',
    thumb: 'WEB',
  },
  {
    id: 4,
    title: '2D Action Game',
    tech: 'Unity',
    desc: '物理演算を駆使したアクション',
    date: '2025-12-20',
    thumb: 'GAME',
  },
  {
    id: 5,
    title: 'Task Manager',
    tech: 'Next.js',
    desc: 'ハッカソンで制作したWebツール',
    date: '2026-02-17',
    thumb: 'TOOL',
  },
  {
    id: 6,
    title: 'Shader Test',
    tech: 'HLSL',
    desc: '描画エンジンのためのシェーダー開発',
    date: '2026-01-30',
    thumb: 'SHADER',
  },
  */
