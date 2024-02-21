import { Typography, Box } from "@mui/material";
import './tokenSale.css';

const TokenSale = () => {
    return (
        <section className="tokenSection">
            <Box className="tokenMainBox">
                <Box className="tokenBoxHead">
                    <Typography variant="h5">Token Sale</Typography>
                </Box>
                {[
                    { label: "Initial Token Circulation", value: "10,000,000" },
                    { label: "Price Per Token", value: "$ 0.10" },
                    { label: "Initial Marked Cap", value: "$ 1m" },
                    { label: "Total Max Supply", value: "$ 100,000,000" },
                    { label: "Sale Start Time", value: "TBA" },
                    { label: "Sale End Time", value: "TBA" },
                    { label: "Total Distribution Time", value: "TBA" }
                ].map((item, index) => (
                    <Box key={index} className="tokenBox">
                        <Typography className="text">{item.label}</Typography>
                        <Typography>{item.value}</Typography>
                    </Box>
                ))}
            </Box>
        </section>
    )
}

export default TokenSale