const Testimonials = () => (
  <section className='bg-white py-20'>
    <div className='max-w-7xl mx-auto px-10 text-center'>
      <h2 className='text-3xl font-extrabold text-green-900 mb-8'>What Users Are Saying</h2>
      <div className='flex flex-col md:flex-row justify-center gap-8 animate-slideIn'>
        <div className='p-6 shadow-lg rounded-lg bg-green-50'>
          <p className='text-gray-700 italic'>
            "QuickPay transformed how I manage my business. Transactions are lightning fast!"
          </p>
          <h4 className='mt-4 font-bold'>— Alice B., Entrepreneur</h4>
        </div>
        <div className='p-6 shadow-lg rounded-lg bg-green-50'>
          <p className='text-gray-700 italic'>
            "The user interface is sleek, and I love the transparency. No surprises with fees."
          </p>
          <h4 className='mt-4 font-bold'>— Mark P., Freelancer</h4>
        </div>
        <div className='p-6 shadow-lg rounded-lg bg-green-50'>
          <p className='text-gray-700 italic'>
            "Payments are processed instantly. It’s a game changer for my consulting business."
          </p>
          <h4 className='mt-4 font-bold'>— Sarah L., Consultant</h4>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
