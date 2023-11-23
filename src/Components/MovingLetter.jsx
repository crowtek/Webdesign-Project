
import { Box, Typography } from "@mui/material";
import "../style/animation.css";

const MovingLetter = ({ letter, time = 0.5, size, double, startAnimation }) => {

    return (
        <Box sx={{height:"165px", overflow: 'hidden',}}>
            <Typography variant={size} sx={{
                animation: startAnimation ? `move-up ${time}s cubic-bezier(0.455, 0.030, 0.515, 0.955) both, lose-width-complete 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1.5s both` : "none",
            }}>
                {letter}
            </Typography>

            
            {double && 
                <Typography variant={size} sx={{
                    animation: startAnimation ? `move-up-from-down 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both` : "none",
                }}>
                    {letter}
                </Typography>
            }
        </Box>
    );
}

export default MovingLetter;
