export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Haider Thakur — Built with React · Pro Portfolio</p>
        <div className="footer-links">
          <a href="mailto:haideralithakur747@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/haider-ali-0a6948305" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/haideralithakur747" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}