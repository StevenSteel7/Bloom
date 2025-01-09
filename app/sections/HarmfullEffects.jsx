'use client';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

/* const animationOrder = {
  initial: 0,
  onleft: 0.2,
  onright: 0.7,
  end: 1,
}; */

const HarmfullEffects = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });


  //for smartphone
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2,  0.70, 1], // PERCENTAGE OF SCROLL
    [1, 2.5,    2.5, 1]    // SCALE
  );

  const opacity = useTransform(scrollYProgress, 
    [0, 0.5,0.75,1],  // PERCENTAGE OF SCROLL 
    [1, 1,    0, 0]);        // PERCENTAGE OF opacity 
 
   const x = useTransform(
    scrollYProgress,
    [0.1,      0.2,   0.35,    0.42,    1],   // PERCENTAGE OF SCROLL
    ["0vw", "-35vw","-35vw", "35vw","35vw" ] // X POSITION
  );

  




  const FacebookScale = useTransform(
    scrollYProgress,
    [ 0.10, 0.15, ],
    [ 0, 1,  ]
  );

  const FacebookOpacity = useTransform(
    scrollYProgress,
    [ 0.10, 0.15 ,0.3,0.35 ],
    [ 0, 1 ,1,0 ]
  );


  const TwitterScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.45],
    [0, 0, 1]
  );

  const TwitterOpacity = useTransform(
    scrollYProgress,
    [ 0.75,0.80 ],
    [ 1 ,0 ]
  );



  const item1Op = useTransform(
    scrollYProgress,
    [ 0.10, 0.15 ,0.20],
    [ 0, 1 , 0 ]
  );
  const item1Y = useTransform(
    scrollYProgress,
    [ 0  , 0.15 ,0.3,0.23],
    ["-34rem", "-34rem", "-44rem","-144rem" ]
  );

  const item2Op = useTransform(
    scrollYProgress,
    [ 0.25, 0.30 ,0.35,],
    [ 0, 1 , 0 ]
  );
  const item2Y = useTransform(
    scrollYProgress,
    [ 0.25   ,0.3, 0.45],
    ["-48 rem", "-48rem","-54rem" ]
  );

  const item3Op = useTransform(
    scrollYProgress,
    [0.45 , 0.53, 0.76],
   
    [0, 1, 0]
  );
  const item3Y = useTransform(
    scrollYProgress,
    [
      0.45, 0.53, 0.65
   ],
   ["-58 rem", "-60rem","-64rem" ]
  );

  const item4Op = useTransform(
    scrollYProgress,
    [0.65 , 0.73, 0.76],
   
    [0, 1, 0]
  );
  const item4Y = useTransform(
    scrollYProgress,
    [
      0.65, 0.73, 0.85
   ],
   ["-58 rem", "-60rem","-64rem" ]
  );

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 0.1 ? "relative" : "fixed"
  );

  return (
   <section  className="mt-[-30vh]">
    <div  ref={targetRef} className="h-[800vh] w-full ">
                    {/* so we can keep on scrolling */}
      <div className="sticky top-[10vh]">
        <div className="flex justify-center">
          <div className="origin-top">
            <motion.img
              style={{ scale, x ,opacity}}
              src="/Vector.svg"
              className="h-[80vh] w-auto"/>
            
            
            
          
                <motion.img
                  style={{ scale: FacebookScale , opacity: FacebookOpacity }}
                  className=" absolute right-[140%] top-[1.5%] 
                              h-[10vw] w-[10vw] rounded-md object-cover"
                  src="/facebook.png"
                  alt="Facebook Icon" 
                />


                <motion.img
                  style={{ scale: TwitterScale, opacity: TwitterOpacity }}
                  className=" absolute left-[140%] top-[1.5%]
                  h-[10vw] w-[10vw] rounded-3xl bg-white  object-cover"
                 src="/twitter.png"
                />
          </div>

        </div>

        <motion.p
          style={{
            opacity: item1Op,
            y: item1Y,
            position,
          }}
          className="right-[-20rem] w-[400px] pr-16 text-5xl font-bold text-white"
        >
          Emotional Amplification:
          <br />
          <span className="text-[#dcff50] text-3xl ">
          Social apps get high engagement rates from emotionally charged content
          </span>
        </motion.p>

        <motion.div
          style={{
            opacity: item2Op,
            y: item2Y,
            position,
          }}
          className="right-[-20rem] w-[400px] pr-16 text-5xl font-bold text-white"
        >
          Exploits FOMO
          <br />
          <span className="text-[#dcff50] text-2xl ">
          <ul className="list-disc list-inside mt-4">
                <li>Prioritizes posts that evoke strong emotions .</li>
                <li>Leverages high engagement rates from emotionally charged content.</li>
              </ul>
          </span>
        </motion.div>
     
        <motion.div
          style={{
            opacity: item3Op,
            y: item3Y,
            position,
          }}
          className="right-[15rem]  w-[400px] pr-16 text-5xl font-bold text-white"
        >
          Gamified Interactions🎮
          <br />
          <span className="text-[#dcff50] text-2xl ">
            Say something controversial - "Go viral".
          </span>
        </motion.div>


        <motion.div
          style={{
            opacity: item4Op,
            y: item4Y,
            position,
          }}
          className="right-[15rem]  w-[400px] pr-16 text-5xl font-bold text-white"
        >
          Infinite Scrolling♾️
          <br />
          <span className="text-[#dcff50] text-2xl ">
            Main Culprit of <br/>   
            Doom Scrolling
          </span>
        </motion.div>
      </div>
      
    </div>

   </section>
  );
};

export default HarmfullEffects;