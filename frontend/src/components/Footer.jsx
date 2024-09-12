const Footer = () => (
  <footer className='bg-green-900 py-10 text-white text-center'>
    <div className='max-w-7xl mx-auto px-10'>
      <p className='mb-4'>© {new Date().getFullYear()} QuickPay. All rights reserved.</p>
      <div className='space-x-4'>
        <a href='/privacy' className='hover:underline'>
          Privacy Policy
        </a>
        <a href='/terms' className='hover:underline'>
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
