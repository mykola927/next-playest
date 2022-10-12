/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import Header from "../components/header/Header";
import Link from "next/link";
import LeaderTable from "../components/leaderBoard/LeaderTable";
import InvestorCollection from "../components/investorCollection/InvestorCollection";
import Footer from "../components/footer/Footer";

export default function CyberLife() {
  return (
    <div className="">
      <main className="cyber-life">
        <div className="banner">
          <Header />
          <div className="bannertitle">
            <span className="maintitle">Mogul</span>
            <div className="flex flex-row">
              <button className="playnowBtn">Play now</button>
              <button className="readruleBtn">Read Rules</button>
            </div>
            <div className="comments">
              <div className="comment1">
                <span className="text-gray-400">by</span>{" "}
                <Link href="/">Open Portal Studios</Link>
              </div>
              <p className="comment2">
                An NFT-based first-person shooter built on the SOLANA
                Blockchain.
              </p>
            </div>
          </div>
          <img
            className="enter"
            src="assets/image/leaderboard/qinlun-huang.png"
            alt="enter"
          />
        </div>
        <div className="p-8 lg:p-8 xl:p-16 2xl:p-20">
          <div className="summary py-12">
            <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center">
              <div className="basis-full lg:basis-1/3 px-4">
                <div>
                  <div className="pt-8">
                    <h1>
                      <span className="mr-4">
                        <img
                          src="/assets/image/leaderboard/medal-star.png"
                          alt="info-circle"
                        />
                      </span>
                      Prize
                    </h1>
                  </div>
                  <div className="description mt-8">
                    <p className="text-justify">
                      20,000 $MODS, Founders Passes, PFPs and CQC Weapons, and
                      Allowlist Tokens for Melee Mint
                    </p>
                  </div>
                </div>
                <div>
                  <div className="pt-8">
                    <h1>
                      <span className="mr-4">
                        <img
                          src="/assets/image/leaderboard/calendar.png"
                          alt="info-circle"
                        />
                      </span>
                      Tournament Dates
                    </h1>
                  </div>
                  <div className="description mt-8">
                    <p className="text-justify">
                      August 29, 8:00 PM - August 31, 8:00 AM
                    </p>
                  </div>
                </div>
                <div>
                  <div className="pt-8">
                    <h1>
                      <span className="mr-4">
                        <img
                          src="/assets/image/leaderboard/note.png"
                          alt="info-circle"
                        />
                      </span>
                      Description
                    </h1>
                  </div>
                  <div className="description mt-8">
                    <p className="text-justify">
                      Fresh rounds, cash buys, and infinite waves of AI enemies.
                      How long can you survive? Gain points for pro plays and
                      kills. 36 hours only.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-full lg:basis-2/3 px-4 overflow-x-auto space-x-8">
                <div className="pt-8">
                  <div className="w-full">
                    <LeaderTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        .banner {
          position: relative;
          background: url("/assets/image/leaderboard/bg.png") center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 507px;
          max-height: 507px;
          z-index: 0;
        }
        .bannertitle {
          position: absolute;
          display: flex;
          flex-direction: column;
          left: 130px;
          bottom: 40px;
          z-index: -2;
        }
        .readruleBtn {
          filter: drop-shadow(0px 0px 16px rgba(102, 128, 255, 0.5))
            drop-shadow(0px 0px 12px rgba(21, 195, 244, 0.5));
          border: solid 2px #6680ff;
          border-radius: 10px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          margin: 1rem;
          padding: 12px 23px;
          gap: 8px;
        }
        .playnowBtn {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          margin: 1rem;
          padding: 12px 23px;
          gap: 8px;
          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
          box-shadow: 0px 0px 16px rgba(102, 128, 255, 0.5),
            0px 0px 12px rgba(21, 195, 244, 0.5);
          border-radius: 10px;
        }
        .comment1 {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 15px;
          margin-top: 1.5rem;
        }
        .comment2 {
          margin-top: 0.5rem;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
        }
        .maintitle {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 56px;
          line-height: 80px;
          color: #ffffff;
        }
        .enter {
          position: absolute;
          right: 10%;
          bottom: -90px;
          height: 395px;
          z-index: -3;
        }

        .summary {
          height: fit-content;
        }
        .summary h1 {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 51px;
          display: flex;
          align-items: center;
          color: #ffffff;
        }
        .description {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
          color: #9ea7ac;
        }

        @media screen and (max-width: 1142px) {
          .fix-image {
            width: 100%;
          }
          .comment2 {
            width: 60%;
          }
        }
        @media screen and (max-width: 920px) {
          .fix-image {
            width: 100%;
          }
          .enter {
            display: none;
          }
          .comment2 {
            width: 90%;
          }
        }
        @media screen and (max-width: 768px) {
          .banner {
            height: 360px;
          }
          .fix-image {
            width: 100%;
          }
          .bannertitle {
            left: 50px;
            bottom: 80px;
          }
          .maintitle {
            font-size: 40px;
          }
          .comments {
            display: none;
          }
        }
        @media screen and (max-width: 400px) {
          .banner {
            height: 300px;
          }
          .bannertitle {
            left: 30px;
            bottom: 20px;
          }
          .maintitle {
            font-size: 30px;
          }
          .summary h1 {
            font-size: 24px;
          }
        }
        @media screen and (max-width: 300px) {
          .bannertitle {
            left: 20px;
            bottom: 20px;
          }
          .readruleBtn {
            margin: 1rem 0.5rem;
            padding: 8px 8px;
            gap: 0px;
          }
          .playnowBtn {
            margin: 1rem 0.5rem;
            padding: 8px 8px;
            gap: 0px;
          }
        }
      `}</style>
    </div>
  );
}
