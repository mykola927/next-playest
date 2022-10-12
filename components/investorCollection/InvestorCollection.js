import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvestorCollection() {
  return (
    <AnimatePresence>
      <motion.div className="w-full"
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="investor">
          <div className="w-full flex flex-wrap justify-around lg:justify-between items-center">
            <div className="title mx-2 md: m-0">Investor Collection</div>
            <div className="relative my-3 lg:my-2 md:my-1">
              <span className="collectiontitle">Collection:</span>
              <select>
                <option>Mogul</option>
                <option>Investor</option>
              </select>
            </div>
          </div>
        </div>
        <style jsx>{`
        .investor {
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            rgba(20, 216, 203, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid #28eeee;
          border-radius: 5px;
          padding: 0.5rem 3rem;
          width: 100%;
        }
        .title {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 37px;
          color: rgba(255, 255, 255, 0.9);
        }
        .investor select {
          width: 300px;
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            rgba(20, 216, 203, 0.1);
          border: solid 1px #6680ff;
          border-radius: 5px;
          padding: 0.75rem 1rem 0.75rem 6rem;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: rgba(255, 255, 255, 0.8);
        }
        .investor select option {
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            rgba(20, 216, 203, 0.1);
          backdrop-filter: blur(20px);
          // background-color: #14d8cb;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 18px;
          border-radius: 5px;
        }
        .collectiontitle {
          position: absolute;
          top: 0.6rem;
          left: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 992px) {
          .investor {
            margin: 10px;
            padding: 20px;
          }
          .title {
            font-weight: 400;
            font-size: 22px;
            line-height: 31px;

            color: rgba(255, 255, 255, 0.9);
          }
         }
        @media (max-width: 576px) {
          .investor {
            margin: 10px;
            padding: 20px;
          }
          .title {
            font-weight: 400;
            font-size: 22px;
            line-height: 31px;

            color: rgba(255, 255, 255, 0.9);
          }
         }
         @media (max-width: 375px) {
          .investor {
            margin: 10px;
            padding: 20px;
          }
          .title {
            font-weight: 400;
            font-size: 22px;
            line-height: 31px;

            color: rgba(255, 255, 255, 0.9);
          }
         }
      `}</style>
      </motion.div>
    </AnimatePresence>

  );
}
