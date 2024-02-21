'use client';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { TimelineOppositeContent } from "@mui/lab";
import TimelineDot from '@mui/lab/TimelineDot';
import { useTheme } from '@mui/system';
import { useMediaQuery, Typography } from '@mui/material';
import "./roadmap.css";

const headingStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    mb: 4
}

const Roadmap = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className="roadSection">
            <Typography variant='h2' sx={headingStyle}>Roadmap</Typography>
            <br></br>
            <br></br>
            <div className="roadmap">
                <Timeline position={isSmallScreen ? 'right' : 'alternate'}>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ textAlign: "center", py: 3 }}>
                            <img className="RBG1" src="/tree2.png" />
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="dot" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="Q1">
                                <h1>Quarter 1</h1>
                                <h2>BitBhoomi Beta Launch</h2>
                                <p>The beta version of BitBhoomi will be released, allowing users to test and provide feedback on the platform before its official launch.</p>
                                <h2>IDO Token Launch (Community Sale)</h2>
                                <p>The projects token will be offered for sale to the community through a decentralized exchange. This will allow community members to participate in the projects growth</p>
                                <h2>Token Listing on Decentralized Exchange</h2>
                                <p>After the IDO, the projects token will be listed on a decentralized exchange, making it available for trading among users.</p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ textAlign: "center !important", py: 3 }}>
                            <img className="RBG2" src="/tree3.png"></img>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="dot"></TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="Q2">
                                <h1>Quarter 2</h1>
                                <h2>BitBhoomi Mainnet Launch</h2>
                                <p>This is the official launch of the BitBhoomi platform on the mainnet, meaning it will be fully operational and accessible to users.</p>
                                <h2>Token Listing on Centralized Exchanges</h2>
                                <p>The projects token will be listed on centralized exchanges, providing more opportunities for users to trade and access the token.</p>
                                <h2>Onboarding of Projects</h2>
                                <h2>Partnerships and Collaborations</h2>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="dot" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="Q3">
                                <h1>Quarter 3</h1>
                                <h2>Global Expansion</h2>
                                <h2>NFT Trading Marketplace</h2>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className="dot" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="Q4">
                                <h1>Quarter 4</h1>
                                <h2>Platform Scaling</h2>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    )
}
export default Roadmap