import React from "react";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

const InfectionRate = ({ population, setPopulation }) => {
  const [percent, setPercent] = useState(30);
  const [rate, setRate] = useState(10);
  const [current, setCurrent] = useState(0);

  const percentInfected = (population * percent) / 100;
  const days = Math.round(
    (Math.log(percentInfected) - Math.log(current)) / Math.log(1 + rate / 100)
  );

  return (
    <div>
      <h2 className="text-lg">Infection Rates</h2>
      {population}
      <div>
        <form>
          <TextField
            label="Total Population"
            variant="filled"
            value={population}
            type="number"
            onChange={x => setPopulation(x.target.value)}
          />
          {percent}
          <Slider
            value={percent}
            step={5}
            onChange={(_, value) => setPercent(value)}
          />

          <p>{percentInfected}</p>

          {rate}
          <Slider value={rate} onChange={(_, value) => setRate(value)} />

          <TextField
            label="Currently Infected"
            variant="filled"
            value={current}
            type="number"
            onChange={x => setCurrent(x.target.value)}
          />

          {days}
        </form>
      </div>
    </div>
  );
};

export default InfectionRate;
