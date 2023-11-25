import { useState } from "react";
import { Box } from "@mui/material";
import Title from "./components/Title";

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
            <Title startAnimation={startAnimation}/>
        </Box>
    )
}

export default Landing;