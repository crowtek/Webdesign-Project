import { Box, Typography } from "@mui/material";
import "../style/animation.css";

const MovingLetter = ({ letter, time = 0.5, size, double }) => {
    return (
        <Box sx={{height:"165px",overflow: 'hidden'}}>
            <Typography variant={size} sx={{
                animation: `move-up ${time}s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
            }}>
                {letter}
            </Typography>
            
            {double && 
                <Typography variant={size} sx={{
                    animation: `move-up-from-down 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
                }}>
                    {letter}
                </Typography>
            }

        </Box>

    );
}

export default MovingLetter;