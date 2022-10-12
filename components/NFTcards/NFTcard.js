/* eslint-disable @next/next/no-img-element */

export default function NFTcard({ cardData }) {
  return (
    <div className="">
      <div className="card">
        <div className="card-inside">
          <div>
            <img src={cardData.cardImg} alt={cardData.imgAlt1} />
          </div>
          <div className="cfooter flex justify-between">
            <div className="frame">
              <span className="frame-name">{cardData.frameName}</span>
              <div className="frame-square"></div>
              <span className="frame-ranking">{cardData.frameRanking}</span>
            </div>
            <div className="like">
              <img src={cardData.like} alt={cardData.imgAlt2} />
              <span className="like-count">{cardData.likeCnt}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          max-width: 289px;
          max-height: 338px;
          width: 100%;
          height: 338px;
          margin: 1rem auto;
          background: linear-gradient(to right, #6680ff, #14d8cb);
          border-radius: 8px;
          cursor: pointer;
          -webkit-clip-path: polygon(
            0 10%,
            12% 0%,
            100% 0%,
            100% 90%,
            88% 100%,
            0 100%,
            0 90%
          );
          clip-path: polygon(
            0 10%,
            12% 0%,
            100% 0%,
            100% 90%,
            88% 100%,
            0 100%,
            0 90%
          );
        }

        .card-inside {
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          background-color: #002733;
          padding: 20px;
          border-radius: 8px;
          // background: linear-gradient(120.5deg, rgba(102, 128, 255, 0.2) 2.71%, rgba(5, 232, 194, 0.2) 96.76%), #000000;
          -webkit-clip-path: polygon(
            0 10%,
            12% 0%,
            100% 0%,
            100% 90%,
            88% 100%,
            0 100%,
            0 90%
          );
          clip-path: polygon(
            0 10%,
            12% 0%,
            100% 0%,
            100% 90%,
            88% 100%,
            0 100%,
            0 90%
          );
        }
        .card-inside img {
          width: 100%;
        }
        .cfooter {
          margin-top: 1rem;
        }
        .frame {
          display: flex;
        }
        .frame-name {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          color: #15c3f4;
        }
        .frame-square {
          margin-top: 0.5rem;
          margin-left: 1rem;
          width: 6px;
          height: 6px;
          padding: 3px;
          transform: rotate(45deg);
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.4);
        }
        .frame-ranking {
          margin: 0.3rem 0.5rem 0;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: rgba(255, 255, 255, 0.8);
        }
        .like {
          display: flex;
          align-items: center;
        }
        .like-count {
          margin-left: 0.5rem;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: rgba(255, 255, 255, 0.8);
        }
        @media screen and (max-width: 1680px) {
          .card {
            width: 270px;
            height: 320px;
          }
        }
        @media screen and (max-width: 640px) {
          .card {
            width: 165px;
            height: 200px;
          }
          .card-inside {
            padding: 10px;
          }
          .cfooter {
            margin-top: 0.5rem;
          }
          .frame-name {
            font-size: 14px;
          }
          .frame-ranking {
            font-size: 10px;
          }
          .like-count {
            display: none;
          }
        }
        @media screen and (max-width: 397px) {
          .card {
            width: 260px;
            height: 310px;
          }
          .like-count {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
