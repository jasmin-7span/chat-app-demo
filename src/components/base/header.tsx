import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>header</div>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
};

export default Header;
