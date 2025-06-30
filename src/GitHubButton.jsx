import githubIcon from './assets/github.svg'

const GitHubButton = ({ repoUrl }) => {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'absolute',
        top: '40px',
        right: '40px',
        zIndex: 1000,
      }}
    >
      <img
        src={githubIcon}
        alt="GitHub"
        style={{
          width: '40px',
          height: '40px',
          opacity: 0.8,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={e => (e.currentTarget.style.opacity = 0.8)}
      />
    </a>
  )
}

export default GitHubButton
