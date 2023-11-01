import React from "react";

function Header() {
  return (
    <div className="bg-[rgba(_0,0,0,0.8)] w-fit p-6 rounded-[15px] ">
      <p className="text-[40px] p-2 text-white Arial"></p>
      {/* Software Engineer */}
      <h1 className="text-[60px] text-white">
        {/* Adjust the font for this */}
        Hi, I'm <span>Jaylen</span>
        <br />
        <br />
        <br />
        from North Carolina
      </h1>
    </div>
  );
}

export default Header;
