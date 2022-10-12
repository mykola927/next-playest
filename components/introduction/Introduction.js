/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Introduction() {
  const [hidden, setHidden] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="titlebar">
          <p className="description">Explore</p>
          <h1 className="title">Your Collections</h1>
          <style jsx>{`
            .titlebar {
              display: flex;
              flex-direction: column;
              width: 100%;
              // height: 65px;
              text-align: center;
              align-items: center;
            }

            .description {
              font-family: "Michroma";
              font-style: normal;
              font-weight: 400;
              font-size: 36px;
              line-height: 51px;
              align-items: center;
              color: rgba(255, 255, 255, 0.9);
            }

            .title {
              font-family: "Michroma";
              font-style: normal;
              font-weight: 400;
              font-size: 70px;
              line-height: 75px;
              background: linear-gradient(
                120.5deg,
                #6680ff 2.71%,
                #05e8c2 96.76%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;

              padding: 20px 0;
            }

            .title a {
              color: #0070f3;
              text-decoration: none;
            }

            .title a:hover,
            .title a:focus,
            .title a:active {
              text-decoration: underline;
            }

            .title,
            .description {
              text-align: center;
            }

            @media screen and (max-width: 920px) {
              .titlebar {
                min-width: 100%;
              }
              .description {
                font-size: 36px;
                line-height: 51px;
              }

              .title {
                font-size: 70px;
                line-height: 75px;

                padding: 20px 0;
              }
            }

             @media screen and (max-width: 762px) {
              .description {
                font-size: 30px;
                line-height: 26px;
              }

              .title {
                font-size: 52px;
                line-height: 46px;

                padding: 20px 0;
              }
            }

            @media screen and (max-width: 576px) {
              .description {
                font-size: 24px;
                line-height: 26px;
              }

              .title {
                font-size: 35px;
                line-height: 46px;

                padding: 20px 0;
              }
            }

            @media screen and (max-width: 375px) {
              .description {
                font-size: 18px;
                line-height: 26px;
              }

              .title {
                width: 333px;
                font-size: 32px;
                font-weight: 400;
                line-height: 46px;

                padding: 20px 0;
              }
            }
          `}</style>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default Introduction;
