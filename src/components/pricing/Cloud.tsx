import * as React from "react";
import { useState } from "react";
import { Box, TextField, Slider, Typography, IconButton, Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { formatCcy, handleInvalidValue } from "../../utils";

import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42, // 42
  },
});

const FREE_TARGETS = 10;
const FREE_MINUTES = 100;
const COST_PER_TARGET = 10;
const COST_PER_MINUTE = 0.03;
const HIGH_AVAILABILITY_TARGETS = 100;

const isChargedTargets = (valueTargets: number | string): boolean => {
  return valueTargets > FREE_TARGETS;
};

const isChargedMinutes = (valueMinutes: number | string): boolean => {
  return valueMinutes > FREE_MINUTES;
};

const Cloud = () => {
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
    if (valueTargets < 10) {
      setValueTargets(10);
    } else if (valueTargets > 5000) {
      setValueTargets(5000);
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

  // Deployment minutes
  const [valueMinutes, setValueMinutes] = useState(FREE_MINUTES);

  const decrementMinutes = () => {
    if (valueMinutes > 100 ) {
      setValueMinutes(valueMinutes - 100);
    }
  };
  
  const incrementMinutes = () => {
    if (valueMinutes < 10000) {
      setValueMinutes(valueMinutes + 100);
    }
  };

  const handleSliderChangeMinutes = (event: any, newValue: any) => {
    setValueMinutes(newValue);
  };

  const handleBlurMinutes = () => {
    if (valueMinutes < 0) {
      setValueMinutes(0);
    } else if (valueMinutes > 10000) {
      setValueMinutes(10000);
    }
  };
  const setValidMinutes = (num: number) => {
    let vaildVal = handleInvalidValue(num);
    setValueMinutes(vaildVal);
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

  // Calculations
  const calcChargedTargets = (valueTargets: any) => {
    if (isChargedTargets(valueTargets)) {
      return valueTargets - FREE_TARGETS;
    } else {
      return 0;
    }
  };

  const calcChargedMinutes = (valueMinutes: any) => {
    if (isChargedMinutes(valueMinutes)) {
      return valueMinutes - FREE_MINUTES;
    } else {
      return 0;
    }
  };

  const targetsPrice = calcChargedTargets(valueTargets) * COST_PER_TARGET;
  const minutesPrice = calcChargedMinutes(valueMinutes) * COST_PER_MINUTE;
  const totalPrice = targetsPrice + minutesPrice;

  return (
    <Card className="price-card col-lg-6 col-xl-4" elevation={0} style={{ boxShadow: 'none', backgroundColor : 'transparent', overflow: 'initial' }}>
        <CardContent className="pricing-box pricing-cloud d-flex flex-column shadow-md rounded px-3 pb-4 pt-5 text-center bg-white rounded-lg">
          <h2 className="mt-0 mb-3 fs-30"><a href="#">Cloud</a></h2>
          <p>DevOps automation as-a-service</p>
          <p>
            <span className="price fs-30">
              {formatCcy(totalPrice)}
            </span>
            <span className="price-qualifier fs-16"> / Month</span>
          </p>

          <Box sx={{ justifyContent: 'center' }}>
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
                  max: 5000,
                  "aria-labelledby": "input-slider",
                }}
              />
              <IconButton className="input-group-append btn btn-outline-secondary btn-number" onClick={incrementCount} onMouseUp={handleBlur}>
                <AddCircleOutlineIcon/>
              </IconButton>
            </Box>
            <Box width={200} m="auto">
              <Slider
                value={typeof valueTargets === "number" ? valueTargets : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                min={10}
                max={5000}
              />
            </Box>
          </Box>

          <Box sx={{ justifyContent: 'center' }}>
            <Typography className="color-text-muted small">Deployment minutes</Typography>
            <Box width={200} sx={{ display: 'inline-flex' }}>
              <IconButton className="input-group-append btn btn-outline-secondary btn-number" onClick={decrementMinutes} onMouseUp={handleBlurMinutes}>
                <RemoveCircleOutlineIcon/>
              </IconButton>
              <TextField
                className="form-control input-number"
                variant="outlined"
                value={valueMinutes}
                margin="dense"
                onChange={(e) =>
                  setValidMinutes(parseInt(e.target.value, 10))
                }
                onBlur={handleBlurMinutes}
                inputProps={{
                  inputMode: 'numeric', 
                  pattern: '[0-9]*',
                  step: 10,
                  min: 10,
                  max: 5000,
                  "aria-labelledby": "input-slider-minutes",
                }}
              />
              <IconButton className="input-group-append btn btn-outline-secondary btn-number" onClick={incrementMinutes} onMouseUp={handleBlurMinutes}>
                <AddCircleOutlineIcon/>
              </IconButton>
            </Box>
            <Box width={200} m="auto">
              <Slider
                value={typeof valueMinutes === "number" ? valueMinutes : 0}
                onChange={handleSliderChangeMinutes}
                aria-labelledby="input-slider"
                min={100}
                max={10000}
              />
            </Box>
          </Box>
          <div className="pricing-cta">
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
  );
};
export default Cloud;