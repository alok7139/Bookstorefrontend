import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


function About() {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto py-8 px-4 mt-20">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-4">
            Welcome to Pageturn! We are dedicated to providing an immersive online reading experience for book lovers
            around the world. Our platform offers a vast collection of books spanning various genres, from classics
            to contemporary bestsellers.
          </p>
          <p className="text-lg mb-4">
            At Pageturn, we believe in the power of literature to inspire, educate, and entertain. Whether you're
            seeking an adventure in a far-off land, looking to delve into the mysteries of the universe, or simply
            hoping to escape into a captivating story, we have something for everyone.
          </p>
          <p className="text-lg mb-4">
            Our user-friendly interface allows you to easily navigate through our library, discover new titles, and
            customize your reading experience. With features such as bookmarking, personalized recommendations, and
            seamless syncing across devices, reading with Pageturn has never been more convenient.
          </p>
          <p className="text-lg mb-4">
            Join us on our mission to make reading accessible to all and embark on a literary journey like no other.
            Whether you're a seasoned bookworm or just discovering the joy of reading, Pageturn is here to accompany
            you every step of the way.
          </p>
        </div>
      </div>
       <Footer/>
    </div>
  );
}

export default About;
