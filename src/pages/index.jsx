import React, { useState } from 'react';

const index = () => {
  const [dropdown, setDropdown] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(index);
  };


  var navCard = [
    { img: "Images/OM3-041-sm 1.png", title: "E-commerce manager", heading: "Thomas Weber", para: "The focus is on project management, conception and implementation of software solutions." },

    { img: "Images/OM3-052-sm 1.png", title: "Online Marketing Manager", heading: "Andreas Reimer", para: "The focus is on technical implementation as well as search engine optimization and online marketing measures." },

    { img: "Images/cropped-Bildschirmfoto-2022-09-27-um-1.21 1.png", title: "Marketing", heading: "Claudia Gmelin Larbi", para: "OM3's smile for you on the phone. Takes care of administration and communication. Let's make an appointment!" },

    { img: "Images/peter 1.png", title: "Designers", heading: "Peter Reimer", para: "Experience design and branding. Experience in UI and UX design. Expertise in user-centered experiences and inclusive design." },

    { img: "Images/IMG_33E914013F56-1 1.png", title: "Performance ads specialist", heading: "Manuel Eberhard", para: "With his experience from over 100 successful projects, Manuel takes care of setting up, monitoring and optimizing performance displays for our customers." },

    { img: "Images/OM3-052-sm 1.png", title: "ERP expert", heading: "Patrick Gruber", para: "Our technical ERP expert with over 10 years of experience in tailor-made integrations of SAP, Microsoft Dynamics (NAV, AX) etc. with your e-commerce system or PDM system." },

  ]

  var navSec = [
    { img: 'Images/Group 46.png', para: 'Clarification of the procedure' },
    { img: 'Images/Group 47.png', para: 'Selection of the shop system' },
    { img: 'Images/Group 47.png', para: 'Create and optimize product descriptions' },
    { img: 'Images/Group 49.png', para: 'Integration of merchandise management systems' },
    { img: 'Images/Group 49.png', para: 'Implement fulfillment and returns processes' },
    { img: 'Images/Group 49.png', para: 'Optimizing shop usability' },
    { img: 'Images/Group 52.png', para: 'Including payment methods' },
    { img: 'Images/Group 52.png', para: 'Legal regulations' },
    { img: 'Images/Group 52.png', para: 'Search engine optimization' },
  ]

  var quesAns = [
    { que: 'What can be critical factors in eCommerce projects?', para: 'Critical factors in eCommerce projects can be diverse and include technical, business and human aspects. Some of them are: 1. Technology selection: Incorrect or outdated technologies can affect scalability and performance. 2. Data migration and integration: Transferring data from existing systems can be complex and error-prone. 3. Security Concerns: Inadequate security measures can lead to data loss or theft. 4. User Experience: Poorly designed user interfaces can turn off customers. 5. SEO and Marketing: Missing or ineffective marketing strategies can affect visibility and traffic. 6. Compliance and Regulations: Failure to comply with laws and regulations can result in penalties and bad reputation. 7. Budget and time frame: Cost or time overruns can jeopardize the project. 8. Team qualification and management: Insufficient expertise or poor teamwork can reduce project quality. 9. Scalability and performance: Non-scalable solutions can become a problem as traffic increases. 10. Customer Retention: Lack of customer retention strategies can lead to high bounce rates and low loyalty. 11. Competitive Analysis: Inadequate understanding of the market and competition can lead to poor positioning. 12. Quality Assurance and Testing: Poor testing can lead to errors and poor user experience. Taking these factors into account and planning appropriate solution strategies is crucial for the success of an eCommerce project.'},

    { que: 'Which shop systems are there?', para: 'A distinction is made between purchase and rental systems as well as open source systems. Purchase shops include OXID, Intershop or Gambio. Rental systems include Shopify, Shopware, BigCommerce, SAP Commerce Cloud, Wix and Jimdo; Open source systems are Magento, WooCommerce or osCommerce. If someone would like to have individual processes implemented, a shop system developed in-house is ideal.'},

    { que: 'What security options are there in the e-commerce sector?'},
    { que: 'What does the abbreviation MACH mean in eCommerce?' },
    { que: 'Who is the MACH Alliance?' },
    { que: 'What is meant by composable commerce?'},
    { que: 'How to use GraphQL in eCommerce?'},

  ]

  return (
    <div className='bg-[#131313]'>

        <div className='w-[100%] h-[100vh] bg-[#131313]'>

        <div className='py-12 flex justify-center items-center post font-[Ubuntu,sans-serif]'>
          <span className='text-7xl text-[#BCED22] font-normal leading-normal'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-comerce <br />
            System Integration <br />
            Online  Marketing
          </span>
        </div>

        <div className='p-8 flex justify-center mt-48  animate-bounce delay-[3.3s]'>
          <button onClick={() => setDropdown(!dropdown)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="52" viewBox="0 0 26 52" fill="none">
              <path d="M2 12.9118H0.821429H2ZM13 2V3.17857V2ZM24 12.9118H25.1786H24ZM24 22.2647H22.8214H24ZM2 22.2647H3.17857H2ZM14.1786 6.67647C14.1786 6.02556 13.6509 5.4979 13 5.4979C12.3491 5.4979 11.8214 6.02556 11.8214 6.67647H14.1786ZM11.8214 11.3529C11.8214 12.0038 12.3491 12.5315 13 12.5315C13.6509 12.5315 14.1786 12.0038 14.1786 11.3529H11.8214ZM2.76344 39.7492C2.26755 39.3275 1.52375 39.3877 1.10212 39.8836C0.680483 40.3795 0.740674 41.1233 1.23656 41.5449L2.76344 39.7492ZM13 50L12.2366 50.8979C12.6767 51.2721 13.3233 51.2721 13.7634 50.8979L13 50ZM24.7634 41.5449C25.2593 41.1233 25.3195 40.3795 24.8979 39.8836C24.4762 39.3877 23.7324 39.3275 23.2366 39.7492L24.7634 41.5449ZM3.17857 12.9118C3.17857 10.3334 4.211 7.85878 6.05184 6.03271L4.39181 4.35926C2.10685 6.62589 0.821429 9.70213 0.821429 12.9118H3.17857ZM6.05184 6.03271C7.893 4.20632 10.3921 3.17857 13 3.17857V0.821429C9.77309 0.821429 6.67645 2.09294 4.39181 4.35926L6.05184 6.03271ZM13 3.17857C15.6079 3.17857 18.107 4.20632 19.9482 6.03271L21.6082 4.35926C19.3235 2.09294 16.2269 0.821429 13 0.821429V3.17857ZM19.9482 6.03271C21.789 7.85878 22.8214 10.3334 22.8214 12.9118H25.1786C25.1786 9.70213 23.8931 6.62589 21.6082 4.35926L19.9482 6.03271ZM22.8214 12.9118V22.2647H25.1786V12.9118H22.8214ZM22.8214 22.2647C22.8214 23.5416 22.5679 24.8061 22.0751 25.9863L24.2502 26.8946C24.863 25.427 25.1786 23.8538 25.1786 22.2647H22.8214ZM22.0751 25.9863C21.5823 27.1665 20.8597 28.2395 19.9482 29.1438L21.6082 30.8172C22.7395 29.695 23.6374 28.3621 24.2502 26.8946L22.0751 25.9863ZM19.9482 29.1438C19.0366 30.048 17.9539 30.7658 16.7616 31.2557L17.6574 33.436C19.1343 32.8292 20.4769 31.9394 21.6082 30.8172L19.9482 29.1438ZM16.7616 31.2557C15.5693 31.7456 14.2911 31.9979 13 31.9979V34.355C14.598 34.355 16.1806 34.0428 17.6574 33.436L16.7616 31.2557ZM13 31.9979C11.7089 31.9979 10.4307 31.7456 9.23841 31.2557L8.34256 33.436C9.81943 34.0428 11.402 34.355 13 34.355V31.9979ZM9.23841 31.2557C8.04613 30.7658 6.96342 30.048 6.05184 29.1438L4.39181 30.8172C5.52312 31.9394 6.86567 32.8292 8.34256 33.436L9.23841 31.2557ZM6.05184 29.1438C5.14028 28.2395 4.4177 27.1665 3.92489 25.9863L1.74976 26.8946C2.36255 28.3621 3.26048 29.695 4.39181 30.8172L6.05184 29.1438ZM3.92489 25.9863C3.43209 24.8061 3.17857 23.5416 3.17857 22.2647H0.821429C0.821429 23.8538 1.13696 25.427 1.74976 26.8946L3.92489 25.9863ZM3.17857 22.2647V12.9118H0.821429V22.2647H3.17857ZM11.8214 6.67647V11.3529H14.1786V6.67647H11.8214ZM1.23656 41.5449L12.2366 50.8979L13.7634 49.1021L2.76344 39.7492L1.23656 41.5449ZM13.7634 50.8979L24.7634 41.5449L23.2366 39.7492L12.2366 49.1021L13.7634 50.8979Z" fill="white" />
            </svg>
          </button>
        </div>
        </div>

      {dropdown && (
        <>
          <div id='Services' className='flex'>
            <div className=' w-[50%] h-[100vh] p-40 bg-[#131313] relative'>
              <p className='flex justify-center p-6 text-xl text-slate-50 '>digital success, perfectly orchestrated</p><br />
              <span className='flex font-[Ubuntu,sans-serif] justify-center p-6 text-4xl text-[#BCED22] font-normal leading-normal' >
                &nbsp;&nbsp;&nbsp; E-commerce <br />
                System Integration <br />
                Online  Marketing
              </span>
            </div>

            <div className='bg-[#BCED22] w-[50%] h-[100vh] px-40 py-60 font-[Ubuntu,sans-serif] leading-relaxed absolute right-0'>
              <span className='text-3xl text-bold text-[#131313]' data-aos="fade-right" data-aos-duration="2000">Do you want to sell your <br /> products or services <br /> online?</span>
              <p className='text-2xl text-[#131313] mt-6'>Then you will be faced with a series of questions that are crucial to the success of your web business...</p>
              <button className='px-8 py-4 mt-12 bg-[#131313] text-center text-[#fff] rounded-3xl' data-aos="fade-up">Continue reading</button>
            </div>
          </div>


          <div className='bg-[#A07EFF] flex flex-col justify-center items-center leading-normal family h-[100vh]' data-aos="zoom-in" data-aos-duration="3000">
            <h2 className='text-5xl p-2'>The om3 team</h2>
            <p className='text-2xl m-4'>We have many years of experience in software consulting. Our <br /> goal is to achieve our customers' goals in a short time. We create <br /> added value and implement demanding requirements.</p>
          </div>

          <div id="team" className='bg-[#BCED22] px-12 py-16 max-h-[screen]'>
            <h2 className='text-5xl text-[#131313] text-center family mb-8'>Our team</h2>
            <div className='column' data-aos="fade-right" data-aos-duration="2000">
              {
                navCard.map((v, i) => {
                  return (

                    <div className='bg-[#131313] text-[#fff] mx-6 my-6 text-center rounded-md family'>
                      <img className='w-[70vw]' src={v.img} alt="" />
                      <span className='rounded bg-[#BCED22] p-2 text-[16px] text-[#fff]'>{v.title}</span>
                      <h2 className='text-[24px] mt-4'>{v.heading}</h2>
                      <p className='text-[20px] mt-3 p-6'>{v.para}</p>
                    </div>


                  )
                })
              }
            </div>
          </div>

          <div className='bg-[#A07EFF] flex justify-center items-center family py-[200px] max-h-[screen]'>
            <div className='flex justify-center items-center animation'>
              <img className='w-[24vw]' src="Images/Group.png" alt="" />

            </div>


            <div className='relative left-[-20%] text-[26px] p-7 leading-normal family'>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;E-commerce <br />System integration <br />online marketing</span>
            </div>

            <div className='text-3xl family font-medium leading-normal'>
              <p>We create added value <br /> and implement <br /> demanding requirements</p>
            </div>
          </div>

          <div className='bg-[#131313] text-center leading-normal family py-[150px] h-[100vh]' data-aos="zoom-in" data-aos-duration="3000">
            <h2 className='text-5xl p-2 text-slate-50 flex flex-col'>Our Partners</h2>

            <div className='flex justify-center gap-40 mt-20'>
              <img src="Images/lg-1.svg" alt="" />
              <img src="Images/lg-2.svg" alt="" />
              <img src="Images/lg-4.svg" alt="" />
              <img src="Images/lg-3.svg" alt="" />
            </div>

            <div className='flex justify-center gap-40 mt-20'>
              <img src="Images/Vector.svg" alt="" />
              <img src="Images/lg-5.svg" alt="" />
              <img src="Images/lg-6.svg" alt="" />
            </div>
          </div>

          <div id='doIt' className='bg-[#A07EFF] w-[100%] h-auto'>
            <h2 className='text-5xl font-normal text-center family pt-12 text-[#1313131]'>So we do it</h2>
            <div className='colum px-40 py-20'>
              {
                navSec.map((v, i) => {
                  return (

                    <div className='flex flex-col justify-center items-center text-[#131313] mx-6 my-6 family'>
                      <img className='' src={v.img} alt="" />
                      <p className='text-[32px] font-normal text-center mt-6 px-4'>{v.para}</p>

                    </div>


                  )
                })
              }
            </div>

            <div className='flex justify-center items-center'>
              <button className='text-center text-xl family rounded-3xl px-12 py-3 mb-10 text-slate-50 bg-[#131313]'>Contact us</button>
            </div>
          </div>


          <div className={`w-[100%]  bg-[#BCED22] flex justify-center items-center h-[100vh]`}>
            <div className='flex flex-col gap-4 justify-center w-[70vw] text-3xl px-8 py-4 text-gray-50 family bg-[#131313]'>
              {
                quesAns.map((v, index) => {
                  return (
                    <>
                      <div className='flex justify-between items-center cursor-pointer' key={index} onClick={() => toggleAnswer(index)} >
                        <p>{v.que}</p>
                        <div>
                          {openIndex === index ? (
                            <i class='fa-solid fa-minus flex-row-reverse text-xl pr-4'></i>
                          ) :
                            (<i class='fa-regular fa-plus flex-row-reverse text-xl pr-4' ></i>
                            )}
                        </div>
                      </div><hr />

                      {openIndex === index &&
                        <div className={`flex justify-center text-xl text-[#fff] family `}>
                          <p>{v.para}</p>
                        </div>
                      }

                    </>


                  )
                })
              }

            </div>
          </div>




          <div className='bg-[#131313] text-gray-50 w-[100%] h-[120vh] flex flex-col gap-20 justify-center items-center'>
            <h2 className='text-5xl family'>Contact us</h2>

            <div className='flex justify-around gap-8 items-center'>
              <div className='bg-[#BCED22] w-[50%] h-[70vh] p-7 flex flex-col justify-center rounded-2xl gap-4'>
                <h2 className='text-4xl text-[#131313] text-center'>Let's work together</h2>
                <input className='bg-[#fff] rounded-[30px] w-[100%] px-6 py-4' type="text" placeholder='Surname' />
                <input className='bg-[#fff] rounded-[30px] w-[100%] px-6 py-4' type="text" placeholder='Phone #' />
                <input className='bg-[#fff] rounded-[30px] w-[100%] px-6 py-4' type="text" placeholder='Pursue' />
                <textarea className='bg-[#fff] rounded-[30px] w-[100%] p-6' placeholder='Text here' cols="30" rows="10"></textarea>
                <button className='text-xl w-[100%] family bg-[#131313] text-[#fff] text-center rounded-3xl p-3' type="submit">Send</button>
              </div>

              <div className='h-[70vh] gap-4'>
                <p className='text-2xl text-center family mb-6'>Baslerstrasse 30, 8048 Zurich, Switzerland</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5402.676686057627!2d8.503285!3d47.385831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0637601823d%3A0x672f12673b180d20!2sboesner%20GmbH%20-%20Zurich!5e0!3m2!1sen!2sus!4v1700731380077!5m2!1sen!2sus" width="450" height="350" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>


              <div className='text-2xl family h-[70vh] w-[40%] text-center px-8'>
                <p>info@om3.ch</p>
                <p className='mt-6'>+41 43 321 94 83</p>
                <div className='text-4xl text-slate-50 flex justify-center gap-8 mt-6'>
                  <i class="fa-brands fa-facebook hover"></i>
                  <i class="fa-brands fa-linkedin hover"></i>
                  <i class="fa-brands fa-instagram hover"></i>
                </div>
              </div>
            </div>

          </div>

        </>
      )}


    </div>
  );
};

export default index;




















































