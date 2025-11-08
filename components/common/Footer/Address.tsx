import React from 'react'
import SocialLinks from './SocialLinks'

const Address = () => {
  return (
    <address className="not-italic">
          <h3 className="text-white text-[28px] mb-5 font-semibold">Connect With Us</h3>
          <SocialLinks />
          <a className="text-[26px] text-white mt-10" href="mailto:support@trigardening.com">
            support@trigardening.com
          </a>
          <h4 className="text-white text-[26px] mt-12">Call Now</h4>
          <a className="text-white text-[26px]" href="tel:+8801234567890">
            +8801234567890
          </a>
        </address>
  )
}

export default Address