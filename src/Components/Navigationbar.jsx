import { Box  } from "@mui/material";
import "../style/animation.css";
const NavigationBar = () => {
    return (
        <Box sx={{
            position:"fixed",
            top:"0",
            right:"0",
            height:"10vh",
            width:"100%",
            padding:"20xp",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            animation: `move-down 1s both`,
            animationDelay:"3s",
            color:"white",
        }}>
            <Box>MG.</Box>
            <Box>button1 button2</Box>
            <Box>Button 3</Box>
        </Box>
    )
}

export default NavigationBar;
