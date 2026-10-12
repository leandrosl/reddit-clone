import { useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

const communityData = {
  programacao: {
    name: 'r/programacao',
    description:
      'Um espaço para compartilhar conhecimento, projetos e conversas sobre programação e tecnologia.',
    createdAt: '12 de maio de 2024',
    followers: '128 mil',
  },
}

const posts = [
  {
    id: 1,
    title: 'Como vocês organizam seus projetos React atualmente?',
    excerpt:
      'Quero melhorar a estrutura dos meus projetos e gostaria de conhecer as decisões que vocês tomam no dia a dia.',
    author: 'dev_mateus',
    time: 'há 2 horas',
    votes: '842',
    comments: '96 comentários',
    tag: 'Discussão',
  },
  {
    id: 2,
    title: 'Compartilhe uma ferramenta que melhorou seu fluxo de desenvolvimento',
    excerpt:
      'Pode ser uma extensão, biblioteca, configuração ou qualquer pequeno recurso que fez diferença na sua rotina.',
    author: 'ana.codes',
    time: 'há 5 horas',
    votes: '516',
    comments: '64 comentários',
    tag: 'Comunidade',
  },
  {
    id: 3,
    title: 'Dica rápida: mantenha seus componentes simples',
    excerpt:
      'Uma breve reflexão sobre como reduzir responsabilidades e deixar o código mais fácil de testar e manter.',
    author: 'cafe_com_codigo',
    time: 'há 8 horas',
    votes: '291',
    comments: '31 comentários',
    tag: 'Dica',
  },
]

function PostCard({ post }) {
  return (
    <article className="rounded-[10px] border border-[#2d3437] bg-[#17191c] p-5 transition duration-150 hover:border-[#59656b]">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] text-[#8b9498]">
        <span className="font-semibold text-[#d7dfe2]">u/{post.author}</span>
        <span aria-hidden="true">•</span>
        <span>{post.time}</span>
      </div>

      <h2 className="mb-3 text-xl font-semibold leading-tight tracking-[-0.04em] text-[#f2f7f7]">
        {post.title}
      </h2>
      <p className="mb-5 text-sm leading-[1.65] text-[#a6adb1]">{post.excerpt}</p>

      <div className="flex flex-wrap items-center gap-2 text-xs text-[#a6adb1]">
        <div className="flex items-center overflow-hidden rounded-lg border border-[#2d3437] bg-[#202124]">
          <button
            className="px-2.5 py-1.5 text-base leading-none transition hover:bg-[#2d3437] hover:text-orange"
            type="button"
            aria-label={`Votar positivamente em ${post.title}`}
          >
            ↑
          </button>
          <span className="min-w-10 text-center font-mono text-[11px] text-[#d7dfe2]">{post.votes}</span>
          <button
            className="px-2.5 py-1.5 text-base leading-none transition hover:bg-[#2d3437] hover:text-orange"
            type="button"
            aria-label={`Votar negativamente em ${post.title}`}
          >
            ↓
          </button>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-[#2d3437] bg-[#202124] px-3 py-2 transition hover:bg-[#2d3437]" type="button">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>
          {post.comments}
        </button>

        <span className="ml-auto rounded-full border border-[#3d474c] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[#a6adb1]">
          {post.tag}
        </span>
      </div>
    </article>
  )
}

function CommunityPage() {
  const { communityName = 'programacao' } = useParams()
  const community = communityData[communityName] ?? communityData.programacao

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <AppHeader />

      <header className="border-b border-[#2d3437] bg-[#0e1113]">
        <div className="mx-auto flex w-full max-w-[1320px] items-center gap-4 px-6 py-6 sm:px-[5vw] sm:py-8 lg:px-[76px]">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-orange font-mono text-xl font-medium tracking-[-0.12em] text-white shadow-[0_0_0_5px_rgba(240,79,47,0.12)] sm:size-16 sm:text-2xl">
            p/
          </div>
          <h1 className="text-2xl font-semibold tracking-[-0.06em] text-[#f2f7f7] sm:text-3xl">
            {community.name}
          </h1>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1320px] flex-1 px-6 pb-12 pt-8 sm:px-[5vw] sm:pb-16 sm:pt-10 lg:px-[76px]">
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_340px] md:gap-[clamp(32px,6vw,96px)] lg:grid-cols-[180px_minmax(0,1fr)_320px] lg:gap-8">
          <div className="hidden lg:block" aria-hidden="true" />

          <section className="lg:col-start-2" aria-labelledby="feed-title">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-orange">
                  Feed da comunidade
                </p>
                <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#f2f7f7]" id="feed-title">
                  Posts recentes
                </h2>
              </div>
              <button className="shrink-0 border-0 bg-transparent p-2 text-xs text-[#a6adb1]" type="button">
                Mais recentes <span className="ml-1 text-[17px] text-orange" aria-hidden="true">⌄</span>
              </button>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          <aside className="rounded-[10px] border border-[#2d3437] bg-[#17191c] p-6 lg:col-start-3" aria-labelledby="about-community-title">
            <h2 className="mb-4 text-xl font-semibold tracking-[-0.05em] text-[#f2f7f7]" id="about-community-title">
              Sobre a comunidade
            </h2>
            <p className="mb-6 text-sm leading-[1.65] text-[#a6adb1]">{community.description}</p>

            <dl className="space-y-4 border-t border-[#2d3437] pt-5">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-xs text-[#8b9498]">Criada em</dt>
                <dd className="text-right text-sm font-medium text-[#d7dfe2]">{community.createdAt}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-xs text-[#8b9498]">Seguidores</dt>
                <dd className="text-right text-sm font-medium text-[#d7dfe2]">{community.followers}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </main>

      <footer className="mt-auto flex flex-col gap-4 border-t border-[#2d3437] px-6 py-[22px] font-mono text-[10px] uppercase tracking-[0.03em] text-[#a6adb1] sm:flex-row sm:items-center sm:justify-between sm:px-[5vw] lg:px-[76px]">
        <span>Reddit</span>
        <span>Frontend em React + Vite</span>
      </footer>
    </div>
  )
}

export default CommunityPage
