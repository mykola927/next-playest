/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function IconBar() {
  return (
    <div className="iconbar">
      <div className="icons">
        <Link href="https://medium.com/">
          <img src="/assets/image/socialicons/medium.png" alt="medium" />
        </Link>
        <Link href="https://twitter.com/">
          <img src="/assets/image/socialicons/twitter.png" alt="twitter" />
        </Link>
        <Link href="https://telegram.com/">
          <img src="/assets/image/socialicons/telegram.png" alt="telegram" />
        </Link>
        <Link href="https://discord.com/">
          <img src="/assets/image/socialicons/discord.png" alt="discord" />
        </Link>
        <Link href="https://youtube.com/">
          <img src="/assets/image/socialicons/youtube.png" alt="youtube" />
        </Link>
        <Link href="https://linkedin.com/">
          <img src="/assets/image/socialicons/linkedin.png" alt="linkedin" />
        </Link>
      </div>
      <style jsx>{`
        .iconbar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .icons {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: fit-content;
          height: 50px;
          padding-right: 10px;
          padding-left: 10px;
        }
        .icons img {
          width: 30px;
          height: 30px;
          margin: 0.5rem;
          cursor: pointer;
        }
        @media screen and (max-width: 400px) {
          .icons img {
            margin: 0.2rem;
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
}
export default IconBar;
