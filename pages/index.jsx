import { useState } from "react";
import PageLayout from "../layouts/Page";
import TestingRate from "../components/TestingRate";
import InfectionRate from "../components/InfectionRate";

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
