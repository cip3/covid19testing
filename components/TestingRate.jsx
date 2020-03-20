import React from "react";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Card, {
  CardHeading,
  CardSubHeading,
  CardContent
} from "../components/Card";

const TestingRate = ({ population, setPopulation }) => {
  const [percent, setPercent] = useState(30);
  const [tests, setTests] = useState(2000);

  const totalTests = (population * percent) / 100;
  const days = Math.round(totalTests / tests);

  return (
    <Card>
      <CardContent>
        <CardHeading>Testing Rates</CardHeading>
      </CardContent>

      <CardContent>
        <TextField
          fullWidth
          label="Total Population"
          variant="filled"
          value={population}
          type="number"
          onChange={x => setPopulation(x.target.value)}
        />
      </CardContent>

      <CardContent>
        <CardSubHeading>Percent of Population to Test</CardSubHeading>
        <div className="flex items-center">
          <div className="mb-1 w-20">{percent}%</div>

          <div className="flex-1">
            <Slider
              value={percent}
              step={10}
              max={200}
              onChange={(_, value) => setPercent(value)}
            />
          </div>
        </div>

        <p>{Math.rounde(totalTests).toLocaleString()} Tests</p>
      </CardContent>

      <CardContent>
        <CardSubHeading>Tests per Day</CardSubHeading>
        <div className="flex items-center">
          <div className="mb-1 w-20">{tests}</div>

          <div className="flex-1">
            <Slider
              value={tests}
              step={1000}
              min={1000}
              max={300000}
              onChange={(_, value) => setTests(value)}
            />
          </div>
        </div>
      </CardContent>

      <CardContent>
        <CardSubHeading>Number of Days</CardSubHeading>
        <p className="text-xl">{days}</p>
      </CardContent>
    </Card>
  );
};

export default TestingRate;
