import { Link } from "react-router-dom";

const CTA = () => (
  <section className='bg-green-600 py-20 text-center text-white'>
    <div className='max-w-7xl mx-auto'>
      <h2 className='text-4xl font-extrabold mb-6'>Ready to Get Started?</h2>
      <p className='text-lg mb-8'>Sign up now and enjoy the fastest way to handle your payments.</p>
      <Link to='/signup'>
        <button className='px-8 py-4 bg-white text-green-600 rounded-md font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse'>
          Create Your Free Account
        </button>
      </Link>
    </div>
  </section>
);

export default CTA;
