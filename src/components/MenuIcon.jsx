const MenuIcon = ({ className, onClick }) => (
  <div
    className={`flex flex-col justify-between w-8 h-6 cursor-pointer ${className}`}
    onClick={onClick}
  >
    <div className="h-0.5 w-full bg-blue-emtech"></div>
    <div className="h-0.5 w-full bg-blue-emtech"></div>
    <div className="h-0.5 w-full bg-blue-emtech"></div>
  </div>
);

export default MenuIcon;
