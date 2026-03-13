// src/data/works.ts
export interface Project {
  id: number
  title: string
  tech: string
  desc: string
  date: string
  thumb: string
  videoUrl?: string // YouTube埋め込みURL (https://www.youtube.com/embed/動画ID)
  images?: string[] // 複数画像のURL
  githubUrl?: string // ソースコードへのリンク
  siteUrl?: string // 公開サイトや動画へのリンク
}

export const allWorks: Project[] = [
  {
    id: 1,
    title: 'Original Game Engine',
    tech: 'C++ / DirectX',
    desc: 'フルスクラッチでのエンジン開発',
    date: '2026.02.13',
    thumb: 'ENGINE',
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
    date: '2026.02.05',
    thumb: '3D',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    tech: 'Vue.js / TS',
    desc: 'このサイトの制作',
    date: '2026.03.09',
    thumb: 'WEB',
  },
  {
    id: 4,
    title: '2D Action Game',
    tech: 'Unity',
    desc: '物理演算を駆使したアクション',
    date: '2025.12.20',
    thumb: 'GAME',
  },
  {
    id: 5,
    title: 'Task Manager',
    tech: 'Next.js',
    desc: 'ハッカソンで制作したWebツール',
    date: '2026.02.17',
    thumb: 'TOOL',
  },
  {
    id: 6,
    title: 'Shader Test',
    tech: 'HLSL',
    desc: '描画エンジンのためのシェーダー開発',
    date: '2026.01.30',
    thumb: 'SHADER',
  },
  // 7個目以降もここに追加していくだけで、WorksViewのアーカイブに反映されます
]
