import React from "react";
import { easeOut, motion } from "framer-motion";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 hidden md:block">
          <motion.img
            src={team1}
            animate={{ y: [20, 50, 20] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 rounded-lg shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 130, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-2xl md:text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#4484e6", "#669e8e", "#ff6133"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Discover exciting job opportunities that match your skills and
            passions. Our platform connects you with top employers who are
            looking for talent just like yours. Whether you're searching for
            your first job or advancing in your career, we provide the resources
            and support you need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
