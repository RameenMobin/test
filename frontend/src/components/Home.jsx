import React from 'react';
import peergiglogo from '../peergiglogo.png'; // Adjust if needed
import gigVideo from '../assets/team.mp4'; // Replace with your video file path

function Home() {
  return (
    <div>
      {/* First Section (Unchanged) */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 transition-colors duration-300"
      >
        {/* 🐝 Logo with animation */}
        <img
          src={peergiglogo}
          alt="Peergig Logo"
          className="w-64 md:w-96 h-auto mb-6 p-4 animate-logoEntrance"
        />

        {/* Heading with smooth fade-in animation */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 animate-fadeIn">
          Welcome to <span className="text-gray-600 dark:text-gray-200">PeerGig</span>
        </h1>

        {/* Subheading with smooth slide-up animation */}
        <p className="mt-4 max-w-xl text-lg text-gray-700 dark:text-gray-300 animate-slideUp">
          A freelance network where students hire students. No middlemen. No BS.
        </p>

        {/* Call-to-action button with smooth hover effect */}
        <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-gray-700 rounded-full shadow-md hover:bg-gray-800 transition duration-300">
          Get Started
        </button>
      </section>

      {/* New Section: CREATE YOUR OWN GIGS */}
      <section
        id="create-gigs"
        className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:from-gray-700 dark:via-gray-800 dark:to-gray-600 py-20 px-4 pt-36 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column (Text) */}
            <div className="flex flex-col justify-center items-start space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white animate-fadeIn text-left">
              Match Made in Heaven...
            </h2>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 animate-fadeIn text-left">
              Find your perfect match!
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-slideUp text-left">
              Get other students to do the work for you. Post your gigs and hire student talent without any hassle. 
            </p>
            {/* <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              Start Posting
            </button> */}
          </div>


            {/* Right Column (Video with animation) */}
            <div className="flex justify-center items-center">
              <video
                src={gigVideo}
                alt="Gig Video"
                className="w-35 md:w-50 lg:w-60 h-auto rounded-lg shadow-lg transition-transform duration-1000 ease-in-out transform hover:scale-110 animate-fadeInUp"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
