import PageLayout from "../layouts/Page";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

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

const IndexPage = () => {
  const [population, setPopulation] = useState(100000);

  return (
    <PageLayout>
      <div>
        <h1 className="text-xl">Coronavirus Testing</h1>

        <InfectionRate population={population} setPopulation={setPopulation} />
        <TestingRate population={population} setPopulation={setPopulation} />
      </div>
    </PageLayout>
  );
};

export default IndexPage;
