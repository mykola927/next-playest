/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";

function GameCard({ gameCard }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card-container"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="card-image">
        <img className="image" src={gameCard.cardImg} alt={gameCard.imgAlt1} />
      </div>
      <div className="btn-group">
        <button className="btnStyle">
          <span className="action">ACTION</span>
        </button>
        <div className="icon-button">
          <img src="/assets/image/game.png" alt="banner" />
          <img src="/assets/image/video-play.png" alt="banner" />
        </div>
      </div>
      <div className="game-control">
        <span className="game-title">{gameCard.gameTitle}</span>
        {hover ? (
          <img
            className="arrows"
            src="/assets/image/vector-horizontal.png"
            alt="banner"
          />
        ) : (
          <></>
        )}
      </div>

      <style jsx>{`
       .card-container {
          position: relative;
          width: 100%;
          height: 100%;
          color: white;
        }
        .card-image {
          width: 100%;
          margin: 1rem auto;
        }
        .image {
          width: 100%;
          height: 100%;
        }

        .btn-group {
          display: flex;
          justify-content: space-between;
          padding-top: 17px;
        }

        .btnStyle {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 4px 10px;
          gap: 10px;
          width: 67px;
          height: 23px;
          background: #15c3f4;
          border-radius: 5px;
        }

        .action {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          text-transform: uppercase;
          color: #ffffff;
        }

        .icon-button {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          gap: 10px;
          width: 58px;
          height: 24px;
          flex: none;
          order: 1;
          flex-grow: 0;
        }
        .game-control {
          display: flex;
          justify-content: space-between;
          margin-top: 17px;
        }
        .game-title {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 31px;
        }
        .arrows {
          display: block;
        }

        .card-container:hover,
        .card-container:focus,
        .card-container:active {
          color: #15c3f4;
          cursor: pointer;
        }
        @media screen and (max-width: 450px) {
          .card-container {
            width: 100%;
          }
          .card-image {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
export default GameCard;
