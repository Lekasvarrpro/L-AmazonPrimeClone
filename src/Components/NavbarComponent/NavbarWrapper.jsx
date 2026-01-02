import Navbar from "./Navbar";

const NavbarWrapper = ({ children }) => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 pt-20 bg-gradient-to-b from-black/75 to-transparent">
        <Navbar />
      </div>

      {/* PAGE CONTENT */}
      <div className="pt-40">
        {children}
      </div>
    </div>
  );
};

export default NavbarWrapper;
