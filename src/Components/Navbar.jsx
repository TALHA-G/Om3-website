import React, { useState } from 'react';
import NextLink from 'next/link';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

 
  return (
    <div className='flex justify-between px-20 py-10 position'>
      <div className='logo1'>
        <NextLink href={'/'}>
          <img className='text-5xl cursor-pointer' src="Images/logo_desktop.png" alt="" />
        </NextLink>
      </div>
  
      <div className='text-5xl'>
       
        <button className='checkbtn' onClick={() => setNavbar(!navbar)} >
           <i className="fa-solid fa-bars text-slate-50 text-4xl hover:text-[#BCED22]"  ></i>
        </button>
  


       {navbar&&(
        <nav>
          <ul  className='flex justify-around items-center p-4  pb-36 text-slate-50 font-[Ubuntu,sans-serif]'>
            <div className='transition-all delay-[2s]' onClick={ ()=> setNavbar(!navbar)}>
            <li><NextLink href='#Services'>Services</NextLink></li>
            <li><NextLink href="#e-commerce">E-commerce</NextLink></li>
            <li><NextLink href="#blog">System Integration</NextLink></li>
            <li><NextLink href="#system">Online Marketing</NextLink></li>
            <li><NextLink href="#doIt">How we do it</NextLink></li>
            <li><NextLink href="#qa">Q & A</NextLink></li>
            <li><NextLink href="#ref">References</NextLink></li>
           </div>
           

            <div className='pt-[60px]' onClick={ ()=> setNavbar(!navbar)}>
               <li><NextLink href="#team">team</NextLink></li>
               <li><NextLink href="#">partners</NextLink></li>
               <li><NextLink href={'/news'} >News</NextLink></li>
               <li><NextLink href={'/jobs'} >Jobs</NextLink></li>
               <li><NextLink href="#">Imprint</NextLink></li>
               <li><NextLink href="#">Terms & Conditions</NextLink></li>
               <li><NextLink href="#">Privacy Policy</NextLink></li>
               <li><NextLink href="#">Contact</NextLink></li>
            </div>


             <span className='mb-[300px]'>
                <div>
                <p className='text-4xl hover'>de &nbsp;&nbsp;en</p>
                </div>
                
                <div className='text-4xl text-slate-50 flex gap-8 mt-6'>
                <i class="fa-brands fa-facebook hover"></i>
                <i class="fa-brands fa-linkedin hover"></i>
                <i class="fa-brands fa-instagram hover"></i>
                </div>
             </span>
          </ul>
        </nav>
       )}
      </div>

    </div>
  )
}

export default Navbar







       

       







 