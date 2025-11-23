"use client";

import React from "react";

const ThreeDCarousel: React.FC = () => {
  return (
    <>
    <h1 className="mt-5 py-[40px] text-center text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          Your Partner in
          <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Global Travel & Documentation
          </span>
        </h1>
    <div className="egs-carousel-root  my-[100px]">
      <div className="egs-carousel-container">

        <div className="egs-carousel">
          <div className="egs-carousel__face">
            <span>This is something</span>
          </div>
          <div className="egs-carousel__face">
            <span>Very special</span>
          </div>
          <div className="egs-carousel__face">
            <span>Special is the key</span>
          </div>
          <div className="egs-carousel__face">
            <span>For you</span>
          </div>
          <div className="egs-carousel__face">
            <span>Just give it</span>
          </div>
          <div className="egs-carousel__face">
            <span>A try</span>
          </div>
          <div className="egs-carousel__face">
            <span>And see</span>
          </div>
          <div className="egs-carousel__face">
            <span>How IT Works</span>
          </div>
          <div className="egs-carousel__face">
            <span>Woow</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .egs-carousel-root {
          /* sirf is section ke around spacing */
          padding: 40px 0;
          display: flex;
          justify-content: center;
        }

        .egs-carousel-container {
          position: relative;
          width: 320px;
          height: 240px; /* yahi height rakhenge to niche wala content collapse nahi karega */
          margin: 0 auto;
          perspective: 1000px;
        }

        .egs-carousel {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: egs-rotate360 60s infinite forwards linear;
        }

        .egs-carousel__face {
          position: absolute;
          width: 300px;
          height: 187px;
          top: 20px;
          left: 10px;
          right: 10px;
          background-size: cover;
          box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
          display: flex;
        }

        .egs-carousel__face span {
          margin: auto;
          font-size: 2rem;
          color: #fefefe;
          font-family: sans-serif;
          text-align: center;
        }

        .egs-carousel__face:nth-child(1) {
          background-image: url("https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(0deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(2) {
          background-image: url("https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(40deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(3) {
          background-image: url("https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(80deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(4) {
          background-image: url("https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(120deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(5) {
          background-image: url("https://images.pexels.com/photos/969679/pexels-photo-969679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(160deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(6) {
          background-image: url("https://images.pexels.com/photos/1834400/pexels-photo-1834400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(200deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(7) {
          background-image: url("https://images.pexels.com/photos/1415268/pexels-photo-1415268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(240deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(8) {
          background-image: url("https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(280deg) translateZ(430px);
        }
        .egs-carousel__face:nth-child(9) {
          background-image: url("https://images.pexels.com/photos/1175135/pexels-photo-1175135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          transform: rotateY(320deg) translateZ(430px);
        }

        @keyframes egs-rotate360 {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(-360deg);
          }
        }

        @media (max-width: 480px) {
          .egs-carousel-root {
            padding: 24px 0;
          }
          .egs-carousel-container {
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default ThreeDCarousel;
