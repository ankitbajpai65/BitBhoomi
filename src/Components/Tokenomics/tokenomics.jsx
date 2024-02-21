import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import tokenomics from '../../../public/tokenomics.png';

const Tokenomics = () => {
  return (
    <section>
      <Typography variant="h2" sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '4rem 0'
      }}>Tokenomics</Typography>

      <Grid container sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '6rem',
      }}>
        <Grid item xs={7}>
          <Box>
            <Image src={tokenomics} alt="tokenomics" />
          </Box>
        </Grid>
      </Grid>
    </section>
  )
}

export default Tokenomics;