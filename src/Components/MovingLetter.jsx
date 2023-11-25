
import { Box, Typography } from "@mui/material";
import "../style/animation.css";

const MovingLetter = ({ letter, time = 0.5, size, double, startAnimation, newLetter }) => {

    return (
        <Box sx={{height: size === "h4" ? "25px" : "165px", overflow: 'hidden',}}>
            <Typography variant={size} sx={{
                animation: startAnimation ? `move-up ${time}s both, lose-width-complete 1s 0.5s both` : "none",
            }}>
                {letter === " " || newLetter ? <Typography p={"3px"} height={"24px"}></Typography> : letter}
            </Typography>

            
            {double && 
                <Typography variant={size} sx={{
                    animation: startAnimation ? `move-up-from-down 1s both` : "none",
                }}>
                    {newLetter ? newLetter : letter === " " ? <Typography p={"3px"}></Typography> : letter}
                </Typography>
            }
        </Box>
    );
}

export default MovingLetter;
