// src/pages/Portfolio.tsx

import Project from '../components/Project'

const projects = [
  {
    title: 'Weather Dashboard',
    image: '/images/weather.png',
    deployedLink: 'https://weather-dashboard-vxze.onrender.com/',
    gitHubLink: 'https://github.com/DillonDuran/WeatherDash',
  },
  {
    title: 'Candidate Finder',
    image: '/images/candidate.png',
    deployedLink: 'https://candidate-search-vbhl.onrender.com/',
    gitHubLink: 'https://github.com/DillonDuran/CandidateSearch?tab=readme-ov-file',
  },
  {
    title: 'Book Search',
    image: '/images/book.png',
    deployedLink: 'https://book-search-gu7q.onrender.com',
    gitHubLink: 'https://github.com/DillonDuran/BookLover?tab=readme-ov-file', // you might want to double check this
  },
  {
    title: 'Kanban Board',
    image: '/images/kan.png',
    deployedLink: 'https://kanban-board-jwt-auth.onrender.com',
    gitHubLink: 'https://github.com/DillonDuran/KanbanBoard',
  },
]

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
