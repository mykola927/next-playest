/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";

function Title({ title }) {
  return (
    <div className="titlebar">
      <span className="filter-title">{title}</span>
      <div className="bottom">
        <span className="bottomline"></span>
        <span className="view-more">view more</span>
      </div>

      <style jsx>{`
        .titlebar {
          position: relative;
          width: 100%;
          height: 65px;
        }

        .filter-title {
          position: absolute;
          width: 100%;
          height: 51px;
          left: 0px;
          top: 0px;
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 51px;
          display: flex;
          align-items: center;
          color: #ffffff;
        }

        .bottom {
          position: absolute;
          width: 100%;
          top: 57px;
          padding-left: 2rem;
          display: flex;
          align-items: center;
        }

        .bottomline {
          width: 100%;
          height: 3px;
          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
        }

        .view-more {
          min-width: 88px;
          height: 19px;

          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;

          color: #ffffff;
          padding-left: 10px;
        }
        @media screen and (max-width: 920px) {
          .titlebar {
            min-width: 100%;
          }
          .filter-title {
            font-size: 30px;
          }
          .bottom {
            position: absolute;
            top: 57px;
            padding-left: 2rem;
            display: flex;
            align-items: center;
          }
          .bottomline {
            width: 100%;
            height: 3px;
            background: linear-gradient(
              120.5deg,
              #6680ff 2.71%,
              #05e8c2 96.76%
            );
          }
        }

        @media screen and (max-width: 576px) {
          .filter-title {
            font-size: 30px;
          }
          .bottom {
            position: absolute;
            top: 57px;
            padding-left: 2rem;
            display: flex;
            align-items: center;
          }
          .bottomline {
            width: 100%;
            height: 3px;
            background: linear-gradient(
              120.5deg,
              #6680ff 2.71%,
              #05e8c2 96.76%
            );
          }
        }

        @media screen and (max-width: 400px) {
          .filter-title {
            font-size: 30px;
          }
          .bottom {
            position: absolute;
            top: 57px;
            padding-left: 2rem;
            display: flex;
            align-items: center;
          }
          .bottomline {
            width: 100%;
            height: 3px;
            background: linear-gradient(
              120.5deg,
              #6680ff 2.71%,
              #05e8c2 96.76%
            );
          }
        }
      `}</style>
    </div>
  );
}
export default Title;
