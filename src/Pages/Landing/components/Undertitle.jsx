
import { useState , useEffect } from "react";
import { Box } from "@mui/material";
import MovingLetter from "../../../Components/MovingLetter";

const Undertitle = ({startAnimation}) => {
    const [animationDelay, setAnimationDelay] = useState(false);
    useEffect(()=>{
        if(startAnimation){
            setTimeout(()=>{
                setAnimationDelay(true)
            }, 1000)
        }  
    },[startAnimation])
    return (
        <Box sx={{display:"flex", flexDirection:"column",pt:"40px"}}>
            <Box sx={{display:"flex",}}>
                <MovingLetter letter={" "} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.5} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.5} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter letter={" "} size={"h4"} time={1.5} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"C"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"R"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"A"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"T"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"V"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.5} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"T"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"H"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"K"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"G"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                
                <MovingLetter letter={" "} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"A"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"D"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"P"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"R"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"O"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"B"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"L"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"M"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
            </Box>
            <Box sx={{display:"flex",}}>
                <MovingLetter newLetter={"S"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"O"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"L"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"V"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"G"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.5} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"A"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"R"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"W"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"H"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"R"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                
                <MovingLetter newLetter={""} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"M"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"Y"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"M"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"D"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"W"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"A"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"D"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"R"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"S"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
            </Box>
            <Box sx={{display:"flex",}}>
                <MovingLetter newLetter={"U"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"S"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"G"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.5} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"M"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"Y"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"K"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"O"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"W"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"L"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"D"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"G"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                
                <MovingLetter newLetter={""} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"A"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"D"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"P"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"A"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"S"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"S"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"O"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"F"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"O"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"R"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
            </Box>
            <Box sx={{display:"flex",}}>
                <MovingLetter newLetter={"D"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"S"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"N"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"G"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1.5} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"A"} size={"h4"} time={1.8} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"S"} size={"h4"} time={1.9} double={true} startAnimation={animationDelay}/>

                <MovingLetter letter={" "} size={"h4"} time={1} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"M"} size={"h4"} time={1.1} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"Y"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                
                <MovingLetter newLetter={""} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>

                <MovingLetter newLetter={"M"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"E"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"D"} size={"h4"} time={1.4} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"I"} size={"h4"} time={1.7} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"U"} size={"h4"} time={1.2} double={true} startAnimation={animationDelay}/>
                <MovingLetter newLetter={"M"} size={"h4"} time={1.3} double={true} startAnimation={animationDelay}/>
            </Box>
        </Box>
    )
}

export default Undertitle;