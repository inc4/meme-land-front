const HamburgerIcon: React.FC<React.SVGAttributes<{}>> = (props) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 12H31" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M9 20H31" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M9 28H31" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export default HamburgerIcon;
