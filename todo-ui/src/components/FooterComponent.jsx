import React from 'react'

export const FooterComponent = () => {
  return (
    <>
      <footer className='footer d-flex align-items-center justify-content-center'>
        <p className='text-center'>Copy right reserved at &copy; {new Date().getFullYear()} by JDC</p>
      </footer>
    </>
  )
}
