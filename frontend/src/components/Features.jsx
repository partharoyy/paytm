import { FaLock, FaDollarSign, FaChartLine } from "react-icons/fa";

const Features = () => (
  <section className='bg-white py-20'>
    <div className='max-w-7xl mx-auto px-10 text-center'>
      <h2 className='text-3xl font-extrabold text-green-900 mb-8'>Why QuickPay?</h2>
      <div className='flex flex-col md:flex-row justify-center gap-8'>
        <div className='p-6 shadow-lg rounded-lg bg-green-50 hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-slideUp'>
          <FaLock className='text-green-600 text-4xl mb-4' />
          <h3 className='text-2xl font-bold mb-4'>Fast & Secure</h3>
          <p className='text-gray-700'>Send and receive payments in seconds with enterprise-level encryption.</p>
        </div>
        <div className='p-6 shadow-lg rounded-lg bg-green-50 hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-slideUp delay-100'>
          <FaDollarSign className='text-green-600 text-4xl mb-4' />
          <h3 className='text-2xl font-bold mb-4'>No Hidden Fees</h3>
          <p className='text-gray-700'>Transparent pricing without any hidden fees or extra charges.</p>
        </div>
        <div className='p-6 shadow-lg rounded-lg bg-green-50 hover:shadow-2xl transition-shadow duration-300 ease-in-out animate-slideUp delay-200'>
          <FaChartLine className='text-green-600 text-4xl mb-4' />
          <h3 className='text-2xl font-bold mb-4'>Real-Time Tracking</h3>
          <p className='text-gray-700'>Stay informed with real-time transaction tracking and reporting.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
