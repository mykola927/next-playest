import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import "../styles/table.css";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.span
        key={router.route}
        initial={{ y: "0%" }}
        style={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 2 }}
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "white",
            filter: `invert()`,
            opacity: 0,
          },
        }}
      >
        <motion.ul
          initial={{ "--rotate": "0deg" }}
          animate={{ "--rotate": "360deg" }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Component {...pageProps} />
        </motion.ul>
      </motion.span>
    </AnimatePresence>
  );
}

export default MyApp;
