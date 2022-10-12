/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="">
      <div className="footer">
        <div className="flex justify-center mb-4">
          <Link href="/" className="cursor-pointer">
            <img src="/assets/image/logo.png" className="" alt="logo" />
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="max-w-4xl flex flex-row justify-center lg:justify-between">
            <div className="basis-1/2">
              <div className="flex flex-col md:flex-row justify-center sm:justify-around">
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">Expoverse</span>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">Lightpaper</span>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">Roadmap</span>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">Team</span>
                  </Link>
                </li>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex flex-col md:flex-row justify-center sm:justify-around">
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">FAQ</span>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">About</span>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">Contact</span>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="#" activeClassName="active">
                    <span className="footer-links">Subscribe</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="social-icon">
          <div className="flex justify-center">
            <Link href="#">
              <img src="assets/image/footer/twitter.png" alt="twitter" />
            </Link>
            <Link href="#">
              <img src="assets/image/footer/discord.png" alt="discord" />
            </Link>
            <Link href="#">
              <img src="assets/image/footer/facebook.png" alt="facebook" />
            </Link>
          </div>
        </div>
        <div className="copyright">© All rights reserved.</div>
      </div>
      <style jsx>{`
        .footer {
          width: 100%;
          text-align: center;
          padding: 2rem 4rem 3rem 4rem;
          background: linear-gradient(
              120.5deg,
              rgba(102, 128, 255, 0.1) 2.71%,
              rgba(5, 232, 194, 0.1) 96.76%
            ),
            #000000;
        }
        .footer-item {
          line-height: 40px;
          font-family: "Inter";
          font-style: normal;
          margin: 0.25rem 1.25rem;
        }

        .footer-item:after {
          content: "";
          display: block;
          height: 3px;
          width: 0;
          background: transparent;
          transition: width 0.7s ease, background-color 0.5s ease;
        }

        .footer-item:hover:after {
          width: 100%;
          background: #ffdd40;
        }

        .footer-item.active {
          color: #05e8c2;
          text-align: center;
          border: 1px solid #ffdd40;
        }

        .footer-links {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
        }
        .footer-links:hover {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 130%;
          display: flex;
          align-items: center;
          color: #05e8c2;
          transition: 0.5s;
        }
        .social-icon {
          display: flex;
          margin: 2rem;
          justify-content: center;
        }
        .social-icon img {
          margin: 0 1rem;
        }
        .copyright {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 15px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}

export default Footer;
