import { motion } from 'framer-motion'; // Import motion from framer-motion
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation
import BannerImage from '../assets/banner.png';
import Cricle from"../assets/Group.png"
function Banner() {
  return (
    <div>
      <div className="hero bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img

className='md:w-28 w-16 md:mb-52'

src={Cricle}

alt=""

initial={{ x: 0 }} // Starting position

animate={{ x: [0, 50, 0] }} // Move down to 50px and back to original position

transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }} // Animation settings

/>
          <motion.img
            src={BannerImage}
            style={{ width: '100%', height: 'auto' }} // Set width and height
         initial={{ y: 0 }} // Starting position

animate={{ y: [0, 50, 0] }} // Move down to 50px and back to original position

transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }} // Animation settings
          />
        
          <div>
            <motion.h1
              className="text-5xl font-bold"
              initial={{ y: -50, opacity: 0 }} // Initial state
              animate={{ y: 0, opacity: 1 }} // Animate to this state
              transition={{ type: 'spring', stiffness: 100, damping: 10 }} // Spring transition
            >
              <TypeAnimation
                sequence={[
                  'Job Portal Office News!', // First string to display
                  2000, // Wait 2s
                  'Latest Movie Releases!', // Second string to display
                  2000, // Wait 2s
                  () => {
                    console.log('Done typing!'); // Callback function
                  },
                ]}
                wrapper="span" // Use a span for the wrapper
                cursor={true} // Show cursor
                repeat={Infinity} // Repeat the animation
              />
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

            <button
              
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;