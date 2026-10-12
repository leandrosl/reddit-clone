import './App.css'

const communities = [
  { name: 'r/programacao', members: '128 mil membros' },
  { name: 'r/tecnologia', members: '86 mil membros' },
  { name: 'r/estudos', members: '42 mil membros' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Reddit Clone - início">
          <span className="brand-mark">r/</span>
          <span>Reddit Clone</span>
        </a>

        <nav className="topbar-actions" aria-label="Navegação principal">
          <button className="button button-ghost" type="button">
            Entrar
          </button>
          <button className="button button-primary" type="button">
            Criar conta
          </button>
        </nav>
      </header>

      <main className="page-content">
        <section className="hero" aria-labelledby="page-title">
          <p className="eyebrow">Uma comunidade para todas as ideias</p>
          <h1 id="page-title">O que está acontecendo hoje?</h1>
          <p className="hero-copy">
            Compartilhe descobertas, participe das conversas e encontre pessoas
            interessadas nos mesmos assuntos que você.
          </p>
          <button className="button button-primary" type="button">
            Começar uma discussão
          </button>
        </section>

        <div className="content-grid">
          <section className="feed" aria-labelledby="feed-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Feed da comunidade</p>
                <h2 id="feed-title">Posts recentes</h2>
              </div>
              <button className="sort-button" type="button">
                Mais recentes <span aria-hidden="true">⌄</span>
              </button>
            </div>

            <article className="empty-state">
              <div className="empty-icon" aria-hidden="true">✦</div>
              <h3>Seu feed começa aqui</h3>
              <p>
                Os posts da API aparecerão nesta área assim que a comunidade
                começar a publicar.
              </p>
              <button className="button button-secondary" type="button">
                Explorar comunidades
              </button>
            </article>
          </section>

          <aside className="sidebar" aria-labelledby="communities-title">
            <div className="sidebar-heading">
              <h2 id="communities-title">Comunidades em destaque</h2>
              <span className="live-dot" aria-label="Atualizado agora" />
            </div>
            <ul className="community-list">
              {communities.map((community, index) => (
                <li key={community.name} className="community-item">
                  <span className="community-rank">0{index + 1}</span>
                  <span className="community-avatar">{community.name[2]}</span>
                  <span className="community-details">
                    <strong>{community.name}</strong>
                    <small>{community.members}</small>
                  </span>
                  <span className="community-arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
            <button className="all-communities" type="button">
              Ver todas as comunidades <span aria-hidden="true">→</span>
            </button>
          </aside>
        </div>
      </main>

      <footer className="footer">
        <span>Reddit Clone</span>
        <span>Frontend em React + Vite</span>
      </footer>
    </div>
  )
}

export default App
