import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import AnimatedButton from './AnimatedButton';

const navigation = {
  solutions: [
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'PPC Advertising', href: '/services/ppc-advertising' },
    { name: 'Social Media', href: '/services/social-media-marketing' },
    { name: 'Content Marketing', href: '/services/content-marketing' },
    { name: 'Email Marketing', href: '/services/email-marketing' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Contact Us', href: '/contact' },
  ],
  social: [
    // {
    //   name: 'Facebook',
    //   href: 'https://facebook.com',
    //   icon: Facebook,
    // },
    // {
    //   name: 'Twitter',
    //   href: 'https://twitter.com',
    //   icon: Twitter,
    // },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/runrly?igsh=MTVoOXpxMDFkOXJ1Zg%3D%3D&utm_source=qr',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/runrly1/',
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter subscription
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#000] px-4 sm:px-[90px] pt-[50px] sm:pt-[95px] pb-0" aria-labelledby="footer-heading">
      <div className="mx-4 sm:mx-[200px] flex items-center justify-center flex-col">
        <h2 className="text-[#FFF] text-center text-[32px] sm:text-[54px] font-[500] leading-[40px] sm:leading-[60px]">
          Break free from traditional agencies & freelancers
        </h2>
        <p className="mt-4 sm:mt-8 text-[#919191] text-center text-[16px] sm:text-[20px] font-normal leading-[24px] sm:leading-[32px]">
          Frustrated by slow agencies and rigid contracts? Runrly is built differently— fast, transparent, and growth-focused. Fill out a quick form, and we'll deliver a tailored plan in 3 days to accelerate your startup's growth.
        </p>
          <AnimatedButton onClick={() => window.location.href = '/register'} className="rounded-[8px] bg-[#E0FF82] px-6 sm:px-8 py-[10px] text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-medium leading-[22px] sm:leading-[26px] mt-6 sm:mt-8">
            Get Started Now
          </AnimatedButton>
      </div>
      <div className="w-full border-t border-gray-700 mt-8 sm:mt-12"></div>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8 pb-0">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 sm:space-y-8 xl:col-span-1">
            <Logo size="small" variant="footer"/>
            <p className="text-[#919191] text-[12px] sm:text-[13px] font-normal leading-[18px] sm:leading-[20px]">
              Making marketing simple and scalable for businesses worldwide. Your success is our mission.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#FFF] font-['Onest'] text-[16px] font-semibold leading-[32px] tracking-wider uppercase">
                  Solutions
                </h4>
                <ul className="mt-4 space-y-2">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px] hover:text-gray-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 sm:mt-0">
                <h4 className="text-[#FFF] font-['Onest'] text-[16px] font-semibold leading-[32px] tracking-wider uppercase">
                  Company
                </h4>
                <ul className="mt-4 space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px] hover:text-gray-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#FFF] font-['Onest'] text-[16px] font-semibold leading-[32px] tracking-wider uppercase">
                  Support
                </h4>
                <ul className="mt-4 space-y-2">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px] hover:text-gray-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 sm:mt-0">
                <h4 className="text-[#FFF] text-[14px] font-semibold leading-[32px] tracking-wider uppercase">
                  Subscribe to our newsletter
                </h4>
                <p className="mt-4 text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px]">
                  Get the latest marketing insights, strategies, and updates delivered to your inbox.
                </p>
                <form className="mt-4 sm:flex sm:max-w-md flex-col" onSubmit={handleSubscribe}>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none min-w-0 w-full bg-[#1A1A1A] border border-transparent rounded-md py-2 px-4 text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#E0FF82] focus:border-[#E0FF82] focus:placeholder-gray-400 mb-3"
                    placeholder="Enter your email"
                  />
                  <div className="rounded-md sm:flex-shrink-0">
                    <AnimatedButton
                      type="submit"
                      className="w-full bg-[#E0FF82] border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-[#000] hover:bg-[#c9e673] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#E0FF82]"
                    >
                      Subscribe
                      <Send className="ml-2 h-5 w-5" />
                    </AnimatedButton>
                  </div>
                </form>
                {subscribed && (
                  <p className="mt-3 text-sm text-green-400">
                    Thanks for subscribing! Check your email for confirmation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 pb-0">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px]">
              &copy; {new Date().getFullYear()} Marketing as a Service. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px] hover:text-gray-300 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px] hover:text-gray-300 transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-[#919191] font-['Onest'] text-[14px] font-normal leading-[32px] hover:text-gray-300 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}