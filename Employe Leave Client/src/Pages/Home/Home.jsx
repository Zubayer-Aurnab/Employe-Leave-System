import Approval from "../../Components/Approval/Approval";
import Banner from "../../Components/Banner/Banner";
import Companies from "../../Components/Companies/Companies";
import Description from "../../Components/Description/Description";
import MuchMoreSection from "../../Components/MuchMoreSection/MuchMoreSection";
import NavBar from "../../Components/NavBar/NavBar";
import TrySection from "../../Components/TrySection/TrySection";


const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Companies />
            <Description />
            <Approval />
            <TrySection />
            <MuchMoreSection />

        </div>
    );
};

export default Home;