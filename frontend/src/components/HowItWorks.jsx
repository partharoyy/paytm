const HowItWorks = () => (
  <section className='bg-gray-50 py-20'>
    <div className='max-w-7xl mx-auto px-10 text-center'>
      <h2 className='text-3xl font-extrabold text-green-900 mb-8'>How It Works</h2>
      <div className='flex flex-col md:flex-row justify-center gap-8'>
        <div className='p-6'>
          <h3 className='text-2xl font-bold text-green-800 mb-4 animate-fadeIn'>1. Sign Up</h3>
          <p className='text-gray-700'>Create an account in seconds and start sending or receiving payments.</p>
        </div>
        <div className='p-6'>
          <h3 className='text-2xl font-bold text-green-800 mb-4 animate-fadeIn delay-100'>2. Add Payment Methods</h3>
          <p className='text-gray-700'>Link your preferred bank accounts or cards securely.</p>
        </div>
        <div className='p-6'>
          <h3 className='text-2xl font-bold text-green-800 mb-4 animate-fadeIn delay-200'>3. Send & Receive</h3>
          <p className='text-gray-700'>Make or receive payments with ease, anytime, anywhere.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
