import React from "react";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

const TestingRate = ({ population, setPopulation }) => {
  const [percent, setPercent] = useState(30);
  const [tests, setTests] = useState(1000);

  const totalTests = (population * percent) / 100;

  const days = Math.round(totalTests / tests);

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
            min={0}
            max={200}
            onChange={(_, value) => setPercent(value)}
          />

          {tests}
          <Slider
            value={tests}
            step={1000}
            min={1000}
            max={300000}
            onChange={(_, value) => setTests(value)}
          />

          <p>{totalTests}</p>

          {days}
        </form>
      </div>
    </div>
  );
};

export default TestingRate;
