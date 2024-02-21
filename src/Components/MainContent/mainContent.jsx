"use client"
import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Description from "./Description/description";
import TokenSale from "./TokenSale/tokenSale";
import './mainContent.css';

const MainContent = () => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <section className="mainSection">
            <Grid container sx={{
                display: 'flex',
                gap: '2rem',
            }}>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    <nav>
                        <Typography
                            variant="body1"
                            onClick={() => setActiveTab("description")}
                            sx={{
                                cursor: 'pointer',
                                padding: '10px',
                                color: activeTab === 'description' ? 'white' : 'var(--textColor)',
                                borderBottom: activeTab === 'description' ? '1px solid var(--blueColor)' : 'none',
                            }}
                        >
                            Description
                        </Typography>
                        <Typography
                            variant="body1"
                            onClick={() => setActiveTab("token")}
                            sx={{
                                cursor: 'pointer',
                                padding: '10px',
                                color: activeTab !== 'description' ? 'white' : 'var(--textColor)',
                                borderBottom: activeTab === 'token' ? '1px solid var(--blueColor)' : 'none',
                            }}
                        >
                            Token Sale
                        </Typography>
                    </nav>
                    {
                        activeTab === 'description' ?
                            <Description />
                            :
                            <TokenSale />
                    }
                </Grid>
                <Grid item xs={3} sx={{
                    marginTop: '5.75rem',
                    background: 'var(--dark-10)',
                    height: 'fit-content',
                    borderRadius: '10px',
                }}>
                    <Box sx={{
                        margin: '2rem'
                    }}>
                        <Typography variant="body1" sx={{
                            mb: 2,
                            color: 'var(--textColor)'
                        }}>Fundraise Goal</Typography>
                        <Typography variant="h4" sx={{
                            fontWeight: 'bold',
                            textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 12px',
                            mb: 4
                        }}>$1,000,000</Typography>
                        <Typography component="div" sx={{ mb: 5 }}>
                            <span style={{ color: 'var(--textColor)' }}>Price Per Token............................... </span>
                            <span>$ 0.01</span>
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{
                        color: 'rgb(107, 129, 231)',
                        background: 'rgb(36, 46, 66)',
                        textAlign: 'center',
                        padding: '8px',
                        fontWeight: '600',
                        borderBottomLeftRadius: '10px',
                        borderBottomRightRadius: '10px',
                        mt: 5
                    }}>
                        TOKEN SALE
                    </Typography>
                </Grid>
            </Grid>
        </section>
    )
}

export default MainContent