import { Grid, Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<Grid container spacing={2} className="footerDiv">
				<Grid item xs={1}></Grid>
				<Grid item xs={12} sm={5} md={6} lg={6} id="footerLogo">
					<Box sx={{ width: '25%' }}>
						<img
							src='/logo2.png'
							alt=""
							style={{ marginTop: ".5rem", }}
							id="footerImg"
						/>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={5}
					md={4}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
					className="footerIconDiv">
					<Box>
						{/* <InstagramIcon className="footerIcons" /> */}
						<TwitterIcon className="footerIcons" />
						{/* <LinkedInIcon className="footerIcons" /> */}
						<TelegramIcon className="footerIcons" />
					</Box>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
			<p className="copyrightText">© 2024 Beyond Imagination Technologies Pvt. Ltd.</p>
		</>
	);
};

export default Footer;
