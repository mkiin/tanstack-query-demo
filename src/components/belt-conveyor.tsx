'use client';

import React from 'react';

export const BeltConveyor = () => {
  return (
    <div className="conveyor-container">
      <div className="conveyor-belt">
        <div className="belt-surface">
          <div className="belt-pattern"></div>
          <div className="belt-pattern"></div>
        </div>
      </div>
      <style jsx>{`
        .conveyor-container {
          position: relative;
          width: 200px;
          height: 100vh;
          margin: 0 auto;
          overflow: hidden;
        }

        .conveyor-belt {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            #2c2c2c 0%,
            #404040 10%,
            #2c2c2c 20%,
            #404040 30%,
            #2c2c2c 40%,
            #404040 50%,
            #2c2c2c 60%,
            #404040 70%,
            #2c2c2c 80%,
            #404040 90%,
            #2c2c2c 100%
          );
          border-left: 8px solid #1a1a1a;
          border-right: 8px solid #1a1a1a;
          box-shadow:
            inset 0 0 20px rgba(0, 0, 0, 0.5),
            inset -5px 0 10px rgba(0, 0, 0, 0.3),
            inset 5px 0 10px rgba(0, 0, 0, 0.3);
        }

        .belt-surface {
          position: absolute;
          width: 100%;
          height: 200%;
          animation: beltMove 3s linear infinite;
        }

        .belt-pattern {
          position: absolute;
          width: 100%;
          height: 50%;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 15px,
            rgba(255, 255, 255, 0.1) 15px,
            rgba(255, 255, 255, 0.1) 18px,
            transparent 18px,
            transparent 33px
          );
        }

        .belt-pattern:nth-child(2) {
          top: 50%;
        }

        .conveyor-belt::before,
        .conveyor-belt::after {
          content: '';
          position: absolute;
          width: 120%;
          height: 50px;
          left: -10%;
          background: #1a1a1a;
          border-radius: 50%;
          box-shadow:
            0 0 10px rgba(0, 0, 0, 0.8),
            inset 0 0 20px rgba(0, 0, 0, 0.5);
        }

        .conveyor-belt::before {
          top: -25px;
        }

        .conveyor-belt::after {
          bottom: -25px;
        }

        @keyframes beltMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50%);
          }
        }

        /* ローラーの詳細 */
        .conveyor-belt::before::after,
        .conveyor-belt::after::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 30px;
          background: #333;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default BeltConveyor;
