import React from "react";
import styled from "styled-components";
const BodyCircle = () => {
  const calculateRotation = (i) => {
    return `rotateY(calc(${i} * calc(360deg / 15))) translateZ(350px)`;
  };
  return (
    <BODYCIRCLE>
      <div class="body-part-2">
        <div class="hoodie-guy-animation-class">
          <div class="hoodie-guy"></div>
          <div className="circle">
            {Array.from({ length: 15 }, (_, i) => (
              <span key={i} style={{ transform: calculateRotation(i + 1) }}>
                <img
                  className="bg-black rounded-full circle-text"
                  src="https://img.icons8.com/color/48/html-5--v1.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full circle-text "
                  src="https://img.icons8.com/color/48/css3.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full  circle-text "
                  src="https://img.icons8.com/color/48/null/javascript--v1.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full  circle-text"
                  src="https://img.icons8.com/fluency/48/typescript--v1.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full  circle-text"
                  src="https://img.icons8.com/color/48/react-native.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full  circle-text"
                  src="https://img.icons8.com/fluency/48/tailwind_css.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full circle-text "
                  src="https://img.icons8.com/fluency/48/nextjs.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full circle-text "
                  src="https://img.icons8.com/color/48/null/nodejs.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full circle-text "
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
                  alt="icon"
                  height="50px"
                  width="50px"
                />
                <img
                  className="bg-black rounded-full circle-text "
                  src="https://img.icons8.com/fluency/48/mysql-logo.png"
                  alt="icon"
                />
                <img
                  className="bg-black rounded-full circle-text "
                  src="https://img.icons8.com/fluency/48/prisma-orm.png"
                  alt="icon"
                />
              </span>
            ))}
          </div>

          <div class="background-circle"></div>
        </div>
      </div>
    </BODYCIRCLE>
  );
};

export default BodyCircle;

const BODYCIRCLE = styled.div`
  .body-part-2 {
    position: relative;
  }

  .background-circle {
    background-image: url(/assets/portalRM.png);
    background-position: center;
    background-size: cover;
    /* background: #28292d; */
    border-radius: 50%;
    width: 550px;
    height: 550px;
    z-index: 9;
    /* box-shadow: 0 0 20px #00000080; */
  }

  .hoodie-guy {
    position: absolute;
    background: url(/assets/photoperfil.png);
    /* background-position: center; */
    background-size: cover;
    top: 100px;
    height: 600px;
    width: 600px;
    background-size: cover;
  }

  .circle {
    position: relative;
    top: 300px;
    left: 200px;
    width: 150px;
    height: 150px;
    transform-style: preserve-3d;
    animation: animateCircle 40s linear infinite;
  }

  @keyframes animateCircle {
    0% {
      transform: perspective(1000px) rotateY(0deg) rotateX(15deg)
        translateY(-30px);
    }
    100% {
      transform: perspective(1000px) rotateY(360deg) rotateX(15deg)
        translateY(-30px);
    }
  }

  .circle span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    /* background-color: #2d2e32; */
    /* box-shadow: 0px 0px 5px #00000080; */
    border-radius: 50%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * calc(360deg / 15))) translateZ(300px);
  }

  .circle span img {
    position: relative;
    top: 12px;
    left: 12px;
    object-fit: cover;
  }

  .circle-text {
    -webkit-animation: spin 12s linear infinite;
    animation: spin 12s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
