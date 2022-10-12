/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function InvestorCard({ cardTitle, cardDescription, handleClick }) {
  const [hover, setHover] = useState(false);
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="card-investor"
        whileHover={{
          position: "relative",
          scale: 1.2,
          transition: {
            duration: 0.2,
          },
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="card-image" onClick={handleClick}>
          <img className="image" src="/assets/image/staking1.png" alt="mogul" />
          <span className="card-text">
            <span className="card-title">Investor</span>
            <span className="card-description">
              Eu, hendrerit adipiscing pulvinar diam tincidunt ac amet eu. Nulla
              suspendisse dignissim arcu urna leo nunc bibendum
            </span>
            {hover ? (
              <div className="hover-view">
                <span className="hover-title">View more</span>

                <img
                  className="arrows"
                  src="/assets/image/Vector_white.png"
                  alt="banner"
                />

              </div>
            ) : (
              <></>
            )}
          </span>

        </div>

        <style jsx>{`
          .card-container {
            width: 466px;
            height: 100%;
            color: white;
            margin: 20px 20px;
          }
          .card-image {
            position: relative;
            width: 100%;
          }
          .image {
            width: 100%;
            height: 100%;
          }

          .card-text {
            position: absolute;
            // width: 401px;
            // height: 147px;
            left: 30px;
            top: 200px;

            display: flex;
            flex-direction: column;
            text-align: left;
          }

 					.card-image: hover .card-text {
            top: 200px;
					}

          .card-title {
            font-family: "Michroma";
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 57px;
            color: white;

            margin-bottom: 10px;
          }

          .card-description {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: rgba(255, 255, 255, 0.8);
          }

					.card-image:hover .card-title {
						font-size: 56px;
						line-height: 80px;
						color: #15C3F4;
					}

					.card-image:hover .card-description {
						font-size: 18px;
						line-height: 140%;
					}

          .card-container:hover,
          .card-container:focus,
          .card-container:active {
            color: #15c3f4;
            cursor: pointer;
          }

					.hover-view {
						display: flex;
						margin-top: 17px;
					}

					.hover-title {
						font-family: 'Inter';
						font-style: normal;
						font-weight: 700;
						font-size: 21px;
						line-height: 25px;

						color: #FFFFFF;
						padding-right: 20px;
					}
					
					.arrows{
            margin-left: 10px;
					}

          @media (max-width: 992px) {
            .card-container {
              margin: 30px;
            }

						.card-text {
							width: 410px;
							top: 180px;
						}
						.card-image: hover .card-text {
							top: 180px;
						}
						.card-title {
							font-weight: 400;
							font-size: 34px;
							line-height: 31px;
						}

						.card-description {
							font-weight: 400;
							font-size: 15px;
							line-height: 130%;
						}

						.card-image:hover .card-title {
							font-size: 50px;
							line-height: 80px;
							color: #15C3F4;
						}

						.card-image:hover .card-description {
								font-size: 17px;
								line-height: 140%;
							}
						}

          @media (max-width: 576px) {
            .card-container {
              width: 100%;
              margin: 10px;
            }

            .card-image {
              width: 100%;
            }

						.card-text {
							width: 70vw;
							top: 130px;
						}
						.card-image:hover .card-text {
							top: 130px;
						}

						.card-title {
							font-weight: 400;
							font-size: 28px;
							line-height: 31px;
						}

						.card-description {
							font-weight: 400;
							font-size: 15px;
							line-height: 130%;
						}

						.card-image:hover .card-title {
							font-size: 42px;
							line-height: 60px;
							color: #15C3F4;
						}

						.card-image:hover .card-description {
								font-size: 15px;
								line-height: 100%;
							}
          }
					 @media (max-width: 375px) {
            .card-container {
              width: 100%;
              margin: 10px;
            }

            .card-image {
              width: 100%;
            }

						.card-text {
							top: 100px;
							width: 250px;
						}
						
						.card-image:hover .card-text {
							top: 80px;
						}
						.card-title {
							font-weight: 400;
							font-size: 22px;
							line-height: 31px;
						}

						.card-description {
							font-weight: 400;
							font-size: 14px;
							line-height: 130%;
						}

						.card-image:hover .card-title {
							font-size: 38px;
							line-height: 40px;
							color: #15C3F4;
						}

						.card-image:hover .card-description {
								font-size: 16px;
								line-height: 100%;
							}
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}
export default InvestorCard;
