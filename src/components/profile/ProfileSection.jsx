import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";

import profileImage from "./profile.jpg"; 
import coffee from "./coffe_new.png";

const ProfileSection = () => {
  return (
    <motion.div
      className="flex flex-col items-center p-8 rounded-2xl"
      style={{ color: '#fff8eb' }}
    >
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Info Section */}
      <div className="text-center space-y-2 mb-8">
        <p className="text-lg font-medium">5th Year Software Engineering Student</p>
        <p className="text-sm font-light">Age: 21</p>
        <p className="text-sm font-light">Pursuing Marketing Management Degree</p>
        <p className="text-sm font-light">CGPA: 3.6</p>
      </div>

      {/* Coffee Invite Section */}
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="text-center">
          <h3 className={`${styles.sectionHeadText} mb-3`}>Call me and let's have coffee!</h3>
          <p className="text-sm">+251904161978</p>
        </div>

        {/* Coffee Image */}
        <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
          <img src={coffee} alt="Coffee" className="w-full h-full object-cover" />
        </div>
      </div>

    </motion.div>
  );
};

export default ProfileSection;
