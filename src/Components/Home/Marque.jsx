
import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <Marquee
            // Animation
            speed={70}                    
            delay={0}                   
            direction="right"              // "left" | "right" | "up" | "down" (default: "left")


          
            className="text-[12vw] text-black bg-red-600 font-black font-dmsans "
            style={{}}                   
            gradient={true}              
            gradientColor="red"           
            gradientWidth={100}           // Gradient width in pixels (default: 200)

            autoFill={true}              // Auto-fill to fill container width (default: false)
        >
            <h1>&nbsp;&nbsp;3D Design&nbsp;&nbsp;-</h1>
            <h1>&nbsp;&nbsp;Character Modeling&nbsp;&nbsp;-</h1>
            <h1>&nbsp;&nbsp;Game-Ready Assets&nbsp;&nbsp;-</h1>
            <h1>&nbsp;&nbsp;Visual Specialist&nbsp;&nbsp;-</h1>
            <h1>&nbsp;&nbsp;Texturing&nbsp;&nbsp;-</h1>
        </Marquee>
    );
};

export default Marque;