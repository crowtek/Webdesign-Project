import { useState } from "react";
import { Box } from "@mui/material";
import Title from "./components/Title";
import PageNumer from "../../Components/PageNumber";

const Landing = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    setTimeout(()=>{
        setStartAnimation(true)
    },3300);
    
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
            <PageNumer startAnimation={startAnimation}/>
        </Box>
    )
}

export default Landing;