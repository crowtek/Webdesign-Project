import { Box ,Typography,Button ,Stack } from "@mui/material";
import "../style/animation.css";
const NavigationBar = () => {
    return (
        <Box sx={{
            position:"fixed",
            top:"0",
            right:"0",
            height:"10vh",
            width:"100%",
            padding:"4%",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            animation: `move-down 1s both`,
            animationDelay:"3s",
            color:"#fff",
        }}>
            <Typography variant="h2">MEIK G.</Typography>
            <Stack spacing={2} direction="row" >
                <Button variant="text" sx={{color:"white"}}>PROJECTE</Button>
                <Button variant="text" sx={{color:"white"}}>ABOUT</Button>
            </Stack>
            <Button variant="outlined" sx={{borderRadius:"25px", color:"white", borderColor:"white"}}>
                AVAILABLE FOR FREELANCE
            </Button>
        </Box>
    )
}

export default NavigationBar;
