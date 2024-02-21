import { Typography } from "@mui/material";
import Carousel from "../Carousel/carousel";
import MainContent from "../MainContent/mainContent";
import Team from "../Team/team";
import Roadmap from "../Roadmap/roadmap";
import Tokenomics from "../Tokenomics/tokenomics";
import './home.css';

const Home = () => {
    return (
        <>
            <section className="homeSection">
                <Typography variant="h2" className="homeText" sx={{ color: 'var(--blueColor)' }}>Welcome to BitBhoomi IDO Landing Page</Typography>
                <Typography variant="h4" className="homeText">Where Technology Meets Sustainability</Typography>
                <Typography variant="body3" sx={{ fontWeight: 'bold' }}>Coming soon...</Typography>
            </section>

            <Carousel />
            <MainContent />
            <Team />
            <Roadmap />
            <Tokenomics />
        </>
    )
}

export default Home;