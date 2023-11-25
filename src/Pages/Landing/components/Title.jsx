import { Box } from "@mui/material";
import MovingLetter from "../../../Components/MovingLetter";
import Undertitle from "./Undertitle";

const Title = ({startAnimation}) => {
    return (
        <>
            <Box sx={{display:"flex",}}>
                <MovingLetter letter={"M"} size={"h1"} time={1.2} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"U"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"L"} size={"h1"} time={1.5} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"L"} size={"h1"} time={1.6} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"T"} size={"h1"} time={1.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.5} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"-"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
            </Box>

            <Box sx={{display:"flex",}}>
                <MovingLetter letter={"D"} size={"h1"} time={1.3} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"S"} size={"h1"} time={1.5} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"C"} size={"h1"} time={1.6} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"P"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"L"} size={"h1"} time={1.5} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.6} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"N"} size={"h1"} time={1.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"A"} size={"h1"} time={1.8} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"R"} size={"h1"} time={1.9} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"Y"} size={"h1"} time={1.3} double={true} startAnimation={startAnimation}/>
            </Box>

            <Box sx={{display:"flex",}}>
                <MovingLetter letter={"D"} size={"h1"} time={1.7} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"E"} size={"h1"} time={1.8} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"S"} size={"h1"} time={1.9} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"I"} size={"h1"} time={1.3} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"G"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"N"} size={"h1"} time={1.2} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"N"} size={"h1"} time={1.3} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"E"} size={"h1"} time={1.4} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={"R"} size={"h1"} time={1.5} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={" "} size={"h1"} time={1.6} double={true} startAnimation={startAnimation}/>
                <MovingLetter letter={" "} size={"h1"} time={1.8} double={true} startAnimation={startAnimation}/>

                <Undertitle startAnimation={startAnimation}/>

            </Box>


        </>
    )
}
export default Title;