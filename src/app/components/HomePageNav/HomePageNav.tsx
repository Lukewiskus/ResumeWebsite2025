import "./home-page-nav.scss"

export function HomePageNav() {
    return (
      <div className="homepage-nav">
        <a href="#about" className="nav-button">About</a>
        <a href="#experience" className="nav-button">Experience</a>
        <a href="#projects" className="nav-button">Projects</a>
        <a href="#contact" className="nav-button">Contact</a>
      </div>
    );
  }
  