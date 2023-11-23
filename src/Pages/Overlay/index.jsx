import { Box, Typography } from "@mui/material";
import PercentCount from "./components/PercentCount";
import MovingLetter from "../../Components/MovingLetter";

const Overlay = () => {
    return (
        <Box sx={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            background:"white",
            pb:"50px",
            lineHeight:"100px",
            overflow:"hidden",
            position:"relative"
        }}>
            <MovingLetter letter={"M"} size={"h1"} time={0.7} double={true}/>
            <MovingLetter letter={"E"} size={"h1"} time={0.6}/>
            <MovingLetter letter={"I"} size={"h1"} time={0.8}/>
            <MovingLetter letter={"K"} size={"h1"} time={0.9}/>
            <Typography p={"40px"}> </Typography>
            <MovingLetter letter={"G"} size={"h1"} time={0.7} double={true}/>
            <MovingLetter letter={"R"} size={"h1"} time={0.8}/>
            <MovingLetter letter={"Ü"} size={"h1"} time={0.7}/>
            <MovingLetter letter={"N"} size={"h1"} time={0.9}/>
            <MovingLetter letter={"H"} size={"h1"} time={1}/>
            <MovingLetter letter={"O"} size={"h1"} time={0.6}/>
            <MovingLetter letter={"L"} size={"h1"} time={0.9}/>
            <MovingLetter letter={"Z"} size={"h1"} time={0.7}/>
            <MovingLetter letter={"."} size={"h1"} time={0.6} double={true}/>
            
            <PercentCount />
        </Box>
    )
}

export default Overlay;