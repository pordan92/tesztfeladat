import MainInfoBar from "../components/block1 comps/MainInfoBar"
import NavBar from "../components/block1 comps/NavBar"
import Slider from "../components/block1 comps/Slider"

const Block1 = () => {
    return(
        <div className="flex flex-col items-center">
            <NavBar/>
            <Slider/>
            <MainInfoBar/>
        </div>
    )
}

export default Block1;