/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  rotate: { rotate: [0, -30, 0], transition: { duration: 0.1 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 0.1 } },
};

const Earth = ({ rotate }) => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={styles.earth}
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 2.5 }}
        >
          <img src="/assets/image/earth.png" alt="earth" />
        </motion.div>
      </AnimatePresence>
      <style jsx>{`
            .earth {

            }
            
            .earth img {
              width: 100%;
            }

            @media screen and (max-width: 920px) {
             
            }

            @media screen and (max-width: 576px) {
              
            }

            @media screen and (max-width: 375px) {
             
              }
            }
          `}</style>
    </div>
  );
};

export default Earth;
