import React from 'react'

const jobs = () => {

    var navCard =[
        {img:"Images/Frame 31.png"},
        {img:"Images/Frame 32.png"},
        {img:"Images/Frame 33.png"},
    ]
  return (
    <>
            <div className=' w-[100%] h-[87vh] relative top-[100px] text-[#fff] bg-[#131313]'>
              <h2 className='text-4xl text-center family font-medium mb-4'>JOBS</h2>

            <div className='column'>
                {
                 navCard.map((v,i)=>{
                   return(
                    
                    <div className='bg-[#131313] mx-6 my-6 rounded-md'>
                      <img className='w-[25vw]' src={v.img} alt="" />
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