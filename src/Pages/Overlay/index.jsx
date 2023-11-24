import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PercentCount from "./components/PercentCount";
import MovingLetter from "../../Components/MovingLetter";
import "../../style/animation.css";

const Overlay = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    return (
        <Box sx={{
            position:"absolute",
            bottom:"0",
            left:"0",
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            background:"white",
            pb:"50px",
            lineHeight:"100px",
            overflow:"hidden",
            position:"relative",
            zIndex:"5",
            animation: startAnimation ? `lose-height 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both, hidde 1s 3s both` : "none",
            animationDelay:"1.3s",
            color:"black"
        }}>
            <MovingLetter letter={"M"} size={"h1"} time={0.7} double={true} startAnimation={startAnimation}/>
            <MovingLetter letter={"E"} size={"h1"} time={0.6} startAnimation={startAnimation}/>
            <MovingLetter letter={"I"} size={"h1"} time={0.8} startAnimation={startAnimation}/>
            <MovingLetter letter={"K"} size={"h1"} time={0.9} startAnimation={startAnimation}/>
            <Typography
                sx={{
                    width:"40px",
                    animation: startAnimation ? `lose-width 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both` : "none",
                    animationDelay:"0.6s"
                }}>
            </Typography>
            <MovingLetter letter={"G"} size={"h1"} time={0.7} double={true} startAnimation={startAnimation}/>
            <MovingLetter letter={"R"} size={"h1"} time={0.8} startAnimation={startAnimation}/>
            <MovingLetter letter={"Ü"} size={"h1"} time={0.7} startAnimation={startAnimation}/>
            <MovingLetter letter={"N"} size={"h1"} time={0.9} startAnimation={startAnimation}/>
            <MovingLetter letter={"H"} size={"h1"} time={1} startAnimation={startAnimation}/>
            <MovingLetter letter={"O"} size={"h1"} time={0.6} startAnimation={startAnimation}/>
            <MovingLetter letter={"L"} size={"h1"} time={0.9} startAnimation={startAnimation}/>
            <MovingLetter letter={"Z"} size={"h1"} time={0.7} startAnimation={startAnimation}/>
            <MovingLetter letter={"."} size={"h1"} time={0.6} double={true} startAnimation={startAnimation}/>
            
            <PercentCount setStartAnimation={setStartAnimation} />
        </Box>
    )
}

export default Overlay;