import React from "react";

const SideMenu: React.FC = () => {
  // Your JavaScript code here
  const openmenu = () => {
    const sidemu = document.getElementById("sidemenu");
    if (sidemu) {
      sidemu.style.right = "0";
    }
  };

  const closemenu = () => {
    const sidemu = document.getElementById("sidemenu");
    if (sidemu) {
      sidemu.style.right = "-200px";
    }
  };

  return (
    <div>
      {/* Your JSX for the component */}
      <button onClick={openmenu}>Open Menu</button>
      <button onClick={closemenu}>Close Menu</button>
    </div>
  );
};

export default SideMenu;
