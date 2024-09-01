import Banner from "../../Components/Banner/Banner";
import Companies from "../../Components/Companies/Companies";
import Description from "../../Components/Description/Description";
import NavBar from "../../Components/NavBar/NavBar";


const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Companies />
            <Description />

        </div>
    );
};

export default Home;