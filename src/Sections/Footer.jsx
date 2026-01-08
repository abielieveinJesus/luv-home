import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export const Footer = () => {
    useGSAP(()=>{

    const footertl = gsap.timeline({
              scrollTrigger: {
              trigger:"#footer"
             }
            });



    footertl.fromTo('.footer-headline',
            {
                opacity:0,

            },

            {
                opacity:1,
                duration:1,
                delay:0,
               
                }
        );

             
	footertl.fromTo('.stagger-options',
            {y:-5,opacity:0},

            {
                y:0,
                opacity:1,
                duration:.3,
                stagger:.3, 
                ease:'power1.inOut'
               }
        );

     
         footertl.fromTo('.policies-terms',
            {
                opacity:0,

            },

            {
                opacity:1,
                duration:1,
                delay:0,
                
                }
        );
           footertl.fromTo('.footer-end',
            {
                opacity:0,

            },

            {
                opacity:1,
                duration:1,
                
                
                }
        );


      

 
        
    },[]);






  return <section id='footer' className="mt-10 w-screen flex flex-row items-center justify-center bg-[#050205]  py-10">
    <div className='flex  flex-col items-center justify-center bg-white/0'>

        <h1 className='footer-headline flex items-center justify-center text-[#ebebeb]/90  sm:text-[30px] text-[30px]  tracking-[1px] mb-5 '>Keep in touch <span className='ml-3 mt-0.5'>❤︎</span></h1>

        <div className='flex flex-col items-center justify-center'>
           <div className='grid grid-cols-1 grid-rows-5 gap-3 items-center justify-center text-center'>
           <div className='stagger-options flex items-center justify-center w-80 h-12 bg-white/90 rounded-full text-center text-md  text-[#050205] hover:bg-white/70 transition-all duration-200 cursor-pointer'>Community</div>
           <div className='stagger-options flex items-center justify-center  w-80 h-12 bg-white/90 text-center text-md  rounded-full text-[#050205] hover:bg-white/70 transition-all duration-200 cursor-pointer'>Discord</div>
           <div className='stagger-options flex items-center justify-center  w-80 h-12 bg-white/90 text-center text-md  rounded-full text-[#050205] hover:bg-white/70 transition-all duration-200 cursor-pointer'>Contact Us</div>
           <div className='stagger-options flex items-center justify-center  w-80 h-12 bg-white/90 text-center text-md  rounded-full text-[#050205] hover:bg-white/70 transition-all duration-200 cursor-pointer'>Donate</div>
        </div>

        <div className='policies-terms flex flex-row gap-5 items-center justify-center'>
             <a className='  text-[#ebebeb] hover:opacity-70 transition-all duration-200 cursor-pointer border border-[#ebebeb] rounded-full px-5 py-1'>Privacy Policy</a>
              <a className='  text-[#ebebeb] hover:opacity-70 transition-all duration-200 cursor-pointer border border-[#ebebeb] rounded-full px-5 py-1'>Terms of Use</a>
        </div>
        
        <a className='footer-end mt-10 text-sm text-[#ebebeb]/80 text-center'>©2026 LUV - An Abiereverie product. All rights reserved.</a>

        </div>


    
    </div>
  </section>

  
}

