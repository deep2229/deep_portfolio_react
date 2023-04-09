import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import "./ContactSection.css"
export const ContactSection = () => {
  return (
    <div className='contact center'>
      <div>
        <div className='iconContainer'><PhoneAndroidIcon className='iconNew' /> <label>+91-9033601949</label></div>
        <div className='iconContainer'><EmailIcon className='iconNew' /> <label>deepthakkar52@gmail.com</label></div>
      </div>
      <div className="google-map-code">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717913474!2d72.4396559189134!3d23.020497769916478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1677911979974!5m2!1sen!2sin" width="600" height="300" frameborder="0" style={{ border: 0, borderRadius: '20px', marginTop: '50px' }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  )
}
