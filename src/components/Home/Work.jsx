import React from 'react'
import one from '../../assets/work/1.png'
import two from '../../assets/work/2.png'
import three from '../../assets/work/3.png'
import four from '../../assets/work/4.png'
import five from '../../assets/work/5.png'

const Work = () => {
  return (
    <div className='work my-[110px]'>
        <div className="container-sectionn w-[90%] m-auto">
            <h1 className='text-[24px] lg:text-[38px] font-[600] leading-8 lg:leading-[50px] text-center '>we work with top <span className='text-[#82631C]'>clients</span></h1>
            <p className='text-center text-[15px] font-[400] leading-5 my-[20px]'>partners</p>
            <div className='company-logo grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-center'>
                <img className='m-auto' src={one} alt="" />
                <img  className='m-auto' src={two} alt="" />
                <img  className='m-auto' src={three} alt="" />
                <img  className='m-auto' src={four} alt="" />
                <img  className='m-auto' src={five} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Work