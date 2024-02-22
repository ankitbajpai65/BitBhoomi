import { Typography, Box } from "@mui/material";
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
                {/* <Typography variant="body3" sx={{ fontWeight: 'bold' }}>Coming soon...</Typography> */}
                <Box className="timerBox">
                    {/* <Typography variant="body1" component="div">IDO Countdown</Typography> */}
                    <Typography variant="body1" component="span" className="timer">12d : 20hr : 32min</Typography>
                </Box>
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