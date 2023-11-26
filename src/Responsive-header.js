import "./Responsive-header.css";
export const ResponsiveHeader = () => {
  return (
    <div className="main-wrapper">
      <div className="responsive-header-container">
        <a href="#Home" className="responsive-home-links">
          Home
        </a>
        <a href="#Contact" className="responsive-links">
          Contact
        </a>
        <a href="#About" className="responsive-links">
          About
        </a>
      </div>
    </div>
  );
};
