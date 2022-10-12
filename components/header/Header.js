/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import IconBar from "../iconBar/IconBar";
import Wallet from "../wallet/Wallet";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className={click ? "main-container" : ""} onClick={() => Close()}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <nav
        className="navbar mx-8 lg:mx-8 xl:mx-16 2xl:mx-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <Link href="/">
              <img src="/assets/image/logo.png" className="nav-logo" />
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link
                  href="#"
                  activeClassName="active"
                  onClick={click ? handleClick : null}
                >
                  <span className="nav-links">Homepage</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  activeClassName="active"
                  onClick={click ? handleClick : null}
                >
                  <span className="nav-links">Tournament</span>
                </Link>
              </li>
              <li>
                <IconBar />
              </li>
            </ul>
            <Wallet />
          </div>
        </div>
      </nav>
      <div className="hide-bar">
        <ul className={click ? "hide-menu" : "hide-menu-none"}>
          <li className="nav-item">
            <Link
              href="#"
              activeClassName="active"
              onClick={click ? handleClick : null}
            >
              <span className="nav-links">Homepage</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#"
              activeClassName="active"
              onClick={click ? handleClick : null}
            >
              <span className="nav-links">Tournament</span>
            </Link>
          </li>
          <li className="nav-item">
            <div className="py-2">
              <IconBar />
            </div>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .main-container {
          position: relative;
        }

        .navbar {
          position: relative;
          height: 100px;
          background: linear-gradient(to right, #6680ff, #14d8cb);
          opacity: 0.9;
          clip-path: polygon(
            0 0,
            100% 0%,
            98.3% 80%,
            98% 86%,
            97.5% 92%,
            97% 95%,
            96.5% 97%,
            96% 98%,
            95.5% 99%,
            94% 100%,
            6% 100%,
            4.5% 99%,
            4% 98%,
            3.5% 97%,
            3% 95%,
            2.5% 92%,
            2% 86%,
            1.7% 80%
          );
        }

        .nav-container {
          position: absolute;
          top: 0px;
          left: 2px;
          bottom: 2px;
          right: 2px;
          background: linear-gradient(
              120.5deg,
              rgba(102, 128, 255, 0.2) 2.71%,
              rgba(5, 232, 194, 0.2) 96.76%
            ),
            #000000;
          clip-path: polygon(
            0 0,
            100% 0%,
            98.3% 80%,
            98% 86%,
            97.5% 92%,
            97% 95%,
            96.5% 97%,
            96% 98%,
            95.5% 99%,
            94% 100%,
            6% 100%,
            4.5% 99%,
            4% 98%,
            3.5% 97%,
            3% 95%,
            2.5% 92%,
            2% 86%,
            1.7% 80%
          );
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav-content {
          width: 100%;
          margin: 0 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          text-align: center;
          padding: 0px;
        }

        .hide-bar {
          display: none;
        }

        .nav-links {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          display: flex;
          align-items: center;
          color: #ffffff;
          cursor: pointer;
        }
        .nav-links:hover {
          color: #05e8c2;
        }
        .fa-code {
          margin-left: 1rem;
        }

        .nav-item {
          line-height: 40px;
          font-family: "Inter";
          font-style: normal;
          margin: 0px 8px;
        }

        .nav-item:after {
          content: "";
          display: block;
          height: 3px;
          width: 0;
          background: transparent;
          transition: width 0.7s ease, background-color 0.5s ease;
        }

        .nav-item:hover:after {
          width: 100%;
          background: #ffdd40;
        }

        .nav-item.active {
          color: #05e8c2;
          border: 1px solid #ffdd40;
        }

        .nav-icon {
          display: none;
        }

        @media screen and (max-width: 1160px) {
          .nav-menu {
            display: none;
          }

          .hide-bar {
            display: block;
          }

          .hide-menu-none {
            display: none;
          }
          .hide-menu {
            display: block;
            position: absolute;
            background: linear-gradient(
                120.5deg,
                rgba(102, 128, 255, 0.2) 2.71%,
                rgba(5, 232, 194, 0.2) 96.76%
              ),
              #000000;
            opacity: 1;
            transition: all 0.8s ease;
            top: 6.5rem;
            left: 3rem;
            right: 3rem;
            padding: 1rem auto;
            z-index: 30;
            backdrop-filter: blur(20px);
            border-radius: 10px;
          }

          .nav-item {
            color: white;
            border: none;
            font-family: "Inter";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 40px;
            // padding: 10px;
            text-align: center;
          }
          .nav-item .active {
            color: #05e8c2;
            border: none;
            font-family: "Inter";
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 40px;
            padding: 0px;
          }
          .nav-links {
            padding: 1.5rem;
            width: 100%;
            display: table;
          }

          .nav-icon {
            display: block;
            display: flex;
            align-items: center;
            font-size: 40px;
            cursor: pointer;
            color: #ffffff;
          }
        }
        @media screen and (max-width: 576px) {
          .navbar {
            height: 70px;
          }
          .nav-logo {
            width: 70%;
            margin: 0 10px;
          }
          .hide-menu {
            top: 4.5rem;
          }
        }
        @media screen and (max-width: 450px) {
          .nav-content {
            margin: 0 1.5rem;
          }
          .nav-logo {
            width: 65%;
            margin: 0 10px;
          }
          .hide-menu {
            left: 2rem;
            right: 2rem;
          }
        }
        @media screen and (max-width: 375px) {
          .nav-logo {
            width: 60%;
            margin: 0 10px;
          }
          .nav-icon {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
export default Header;
