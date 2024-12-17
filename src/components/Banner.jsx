
import { motion } from 'framer-motion'; // Import motion from framer-motion
import BannerImage from '../assets/banner.png';

function Banner() {
  return (
    <div>
      <div className="hero bg-base-200 lg:max-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            src={BannerImage}
            className=""
            initial={{ opacity: 0, x: 100 }} // Initial state
            animate={{ opacity: 1, x: 0 }} // Animate to this state
            transition={{ type: 'spring', stiffness: 100, damping: 10 }} // Spring transition
          />
          <div>
            <motion.h1
              className="text-5xl font-bold"
              initial={{ y: -50, opacity: 0 }} // Initial state
              animate={{ y: 0, opacity: 1 }} // Animate to this state
              transition={{ type: 'spring', stiffness: 100, damping: 10 }} // Spring transition
            >
              Box Office News!
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;