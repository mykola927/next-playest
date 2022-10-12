/* eslint-disable @next/next/no-img-element */
import React from "react";
import LoadingBar from "../loadingBar/LoadingBar";
import ProgressBar from "../progressBar/ProgressBar";

function StatusBars() {
  return (
    <div className="flex flex-row flex-wrap">
      <div className="basis-full lg:basis-1/3 p-4">
        <div className="max-w-screen-sm mx-auto">
          <div className="slider">
            <div className="flex flex-wrap sm:flex-nowrap justify-between">
              <span className="loading-title">Achievement</span>
              <span className="loading-status mt-3 sm:mt-0">51/57</span>
            </div>
            <div className="mt-4">
              <LoadingBar
                loading={51}
                total={57}
                loadingcolor="#05E8C2"
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-full lg:basis-1/3 p-4">
        <div className="max-w-screen-sm mx-auto">
          <div className="downloading">
            <div className="flex flex-wrap sm:flex-nowrap justify-between">
              <span className="down-title">Downloading</span>
              <span className="down-status mt-3 sm:mt-0">27MB / 100MB</span>
            </div>
            <div className="mt-4">
              <ProgressBar bgcolor="#6680FF" progress="27" height={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-full lg:basis-1/3 p-4">
        <div className="balance max-w-screen-sm mx-auto">
          <h3 className="balance-title">Balance</h3>
          <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
            <div>
              <div className="flex justify-between items-center">
                <img src="/assets/image/cyberlife/SOL.png" alt="button1" />
                <span className="balance-amount">342.2456 SOL</span>
              </div>
            </div>
            <div className="flex flex-row mt-3 sm:mt-0">
              <img
                src="/assets/image/cyberlife/Button1.png"
                alt="button1"
                className="mx-1"
              />
              <img
                src="/assets/image/cyberlife/Button2.png"
                alt="button2"
                className="mx-1"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .slider {
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            rgba(20, 216, 203, 0.1);
          border-width: 1px;
          border-style: solid;
          border-image: linear-gradient(to right, #14d8cb, #6680ff) 1;
          padding: 1.875rem 1.25rem;
        }
        .downloading {
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            rgba(20, 216, 203, 0.1);
          border-width: 1px;
          border-style: solid;
          border-image: linear-gradient(to right, #14d8cb, #6680ff) 1;
          padding: 1.875rem 1.25rem;
        }
        .down-title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          display: flex;
          align-items: center;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.8);
        }
        .down-status {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 130%;
          display: flex;
          align-items: center;
          text-transform: uppercase;
          color: #ffffff;
        }
        .loading-title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          display: flex;
          align-items: center;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.8);
        }
        .loading-status {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 130%;
          display: flex;
          align-items: center;
          text-transform: uppercase;
          color: #ffffff;
        }
        .balance {
          border-width: 1px;
          border-style: solid;
          border-image: linear-gradient(to right, #14d8cb, #6680ff) 1;
          padding: 1.875rem 1.25rem;
          background: linear-gradient(
            90deg,
            rgba(5, 232, 194, 0.2) 0%,
            rgba(10, 46, 50, 0) 100%
          );
        }
        balance-title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          align-items: center;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.8);
        }
        .balance-amount {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 26px;
          line-height: 140%;
          margin-left: 0.25rem;
          display: flex;
          align-items: center;
          color: #ffffff;
        }
        .balance img {
          width: 40px;
          height: 40px;
        }
        @media screen and (max-width: 1300px) {
          .balance-amount {
            font-size: 18px;
          }
        }
        @media screen and (max-width: 1160px) {
          .balance-amount {
            font-size: 14px;
          }
        }
        @media screen and (max-width: 400px) {
          .balance img {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </div>
  );
}
export default StatusBars;
