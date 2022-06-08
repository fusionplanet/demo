import * as React from "react";
import { useState } from "react";
import classNames from "classnames";
import { Box, Grid, TextField, Slider, Typography, IconButton, Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { formatCcy, handleInvalidValue } from "../../utils";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

const FREE_TARGETS = 10;
const COST_PER_TARGET = 10;
const HIGH_AVAILABILITY_TARGETS = 100;
const UNLIMITED_TARGETS = 2001;
const UNLIMITED_PRICE = "192,000";

const isChargedTargets = (valueTargets: number | string): boolean => {
  return valueTargets > FREE_TARGETS;
};

const Server = () => {
  // Styling
  const classes = useStyles();

  // Deployment Targets
  const [valueTargets, setValueTargets] = useState(FREE_TARGETS);

  const decrementCount = () => {
    if (valueTargets > 10 ) {
      setValueTargets(valueTargets - 10);
      setLastTargetsSliderVal(valueTargets);
    }
  };
  
  const incrementCount = () => {
    if (valueTargets < 5000) {
      setValueTargets(valueTargets + 10);
      setLastTargetsSliderVal(valueTargets)
    }
  };

  const handleSliderChange = (event: any, newValue: any) => {
    setValueTargets(newValue);
    setLastTargetsSliderVal(valueTargets);
  };

  const handleBlur = () => {
    if (valueTargets < 0) {
      setValueTargets(0);
    } else if (valueTargets > 10000) {
      setValueTargets(10000);
    }
  };

  // Single spot where targets slider value to be set by the user
  const updateUserTargets = (valueTargets: number) => {
    setValidTargets(valueTargets); // update display value
    setLastTargetsSliderVal(valueTargets); // remember user's last value

    // reset checkbox if targets slider value is not eligible to HA
    if (valueTargets < HIGH_AVAILABILITY_TARGETS) {
      setHaCheckboxVal(false);
    }
  };
  const setValidTargets = (num: number) => {
    let vaildVal = handleInvalidValue(num);
    setValueTargets(vaildVal);
  };

  // High Availablity
  const [LastTargetsSliderVal, setLastTargetsSliderVal] = useState(
    FREE_TARGETS
  );
  const [haCheckboxVal, setHaCheckboxVal] = useState(false);
  const isEligibleHA = valueTargets >= HIGH_AVAILABILITY_TARGETS;
  const renderHaChecked = haCheckboxVal || isEligibleHA;
  const highAvailabilityCheck = (e: { target: { checked: any } }) => {
    // Updating checkbox state
    const newHaCheckboxVal = e.target.checked;
    setHaCheckboxVal(newHaCheckboxVal);
    // [ ] => [x]
    if (newHaCheckboxVal) {
      // Set high availablility value
      if (valueTargets < HIGH_AVAILABILITY_TARGETS) {
        setValueTargets(HIGH_AVAILABILITY_TARGETS);
      }
    } else {
      // [x] => [ ]
      // Reset to user's last input value
      setValueTargets(LastTargetsSliderVal);
    }
  };

  // Unlimited Targets
  const [
    unlimitedTargetsCheckboxVal,
    setUnlimitedTargetsCheckboxVal,
  ] = useState(false);
  const isEligibleUnlimited = valueTargets >= UNLIMITED_TARGETS;
  const renderUnlimitedTargetsChecked =
    unlimitedTargetsCheckboxVal || isEligibleUnlimited;
  const unlimitedTargetsCheck = (e: { target: { checked: any } }) => {
    // Updating checkbox state
    const newUnlimitedTargetsCheckboxVal = e.target.checked;
    setUnlimitedTargetsCheckboxVal(newUnlimitedTargetsCheckboxVal);
    // [ ] => [x]
    if (newUnlimitedTargetsCheckboxVal) {
      // Set unlimited target value
      if (valueTargets < UNLIMITED_TARGETS) {
        setValueTargets(UNLIMITED_TARGETS);
      }
    } else {
      // [x] => [ ]
      // Reset to user's last input value
      setValueTargets(LastTargetsSliderVal);
    }
  };

  // Calculations
  const calcChargedTargets = (valueTargets: any) => {
    if (isChargedTargets(valueTargets)) {
      return valueTargets - FREE_TARGETS;
    } else {
      return 0;
    }
  };

  const targetsPrice = calcChargedTargets(valueTargets) * COST_PER_TARGET;
  const totalPrice = targetsPrice;

  return (
    <>
      <Card className="price-card col-lg-6 col-xl-4" elevation={0} style={{ boxShadow: 'none', backgroundColor : 'transparent', overflow: 'initial' }}>
        <CardContent className="pricing-box pricing-cloud d-flex flex-column shadow-md rounded px-3 pb-4 pt-5 text-center bg-white rounded-lg">
          <Box>
            <h2 className="mt-0 mb-3 fs-30"><a href="#">Server</a></h2>
            <p>Octopus on your infrastructure</p>
            <p>
              <span className="price fs-30">
                {renderUnlimitedTargetsChecked
                  ? UNLIMITED_PRICE
                  : formatCcy(totalPrice)}
              </span>
              <span className="price-qualifier fs-16"> / Month</span>
            </p>
            <Box sx={{ justifyContent: 'center' }}>
              {renderUnlimitedTargetsChecked ? null : (
                  <Grid>
                    <Typography className="color-text-muted small">Deployment targets</Typography>
                    <Box width={200} sx={{ display: 'inline-flex' }}>
                      <IconButton className="input-group-append btn btn-outline-secondary btn-number" onClick={decrementCount} onMouseUp={handleBlur}>
                        <RemoveCircleOutlineIcon/>
                      </IconButton>
                      <TextField
                        className="form-control input-number"
                        variant="outlined"
                        value={valueTargets}
                        margin="dense"
                        onChange={(e) =>
                          updateUserTargets(parseInt(e.target.value, 10))
                        }
                        onBlur={handleBlur}
                        inputProps={{
                          inputMode: 'numeric', 
                          pattern: '[0-9]*',
                          step: 10,
                          min: 10,
                          max: 2000,
                          "aria-labelledby": "input-slider",
                        }}
                      />
                      <IconButton className="input-group-append btn btn-outline-secondary btn-number" onClick={incrementCount} onMouseUp={handleBlur}>
                        <AddCircleOutlineIcon/>
                      </IconButton>
                    </Box>
                    <Box width={200} m="auto">
                      <Slider
                        value={valueTargets}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        min={10}
                        max={2000}
                        style={{ boxShadow: 'none', backgroundColor : 'transparent', overflow: 'initial' }}
                      />
                    </Box>
                  </Grid>
                )}
            </Box>          
            <Grid item>
                <FormControlLabel className="color-text-muted small"
                  control={
                    <Checkbox
                      checked={renderUnlimitedTargetsChecked}
                      onChange={unlimitedTargetsCheck}
                      name="unlimitedTargets"
                    />
                  }
                  label="Unlimited Targets"
                />
            </Grid>
          </Box>
          <div className="pricing-cta" style={{marginTop: '59px'}}>
            <a href="/" className="btn btn-success btn-lg">
                Start a trial
                <span>
                    <svg className='hover-arrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                        <g fillRule='evenodd'>
                            <path className='hover-arrow-line' d='M0 5h7'></path>
                            <path className='hover-arrow-tip' d='M1 1l4 4-4 4'></path>
                        </g>
                    </svg>
                </span>
            </a>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default Server;
