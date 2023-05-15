import { IPlanet } from "../../consts";
import ListLoader from "./ListLoader";
import PlanetsListItem from "./PlanetListItem";

const PlanetsList = ({
  planets = [],
  loading = false,
}: {
  planets: Array<IPlanet>;
  loading: boolean;
}) => {
  return (
    <div className="w-full grid grid-cols-6 gap-10 auto-rows-max">
      {planets?.map((planet) => (
        <div className="col-span-full lg:col-span-3 xl:col-span-2 2xl:col-span-1 h-full">
          <PlanetsListItem key={`planet_${planet.name}`} planet={planet} />
        </div>
      ))}
      {loading && <ListLoader />}
    </div>
  );
};

export default PlanetsList;
