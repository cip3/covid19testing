import { useState } from "react";
import PageLayout from "../layouts/Page";
import TestingRate from "../components/TestingRate";
import InfectionRate from "../components/InfectionRate";

const IndexPage = () => {
  const [population, setPopulation] = useState(1000000);

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto flex flex-wrap p-2 md:p-4">
        <div className="p-2 md:p-4 w-full md:w-1/2">
          <InfectionRate
            population={population}
            setPopulation={setPopulation}
          />
        </div>

        <div className="p-2 md:p-4 w-full md:w-1/2">
          <TestingRate population={population} setPopulation={setPopulation} />
        </div>
      </div>
    </PageLayout>
  );
};

export default IndexPage;
