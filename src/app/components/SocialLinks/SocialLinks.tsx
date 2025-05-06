import './social-links.scss'

export function SocialLinks() {
    return (
      <div className="homepage-socials">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/luke-wiskus-382a0a181/" target="_blank">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/Lukewiskus" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    );
  }