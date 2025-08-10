import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer p-container">
      <p className="copyleft">Email: <a href="mailto:webapp@example.com">webapp@example.com</a></p>
      <p className="copyright">&copy; 2024 Web App. All rights reserved.</p>
    </footer>
  )
}

export default Footer;