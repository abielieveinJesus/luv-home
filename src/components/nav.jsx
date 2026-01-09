
import { useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { LetterText, Mail, Menu, MessageCircleHeart, X } from 'lucide-react';
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react"
import luvlogo from '../assets/luvlogo.png'

export const Nav = () => {

  const logo = luvlogo


     useGSAP(() => {

         gsap.fromTo('.navi', {
                        opacity:0
                }, 
                {
                        opacity:1,
                        duration:1,
                        delay:1,
                        ease: 'power1.inOut', 
                })

           


      

     }, []);


      //Contact Form logic
    
    const [MenuOpen, setMenuOpen] = useState(false);
    
     const openMenu = () => {
        setMenuOpen(true)
    
       
    
    
      }
    
      const closeMenu = () => {
        setMenuOpen(false)
        
        
      }



    return ( 
    
     <nav className="navi sticky top-2 w-full z-100 border-none h-0 bg-transparent ">
    <div className="nav border-none flex items-center justify-center ">
      
      <div className="flex flex-row absolute bg-white/70 hover:bg-white rounded-full px-5 backdrop-blur-xl  md:left-3 top-4 cursor-pointer  transtion-all duration-200">
         <img src={logo} className="sm:h-12 sm:w-12 h-9 w-9  "></img>
         <h1 className="fugaz sm:text-[30px] text-xl text-red-800 tracking-[-1px] ml-1 sm:mt-2 mt-2">LUV</h1>
      </div>
     
    
      {/*nav*/}  
       <div className='hidden md:flex z-10 absolute gap-5 top-4 rounded-full backdrop-blur-xl bg-[#c5c4c1]/45 p-2 px-4 '>
        <a className='text-md   text-[#050205] transition-all duration-200 cursor-pointer bg-white/90 rounded-full px-4 py-1.5'>Home</a>
         <a className='text-md   text-[#050205] transition-all duration-200 cursor-pointer hover:bg-white/50 rounded-full px-4 py-1.5'>Installation</a>
         <a className='text-md  text-[#050205] transition-all duration-200 cursor-pointer hover:bg-white/50 rounded-full px-4 py-1.5'>Support us</a>
          
       </div>

       <div className=' text-white hidden md:flex z-10 absolute gap-7 right-3 top-4 rounded-full backdrop-blur-xl bg-[#050205] p-3 px-5 hover:scale-103 transition-all duration-200 cursor-pointer'>
        <Mail></Mail>
       
       </div>

        {/*nav*/}  
       <div onClick={openMenu} className='md:hidden flex z-10 absolute gap-7 top-5 right-6 hover:scale-103 transition-all duration-200'>
        <div className='text-md exo2 hover:opacity-50 text-[#8b8986] transition-all duration-200 cursor-pointer '><Menu></Menu></div>
         
       </div>

         {/*Mobile Nav */}
          <AnimatePresence>
                  {MenuOpen && ( 
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                     className="fixed inset-0  flex flex-col items-center justify-center bg-[#ebebeb]  bg-[linear-gradient(to_right,#80808028_1px,transparent_1px),linear-gradient(to_bottom,#80808028_1px,transparent_1px)] bg-size-[24px_24px] backdrop-blur-2xl z-100">  
                    
                    <div onClick={closeMenu} className='absolute top-6 right-6 cursor-pointer text-red-800'> 
                      <X></X>
                    </div>
                   
                    <div className='flex flex-col items-center justify-center gap-5 w-screen text-[#050205] '>
                      <a className='text-xl cursor-pointer bg-white/90 rounded-full flex items-center justify-center w-3/5  h-12 hover:scale-103 transition-all duration-200'>Home</a>
                      <a className='text-xl cursor-pointer bg-white/90 rounded-full flex items-center justify-center w-3/5  h-12 hover:scale-103 transition-all duration-200'>Installation</a>
                      <a className='text-xl cursor-pointer bg-white/90 rounded-full flex items-center justify-center w-3/5  h-12 hover:scale-103 transition-all duration-200'>Support Us</a>
                      
                       <a className='text-xl cursor-pointer bg-[#050205] text-white rounded-full flex items-center justify-center w-3/5 h-12 mt-10 hover:scale-103 transition-all duration-200'>Contact Us</a>
                    </div>
                     

                    </motion.div>
                    
                  )}
               </AnimatePresence>
           
    </div>
  </nav>
    
    );
  }