"use client"
import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './ido.css';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const Ido = () => {
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [totalSol, setTotalSol] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleInputChange = (e) => {
    setTotalSol(e.target.value);

    if (totalSol === '')
      setErrorMsg("This field is required");
    else
      setErrorMsg("");

    if (isNaN(totalSol)) {
      console.log(`is NaN`);
      setErrorMsg("Please enter only numbers");
      return;
    }

    handleFirstInputChange(e);
  }

  const handleFirstInputChange = debounce((e) => {
    if (e.target.value.trim() !== '') {
      setShowSecondInput(true);
    } else {
      setShowSecondInput(false);
    }
  }, 1000);

  const handleFormSubmit = () => {
    if (totalSol === '')
      setErrorMsg("This field is required");
    else
      setErrorMsg("");

    if (isNaN(totalSol)) {
      console.log(`is NaN`);
      setErrorMsg("Please enter only numbers");
      return;
    }
  }

  return (
    <section className='idoSection'>
      <Grid container columns={15} sx={{
        // border: '2px solid red',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
      }}>
        <Grid item xs={5} className="idoFormContainer">
          <Typography variant="h4" className="idoHeading">$BHOOMI Token Sale</Typography>
         
          <div className="inputFieldContainer">
            <Typography variant="subtitle" sx={{ mb: 2 }}>Enter total $ Sol you want to contribute</Typography>
            <TextField
              id="outlined-basic"
              // placeholder="Enter total $ Sol you want to contribute"
              variant="outlined"
              className="inputField"
              fullWidth
              name="totalSol"
              value={totalSol}
              onChange={handleInputChange}
            />
          </div>

          {errorMsg &&
            <div className="errorMsg">
              <Typography variant="subtitle2" color="error">{errorMsg}</Typography>
            </div>
          }

          {showSecondInput && (
            <div className="inputFieldContainer">
              <Typography variant="subtitle" sx={{ mb: 2 }}>Total $ Bhoomi tokens you will receive</Typography>
              <TextField
                id="outlined-basic"
                placeholder="Total $ Bhoomi tokens you will receive"
                variant="outlined"
                className="inputField"
                name="totalBhoomi"
                value={totalSol * 100}
                fullWidth
              />
            </div>
          )}
          <Button
            variant="contained"
            className="buyBtn"
            onClick={handleFormSubmit}
            fullWidth
          >Buy</Button>

        </Grid>

        <Box className="balanceContainer" sx={{
          position: 'absolute',
          right: '1rem',
        }}>
          <Typography variant="body1" sx={{ color: 'var(--textColor)' }}>BHOOMI Balance</Typography>
          <Typography variant="h5" className="balanceAmount">100000</Typography>
        </Box>
      </Grid>

      <Box className="progressBox">
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>

    </section>
  )
}

export default Ido;