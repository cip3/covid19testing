import React from "react";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import Card, {
  CardHeading,
  CardSubHeading,
  CardContent
} from "../components/Card";

const InfectionRate = ({ population, setPopulation }) => {
  const [percent, setPercent] = useState(30);
  const [rate, setRate] = useState(20);
  const [currentlyInfected, setCurrentlyInfected] = useState(350);

  const percentInfected = (population * percent) / 100;
  const days = Math.round(
    (Math.log(percentInfected) - Math.log(currentlyInfected)) /
      Math.log(1 + rate / 100)
  );

  return (
    <Card>
      <CardContent>
        <CardHeading>Infection Rates</CardHeading>
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
        <CardSubHeading>Percent at Peak Infection</CardSubHeading>
        <div className="flex items-center">
          <div className="mb-1 w-20">{percent}%</div>

          <div className="flex-1">
            <Slider
              value={percent}
              step={10}
              min={10}
              max={90}
              onChange={(_, value) => setPercent(value)}
            />
          </div>
        </div>

        <p>{Math.round(percentInfected).toLocaleString()} Infected</p>
      </CardContent>

      <CardContent>
        <CardSubHeading>Rate of Growth</CardSubHeading>
        <div className="flex items-center">
          <div className="mb-1 w-20">{rate}%</div>

          <div className="flex-1">
            <Slider
              value={rate}
              min={1}
              max={50}
              onChange={(_, value) => setRate(value)}
            />
          </div>
        </div>
      </CardContent>

      <CardContent>
        <TextField
          fullWidth
          label="Currently Infected"
          variant="filled"
          value={currentlyInfected}
          type="number"
          onChange={x => setCurrentlyInfected(x.target.value)}
        />
      </CardContent>

      <CardContent>
        <CardSubHeading>Number of Days</CardSubHeading>
        <p className="text-xl">{days}</p>
      </CardContent>
    </Card>
  );
};

export default InfectionRate;
