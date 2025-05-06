import './footer-section.scss';

export function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="contact">
        <h2>Contact</h2>
        <p>If you would like to get in touch, reach out via email or LinkedIn.</p>
        <a href="mailto:lukewiskus@gmail.com" className="contact-button">lukewiskus@gmail.com</a>
      </div>
      <div className="footer-note">
        <p>This site was built with Next.js and hosted on Vercel.</p>
      </div>
    </footer>
  );
}
