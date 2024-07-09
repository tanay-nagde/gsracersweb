import image from "../assets/hero2.png";
import { motion } from "framer-motion";
function Abouthome() {
  return (
    <div className="lg:pt-40 py-10 aboutus-home">
      <div className="">
        <h1 className="md:text-6xl text-4xl text-blue-300 font-bold text-center racing-sans-one-regular">
          ABOUT US
        </h1>
        <hr className="bg-blue-900  md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2   py-20 overflow-hidden ">

        <motion.div
        whileInView={{opacity: 1 , x: 0} }
        initial={{opacity: 0 , x: -100 }}
        transition={{duration: 0.5}}
        className="grid grid-cols-1 gap-12 justify-items-center  ">
        <div className=" absolute md:h-96 md:w-[28rem]  w-60 h-52  bg-blue-800 blur-xl"></div>
        <img src={image} alt="" className=" hover:scale-105 ease-in-out duration-500 md:h-96 md:w-[28rem]  w-60 h-52 rounded-xl  z-10" />
           <div><h1 className="text-4xl py-1 text-blue-300 text-center capitalize   racing-sans-one-regular ">our legacy</h1>
           <p className="text-center mx-auto w-3/4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa voluptatibus accusamus natus ex recusandae at deserunt assumenda molestias quibusdam</p></div> 

        </motion.div>

        <motion.div
        whileInView={{opacity: 1 , x: 0} }
         initial={{opacity: 0 , x: 100}}
         transition={{duration: 0.5}} className="grid grid-cols-1 gap-12 justify-items-center mt-10 md:mt-0">
            <div className="grid grid-cols-1">
            <div className=" absolute  w-60 h-52 md:h-96 md:w-[28rem]  gradient animate-gradienthero  blur-xl self-center justify-self-center"></div>
            <img src={image} alt="" className=" md:h-96 md:w-[28rem] hover:scale-105 ease-in-out duration-500  w-60 h-52 rounded-xl  z-10" />
            </div>
           
           <div className="" >
           <h1 className="text-4xl py-1 text-blue-300 text-center capitalize   racing-sans-one-regular">our teams</h1>
            <p className="text-center mx-auto w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa voluptatibus accusamus natus ex recusandae at deserunt assumenda molestias quibusdam</p>
            </div>  
        </motion.div >


      </div>
    </div>
  );
}

export default Abouthome;
