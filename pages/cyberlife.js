/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import NFTcard from "../components/NFTcards/NFTcard";
import cardDatas from "../lib/cyberLife.json";
import GameCard from "../components/gameCard/GameCard";
import Accordion from "../components/accordian/Accordian";
import DepositeModal from "../components/depositeModal/DepositeModal";
import Footer from "../components/footer/Footer";
import WithdrawModal from "../components/withdrawModal/WithdrawModal";
import ProgressBar from "../components/progressBar/ProgressBar";
import LoadingBar from "../components/loadingBar/LoadingBar";
import Summary from "../components/cyberlife/Summary";
import StatusBars from "../components/cyberlife/StatusBars";

export default function CyberLife() {
  const moreTitle = "Similar games";
  const [nftCardData, setCardData] = useState([]);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openWithdraw, setOpenWithdraw] = useState(false);

  useEffect(() => {
    setCardData(cardDatas);
  }, []);

  const openDepositModal = () => {
    setOpenDeposit(true);
  };
  const changeOpenDeposit = () => {
    setOpenDeposit(false);
  };
  const openWithdrawModal = () => {
    setOpenWithdraw(true);
  };
  const changeOpenWithdraw = () => {
    setOpenWithdraw(false);
  };
  return (
    <div className="">
      <main className="cyber-life">
        <div className="banner">
          <Header />
          <div className="hidden md:block"></div>
          <div className="bannertitle">
            <div className="flex">
              <button className="actionBtn">ACTION</button>
              <img src="/assets/image/game.png" alt="banner" className="mr-2" />
              <img src="/assets/image/video-play.png" alt="banner" />
            </div>
            <span className="maintitle">Cyber life 3</span>
            <div>
              <button className="playnowBtn">Play now</button>
            </div>
          </div>
          <img className="enter" src="assets/image/enter.png" alt="enter" />
        </div>
        <div className="cyberlife-main p-4 sm:p-8 md:p-24 lg:p-8 xl:p-16 2xl:p-20 mt-8">
          <StatusBars />
          <Summary />
          <div className="flex justify-between flex-wrap items-center px-4">
            <div className="flex items-center my-4">
              <span>
                <img src="/assets/image/cyberlife/nft.png" alt="nft" />
              </span>
              <span className="nft-title ml-4">NFT</span>
            </div>
            <div className="w-full sm:w-auto text-center sm:text-right my-4">
              <input className="nft-search" placeholder="Search" />
            </div>
          </div>
          <div className="mt-8">
            <div className="nft-cards grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 sm:gap-2 md:gap-3 xl:gap-4">
              {nftCardData.cardDatas
                ? nftCardData.cardDatas.map((items, i) => (
                    <div
                      onClick={openDepositModal}
                      key={`${items.imgAlt1}-${i}`}
                    >
                      <NFTcard cardData={items} />
                    </div>
                  ))
                : "Loading..."}
            </div>
            <div>
              <div className="my-8">
                <Title title={moreTitle} />
              </div>
              <div className="game-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 sm:gap-2 md:gap-3 xl:gap-4">
                {nftCardData.similarGames
                  ? nftCardData.similarGames.map((items, i) => (
                      <div
                        key={`${items.gImgAlt1}-${i}`}
                        onClick={openWithdrawModal}
                        className="flex justify-center"
                      >
                        <GameCard gameCard={items} />
                      </div>
                    ))
                  : "Loading..."}
              </div>
            </div>
          </div>
          <DepositeModal
            bool={openDeposit}
            changeOpenDeposit={() => changeOpenDeposit()}
          />
          <WithdrawModal
            bool={openWithdraw}
            changeOpenWithdraw={() => changeOpenWithdraw()}
          />
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .cyber-life {
          color: white;
          background: linear-gradient(
              120.5deg,
              rgba(102, 128, 255, 0.2) 2.71%,
              rgba(5, 232, 194, 0.2) 96.76%
            ),
            #000000;
        }
        .cyberlife-main {
          max-width: 1920px;
          margin: auto;
        }
        .banner {
          position: relative;
          background: url("/assets/image/cyberlife/bg.png") center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 399px;
          max-height: 399px;
          z-index: 0;
        }
        .bannertitle {
          position: absolute;
          display: flex;
          flex-direction: column;
          left: 130px;
          bottom: 100px;
          z-index: -2;
        }
        .actionBtn {
          background: #6680ff;
          padding: 4px 10px;
          border-radius: 10px;
          margin-right: 20px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
        .playnowBtn {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          margin-top: 20px;
          padding: 12px 23px;
          gap: 8px;
          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
          box-shadow: 0px 0px 16px rgba(102, 128, 255, 0.5),
            0px 0px 12px rgba(21, 195, 244, 0.5);
          border-radius: 10px;
        }
        .subtitle {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 31px;
          display: flex;
          align-items: center;

          color: rgba(255, 255, 255, 0.9);
        }

        .maintitle {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 1000;
          font-size: 56px;
          line-height: 80px;
          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .enter {
          position: absolute;
          right: 0;
          bottom: -90px;
          height: 419px;
          z-index: -2;
        }
        .nft-title {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 51px;
          color: #ffffff;
        }
        .nft-search {
          background: url("/assets/image/cyberlife/search-normal.png") no-repeat
            right;
          background-size: 24px;
          width: 300px;
          height: 40px;
          border-radius: 8px;
          padding: 0 26px 0 10px;
          border-width: 2px;
          border-style: solid;
          border-image: linear-gradient(to right, #6680ff, #14d8cb) 1;
        }
        @media screen and (max-width: 1160px) {
          .fix-image {
            width: 100%;
          }
        }
        @media screen and (max-width: 920px) {
          .fix-image {
            width: 100%;
          }
          .game-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media screen and (max-width: 768px) {
          .fix-image {
            width: 100%;
          }
          .enter {
            display: none;
          }
          .bannertitle {
            left: 80px;
            bottom: 80px;
          }
          .maintitle {
            font-size: 40px;
          }
          .game-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        @media screen and (max-width: 400px) {
          .banner {
            height: 300px;
          }
          .bannertitle {
            left: 40px;
            bottom: 20px;
          }
          .maintitle {
            font-size: 30px;
          }
          .nft-title {
            font-size: 22px;
          }
          .nft-search {
            width: 100%;
          }
          .nft-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .game-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
