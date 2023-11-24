import { useState } from "react";
import { Box } from "@mui/material";
import MovingLetter from "../../Components/MovingLetter";

const Landing = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    setTimeout(()=>{
        setStartAnimation(true)
    },3200);
    
    return (
        <Box sx={{
            color:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            height:"100vh"
        }}>
            <Box sx={{display:"flex",}}>
                <MovingLetter letter={"M"} size={"h1"} time={0.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"U"} size={"h1"} time={0.8} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"L"} size={"h1"} time={0.9} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"L"} size={"h1"} time={1} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"T"} size={"h1"} time={1.2} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.3} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"-"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
            </Box>

            <Box sx={{display:"flex",}}>
                <MovingLetter letter={"D"} size={"h1"} time={0.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={0.8} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"S"} size={"h1"} time={0.9} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"C"} size={"h1"} time={1} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.1} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"P"} size={"h1"} time={1.2} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"L"} size={"h1"} time={1.3} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"N"} size={"h1"} time={0.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"A"} size={"h1"} time={0.8} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"R"} size={"h1"} time={0.9} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"Y"} size={"h1"} time={1} double={true} startAnimation={startAnimation}/>
            </Box>

            <Box sx={{display:"flex",}}>
                <MovingLetter letter={"D"} size={"h1"} time={0.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"E"} size={"h1"} time={0.8} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"S"} size={"h1"} time={0.9} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"G"} size={"h1"} time={1.1} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"N"} size={"h1"} time={1.2} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"N"} size={"h1"} time={1.3} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"E"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"R"} size={"h1"} time={1.5} double={true} startAnimation={startAnimation}/>
            </Box>
        </Box>
    )
}

export default Landing;