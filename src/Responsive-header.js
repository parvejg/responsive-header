import "./Responsive-header.css";
export const ResponsiveHeader = () => {
  return (
    <div className="main-wrapper">
      <div className="responsive-header-container">
        <div className="header-logo">LOGO</div>
        <div className="links-wrapper">
          <a href="#Home" className=" home">
            Home
          </a>
          <a href="#Contact" className="responsive-links contact">
            Contact
          </a>
          <a href="#About" className="responsive-links">
            About
          </a>
        </div>
      </div>
    </div>
  );
};
