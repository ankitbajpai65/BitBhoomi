import { Typography, Box, Button } from "@mui/material";
import './description.css';

const Description = () => {
    return (
        <section style={{ marginRight: '10px' }}>
            <Box className="descriptionBox">
                <Typography variant="h5" className="subheading">
                    Highlights
                </Typography>
                <ul>
                    <li>
                        <b>Holistic Solution : </b>BitBhoomi represents a holistic solution that seamlessly integrates technology and environmental stewardship, paving the way for a more sustainable future for generations to come.
                    </li>
                    <li>
                        <b>Comprehensive Features : </b>With unique features like DMRV, revenue generation and impact reporting BitBhoomi empowers users to make a positive environmental impact while benefiting financially.
                    </li>
                    <li>
                        <b>Democratizing Tree Planting : </b>Through the introduction of digital tokens convertible into valuable carbon credits, BitBhoomi democratizes tree planting, making it accessible to individuals and organizations of all sizes.
                    </li>
                    <li>
                        <b>Revenue Generation Opportunities : </b>BitBhoomi facilitates the trading of Ownership NFTs, offering users revenue generation opportunities through sustainable project ownership.
                    </li>
                </ul>
            </Box>

            <Box className="descriptionBox">
                <Typography variant="h5" className="subheading">
                    Product
                </Typography>
                <Typography variant="body1" className="secondaryText">
                    BitBhoomi is a blockchain-based platform for sustainability projects, specifically focusing on reforestation. What sets BitBhoomi apart is its unique approach to address the challenges in current reforestation efforts. The platform leverages blockchain for transparency, offering digital monitoring, reporting, and verification (DMRV) of tree-planting initiatives using satellite mapping. By enabling tokenization, BitBhoomi allows both individuals and organizations to contribute to tree-planting campaigns, generating carbon credits that serve as passive income. This groundbreaking model not only encourages active engagement in environmental conservation but also creates tradable assets.
                </Typography>
                <Typography variant="body1" className="secondaryText">
                    BitBhoomi's commitment to democratizing and optimizing the tree-planting process via blockchain offers a transparent, traceable, and financially sustainable solution to environmental challenges.
                </Typography>
            </Box>

            <Box className="descriptionBox">
                <Typography variant="h5" className="subheading">
                    Problem
                </Typography>
                <Typography variant="h3" className="mainText">
                    Lack of quality offset projects, opaque ecosystem, and niche market involvement.
                </Typography>
            </Box>

            <Box className="descriptionBox">
                <Typography variant="h5" className="subheading">
                    Solution
                </Typography>
                <Typography variant="body1" className="secondaryText">
                    BitBhoomi stands as a trailblazer in the realm of sustainability with its distinction as the inaugural blockchain-based marketplace tailored for such projects. Its hallmark lies in the seamless provision of easily understandable impact reports, coupled with the groundbreaking capability for tokenization. This unique feature caters to a broad spectrum of stakeholders, encompassing both corporate entities and individual consumers, thereby fostering extensive participation within the sector. Through BitBhoomi, contributors stand to gain through various earning mechanisms, notably including carbon credits and green credits, augmented by the provision of a secondary market for swift investment liquidation, ensuring liquidity and accessibility.
                </Typography>
                <Typography variant="body1" className="secondaryText">
                    As the market dynamics evolve, the significance of verified, high-quality sustainability projects is poised to surge substantially. BitBhoomi, positioned at the forefront of this transformation, stands ready to meet this burgeoning demand by offering a robust platform that not only facilitates transparent and traceable transactions but also nurtures a burgeoning ecosystem of sustainability-driven initiatives. Through its innovative approach and forward-looking vision, BitBhoomi is poised to shape the future landscape of sustainability by bridging the gap between demand and supply, while concurrently driving positive environmental impact on a global scale.
                </Typography>
            </Box>

            <Box className="descriptionBox">
                <Typography variant="h5" className="subheading">
                    White Paper
                </Typography>
                <Box className="emptyBox"></Box>
                <Button variant="text" className="downloadBtn">Download</Button>
            </Box>
        </section>
    )
}

export default Description;