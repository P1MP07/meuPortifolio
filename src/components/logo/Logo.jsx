import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src="https://img.icons8.com/color-glass/48/source-code.png"
        alt="logo"
        className="text-4xl mr-2 justify-center items-center"
      />
      {/* <FaCode className="text-4xl text-blue-500 mr-2" /> */}

      <h1 className="text-2xl font-bold justify-center items-center">Meu</h1>
      <h1 className="text-2xl font-bold justify-center items-center text-purple-900">
        Portifólio
      </h1>
    </div>
  );
};

export default Logo;
