import React from 'react'

const jobs = () => {

    var navCard =[
        {img:"Images/Logo_Start_Up_Nights_2023_Black_Digital_use_only_2caee4ed74.webp", heading:'Om3 at Startup Nights',para:'lorem10j guiewg gewuigdi'},
        {img:"Images/edge2edge_media_x21_Kg_Bf_Od_4_unsplash_2_122fc101ed.webp", heading:'How to create a composable commerce shop',para:'lorem10j guiewg gewuigdi'},
        {img:"Images/website_performance_2abaa6fcab.webp", heading:'Webinar with BigCommerce and Om3 on 12 October, 2023 at 12.pm',para:'Webinar with BigCommerce and Om3 on 12 October, 2023 at 12.pm'},
       
    ]
  return (
       <>
            <div className=' w-[100%] h-[100vh] relative top-[100px] p-16 text-[#fff] bg-[#131313]'>
              <h2 className='text-4xl text-center family font-medium mb-4'>News</h2>

             <div className='colum gap-10 px-24' >
                {
                 navCard.map((v,i)=>{
                   return(
                    
                    <div className='bg-[#363636] px-10 py-4 text-center rounded-md family'>
                    <img className='w-[100%] h-[42vh]' src={v.img} alt="img" />
                    <h2 className='text-[22px] mt-4 px-12'>{v.heading}</h2>
                    <p className='text-[18px] mt-3 px-12'>{v.para}</p>
                   </div>
                   
                     )
                    })
                }
              </div>
            </div>
                      
                    



    </>
  )
}

export default jobs