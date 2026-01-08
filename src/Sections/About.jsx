import Spline from '@splinetool/react-spline';
import { ArrowRight, CakeSlice, ChartNoAxesColumn, ChartNoAxesColumnIncreasing, FastForward, Heart, Motorbike, PartyPopper, Rocket, ShipWheel, Wallet, Zap } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


export const About = () => {

    
 useGSAP(()=>{

    gsap.fromTo('#whyluv',
            {opacity:0,},

            {
                opacity:1,
                duration:1,
                delay:0,
                scrollTrigger:{
                  trigger:"#bento"
                 },}
        );

             
	gsap.fromTo('.stagger-card',
            {y:-50,opacity:0,scale:1},

            {y:0,opacity:1,
                scale:1,
                duration:1,
                stagger:.3, 
                delay:1,
                scrub:true,
                scrollTrigger:{
                  trigger:"#bento"
                 },}
        );

         gsap.fromTo('.b4footer',
            {opacity:0,},

            {
                opacity:1,
                duration:1,
                
                scrollTrigger:{
                  trigger:".b4footer"
                 },}
        );


 
        
    },[]);




  
  return <section id='about' className="w-screen sm:mt-5 mt-35  flex items-center justify-center ">
      
       <div className=' flex flex-col  items-center justify-center'>

        <h1 id='whyluv' className=' fugaz text-red-800  sm:text-[80px] text-[50px]  tracking-[1px]  '>Why LUV?</h1>


        {/*Bento layout*/}
        <div className='flex items-center justify-center  rounded-xl scale-85 sm:scale-100 md:scale-100 lg:scale-110 xl:scale-120 mb-35 -mt-20 sm:mt-10 md:mt-10 lg:mt-20 xl:mt-30'>
            <div id='bento'  className=' grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-3 gap-2 '>

                <div className='stagger-card col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-2  h-90 w-90 sm:h-110 sm:w-75 md:h-140 md:w-95 lg:h-150 lg:w-100 flex flex-col items-center justify-center rounded-2xl border bg-[#050205] text-[#ebebeb] overflow-clip'>
                    <ChartNoAxesColumnIncreasing className='z-1 h-60 w-60 md:mt-0 -mt-10 sm:h-full sm:w-full text-red-800'></ChartNoAxesColumnIncreasing>
                    <div className='z-1 absolute bottom-7 md:bottom-10 left-5'>
                        <h1 className='text-xl sm:text-lg md:text-3xl'>Maximum AI disturbance.</h1>
                        <h2 className='text-md sm:text-sm md:text-lg opacity-50'>Minimal changes to your art.</h2>
                        
                    </div>
                     <div className='z-0 absolute -top-60 md:-top-30 opacity-50 scale-200 flex items-center justify-center '>
                        <div className='z-0 absolute w-100 h-100 bg-red-800 rounded-full blur-xl'></div>
                        <div className='z-0 absolute w-100 h-100 bg-[#050205] rounded-full'></div>
                    </div>
                </div>


                <div className='stagger-card col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1  h-full w-full flex flex-col items-center justify-center rounded-2xl border border-[#635f63] bg-[#050205] text-[#ebebeb] overflow-clip '>
                     
                    {/*Whole Cake*/}
                    <div className='absolute flex flex-col items-center justify-center sm:top-10 md:top-17 scale-130 sm:scale-80 md:scale-100 '>
                        {/*Candle*/}
                        <div className='z-1 w-3 h-8 top-0 -mt-1 mr-5 absolute flex items-center justify-center bg-[#ebebeb]'></div>

                        <div className='z-1 absolute flex items-center justify-center -mt-40 mr-5 animate-pulse'>
                         <div className='z-0 w-8 h-8  bg-red-800/70 rounded-full blur-md '></div>
                         <div className='z-1 absolute w-7 h-7  bg-[#050205] rounded-full '></div>
                         <div className='z-2 absolute w-2.5 rotate-45 h-3 bg-red-700'></div>
                        </div>
                        
                         {/*Cake*/}
                       
                        <CakeSlice className='z-1 w-30 h-30'></CakeSlice>
                    </div>
                   
                    <div className='absolute bottom-7 md:bottom-10 left-5'>
                        <h1 className='text-xl sm:text-lg md:text-3xl'>Easy Setup.</h1>
                        <h2 className='text-md sm:text-sm md:text-lg opacity-50'>A piece of cake.</h2>
                    </div>
                </div>


                <div className='stagger-card col-span-1 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1 h-full w-full flex flex-col items-center justify-center rounded-2xl border border-[#635f63] bg-[#050205] text-[#ebebeb] overflow-clip'>
                    
                    <Rocket className='z-1 h-30 w-30 absolute sm:top-3 sm:scale-80 md:scale-100 md:top-15 scale-125 '></Rocket>
                    <div className='z-1 absolute bottom-7 md:bottom-10 left-5'>
                        <h1 className='text-xl sm:text-lg md:text-3xl'>Fast Processing.</h1>
                        <h2 className='text-md sm:text-sm md:text-lg opacity-50'>Don't gotta wait too long for LUV.</h2>
                    </div>
                    <div className='z-0 absolute -bottom-17 sm:-bottom-22 md:-bottom-15 flex items-center justify-center opacity-50 '>
                        <div className='z-0 absolute w-100 h-100 bg-red-800 rounded-full blur-xl'></div>
                        <div className='z-0 absolute w-100 h-100 bg-[#050205] rounded-full'></div>
                    </div>
                    <div className='z-0 absolute top-15 w-30 h-30 bg-red-800 opacity-0 rounded-full animate-pin'></div>

                    
                    
                </div>

                <div className='stagger-card col-span-1 row-span-1 sm:col-span-4 sm:row-span-1 md:col-span-4 md:row-span-1 h-full w-full flex items-center justify-center rounded-2xl  border border-[#635f63] bg-[#050205] text-[#ebebeb]'>
                    <div className='flex flex-row items-center justify-center'>
                        <span className='text-red-800 text-[100px]'>❤︎</span>
                        <Wallet className='h-30 w-30 animate-bounce'></Wallet>
                        <span className='text-red-800 text-[100px]'>❤︎</span>
                        
                    </div>
                    

                     <div className='absolute bottom-7 md:bottom-10 left-5'>
                        <h1 className='text-xl sm:text-lg md:text-3xl'>Free for life.</h1>
                        <h2 className='text-md sm:text-sm md:text-lg opacity-50'>No hidden charges.</h2>
                    </div>

                </div>

                


            </div>
        </div>

       
        
            <div className='b4footer flex flex-col   items-center justify-center sm:mb-0 mb-30 sm:my-20 md:my-25 lg:my-30'>
                      <h1 className=' text-[#050205] text-md sm:text-lg md:text-xl tracking-[1px] '> Dear artist, don't lose heart.</h1>
                      <div className='flex flex-row mb-10'>
                        <span className='text-red-800 md:text-4xl'>❤︎❤︎</span>
                        <span className='text-red-800 md:text-4xl animate-[pulse_1s_ease-in-out_infinite]'>❤︎</span>
                      </div>
                <div>
                    <button className='bg-[#050205] px-10 py-1 rounded-full cursor-pointer flex flex-row items-center justify-center hover:scale-103 transition-all duration-200 sm:scale-100 scale-85'>
                        
                        <h1 className='sm:text-[50px] text-[50px] text-[#ebebeb] opacity-90 mr-5'>Choose</h1>
                        <h1 className='fugaz text-red-800  sm:text-[50px] text-[50px]  tracking-[1px] '>LUV</h1>
                        <div className='flex items-center justify-center w-14 h-14 bg-[#ebebeb] rounded-full ml-3 -mr-7'>
                               <ArrowRight className='stroke-2.5 text-2xl  text-[#050205]'></ArrowRight>
                         </div>
                    </button>
                </div>
                </div>
       

       </div>
       
       

       
       
       
            
        
        
     </section>
    
}


