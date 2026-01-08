
import Spline from '@splinetool/react-spline';
import { ArrowRight, Heart } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

export const Hero = () => {


     useGSAP(() => {

         gsap.fromTo('.threed', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        delay:.5,
                        ease: 'power1.inOut', 
                })

            gsap.fromTo('.content', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        delay:.5,
                        ease: 'power1.inOut', 
                })


      

     }, []);
  
  return <section className="h-190  flex items-center justify-center ">
      <div className='flex items-center justify-center'>
          
           <div className='threed z-0 flex absolute items-center justify-center -mt-30 sm:-mt-90 md:mt-15 lg:mt-15 md:-mr-120 lg:-mr-150 xl:-mr-190  bg-black/0 w-100 h-100 sm:h-120 sm:w-150'>
        <Spline scene="https://prod.spline.design/X5tHLMmKPZva0FFy/scene.splinecode" className='z-0 flex items-center justify-center scale-80 sm:scale-90 md:scale-80  xl:scale-120' />
       </div>

       
       
       
        {/*Content*/}
        <div className="content hidden md:flex z-1 items-center justify-center  mt-10 xl:-ml-170 lg:-ml-90 md:-ml-100 xl:scale-100 lg:scale-85 md:scale-70 ">
           
             <div className="bg-black/0  flex flex-col ">

               <div className='flex flex-row -mb-15  text-red-800  sm:text-[130px] text-[80px] tracking-[-7px]'>
                    <h1 className='hidden bungee-outline-regular text-red-800  sm:text-[130px] text-[80px] tracking-[-7px] mr-5 -mt-2 '>PURE</h1>
                     <h1 className='fugaz text-red-800/50  sm:text-[130px] text-[80px]  tracking-[-7px] mr-7'>PURE</h1>
                    <h1 className='fugaz text-red-800  sm:text-[130px] text-[80px]  tracking-[-7px]'>LUV</h1>
               </div>
              
               <h1 className="fugaz opacity-90 text-[53px]">for human artistry. </h1>
               <h1 className=" text-[20px] text-[#050205]">Protect your art from AI training for free. No complicated steps. </h1>

               <div className="mt-10 sm:gap-5 flex flex-col md:flex-row">
                    <button className="flex flex-row items-center justify-center h-12 w-50 pl-3 bg-[#050205] rounded-full text-white text-2xl hover:scale-103 transition-all duration-200 cursor-pointer">
                         Luv your art
                         <div className='flex items-center justify-center w-9 h-9 bg-white rounded-full ml-3'>
                               <ArrowRight className='stroke-2.5  text-[#050205]'></ArrowRight>
                         </div>
                    </button>
               </div>
                
             </div>
            
        </div>

          {/*Content MOBILE*/}
        <div className="content md:hidden z-1 flex mt-120 sm:mt-70 items-center justify-center sm:scale-80 ">
           
             <div className="bg-black/0  flex items-center justify-center flex-col lg:-ml-190 ">
                 <div className='flex flex-row   text-red-800  sm:text-[130px] text-[80px] tracking-[-7px]'>
                    <h1 className='hidden bungee-outline-regular text-red-800  sm:text-[130px] text-[80px] tracking-[-8px] mr-3 -mt-2 '>PURE</h1>
                     <h1 className='fugaz text-red-800/50  sm:text-[130px] text-[80px]  tracking-[-5px] mr-5'>PURE</h1>
                    <h1 className='fugaz text-red-800  sm:text-[130px] text-[80px]  tracking-[-5px]'>LUV</h1>
               </div>
                <h1 className="fugaz -mt-9 text-[31px] sm:text-[53px] text-center">for human artistry.</h1>
                <h1 className=" text-[17px] text-[#050205] px-20 text-center">Protect your art from AI training for free. No complicated steps.</h1>
                   <div className="mt-10 sm:gap-5 flex flex-col md:flex-row">
                    <button className="flex flex-row items-center justify-center h-12 w-50 pl-3 bg-[#050205] rounded-full text-white text-2xl hover:scale-103 transition-all duration-200 cursor-pointer">
                         Luv your art
                         <div className='flex items-center justify-center w-9 h-9 bg-white rounded-full ml-3'>
                               <ArrowRight className='stroke-2.5  text-[#050205]'></ArrowRight>
                         </div>
                    </button>
               </div>
                
             </div>
            
        </div>
        
      </div>
     
       
      
     </section>
    
}


