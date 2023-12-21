import { Outlet } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "./Navbar";

const Root = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    top: "5rem",
  });
  return (
    <div className="">
      <NavBar></NavBar>
      <motion.div
        className="fixed top-18 left-0 right-0 h-2 bg-blueViolet origin-[0] z-[40]"
        style={{ scaleX }}
      />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
