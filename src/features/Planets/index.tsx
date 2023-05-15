import PlanetsList from "./PlanetsList";
import usePlanets from "../../hooks/usePlanets";
import Button from "../../components/Button";

const Planets = () => {
  const { data, loading, fetchNextPage } = usePlanets();

  return (
    <div>
      <PlanetsList planets={data || []} loading={loading} />
      <div className="w-full flex justify-center mt-5">
        <Button disabled={loading} onClick={() => fetchNextPage()}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Planets;
