/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import GameCard from "../components/gameCard/GameCard";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import styles from "../styles/Home.module.css";
import gamesDatas from "../lib/games.json";
import IconBar from "../components/iconBar/IconBar";
import Footer from "../components/footer/Footer";

import card_bigcity from "../public/assets/image/gamecard/card_bigcity.png";

export default function Collections() {
  const popular = "Popular";
  const newest = "Newest";
  const bestSellers = "Best Sellers";
  const explore = "Explore";
  const bigcity = "Big city";
  const [gamesCardData, setGamesCardData] = useState([]);

  useEffect(() => {
    setGamesCardData(gamesDatas);
  }, []);
  console.log("this is scalling", gamesCardData);
  return (
    <div>
      <main className="cyber-life">
        <div className="banner">
          <Header />

          <div className="bannertitle">
            <span className="subtitle">Explore</span>
            <span className="maintitle">Games for you</span>
          </div>
          <img className="enter" src="assets/image/enter1.png" alt="enter" />
        </div>
        <div className="container">
          <div>
            <div className="mb-8 px-4">
              <Title title={popular} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 sm:gap-2 md:gap-3 xl:gap-4 my-20">
              {gamesCardData.popularDatas
                ? gamesCardData.popularDatas.map((items, i) => (
                  <GameCard gameCard={items} key={`${items.imgAlt1}-${i}`} />
                ))
                : "Loading..."}
            </div>
          </div>
          <div>
            <div className="mb-8 px-4">
              <Title title={newest} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 sm:gap-2 md:gap-3 xl:gap-4 my-20">
              {gamesCardData.newestDatas
                ? gamesCardData.newestDatas.map((items, i) => (
                  <GameCard gameCard={items} key={`${items.imgAlt1}-${i}`} />
                ))
                : "Loading..."}
            </div>
          </div>
          <div>
            <div className="mb-8 px-4">
              <Title title={bestSellers} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 sm:gap-2 md:gap-3 xl:gap-4 my-20">
              {gamesCardData.bestSellerDatas
                ? gamesCardData.bestSellerDatas.map((items, i) => (
                  <GameCard gameCard={items} key={`${items.imgAlt1}-${i}`} />
                ))
                : "Loading..."}
            </div>
          </div>
          <div>
            <div className="mb-8 px-4">
              <Title title={explore} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 sm:gap-2 md:gap-3 xl:gap-4 my-20">
              {gamesCardData.exploreDatas
                ? gamesCardData.exploreDatas.map((items, i) => (
                  <GameCard gameCard={items} key={`${items.imgAlt1}-${i}`} />
                ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .headerStyle {
          margin: 0 auto;
          list-style: none;
        }
        .cyber-life {
          color: white;
          background: linear-gradient(
              120.5deg,
              rgba(102, 128, 255, 0.2) 2.71%,
              rgba(5, 232, 194, 0.2) 96.76%
            ),
            #000000;
          // margin: -100px 0px;
          // padding-bottom: 300px;
        }
        .banner {
          position: relative;
          background: url("/assets/image/cyberlife/bg.png") center center;
          // background: url("/assets/image/gamebanner.png") center center;
          background-repeat: no-repeat;
          // background-attachment: fixed;
          background-size: cover;
          height: 399px;
          max-height: 399px;
        }
        .bannertitle {
          position: absolute;
          display: flex;
          flex-direction: column;
          left: 130px;
          bottom: 100px;
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

          /* Gradient/Main */

          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }

        .enter {
          position: absolute;
          right: 0;
          bottom: -100px;
          z-index: 1;
          width: 441px;
          height: 359px;
        }
        .container {
          display: flex;
          flex-direction: column;
          margin: 100px auto;
          box-sizing: border-box;
          width: 100%;
        }
        @media screen and (max-width: 920px) {
          .banner {
            width: 100%;
          }
          .container {
            padding: 0 20px;
          }
          .enter {
            display: none;
          }
        }
        @media screen and (max-width: 576px) {
          .cyber-life {
            width: 100%;
          }
          .banner {
            width: 100% !important;
          }
          .enter {
            display: none;
          }

          .bannertitle {
            position: absolute;
            display: flex;
            flex-direction: column;
            left: 21px;
            bottom: 100px;
          }

          .subtitle {
            font-size: 18px;
          }
          .maintitle {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
