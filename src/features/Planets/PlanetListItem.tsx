import { IPlanet } from "../../consts";

const PlanetCard = ({ planet }: { planet: IPlanet }) => {
  if (!planet) {
    return null;
  }

  return (
    <div className="w-full h-full bg-gray-100 border border-gray-200 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{planet.name}</h1>
      <ul className="list-disc list-inside">
        <li>Population: {planet.population}</li>
        <li>Terrain: {planet.terrain}</li>
        <li>Climate: {planet.climate}</li>
        <li>Diameter: {planet.diameter}</li>
        <li>Gravity: {planet.gravity}</li>
        <li>Rotation Period: {planet.rotation_period}</li>
        <li>Orbital Period: {planet.orbital_period}</li>
        <li>Surface Water: {planet.surface_water}</li>
        {/* <li>Films: {planet.films.join(", ")}</li>
        <li>Residents: {planet.residents.join(", ")}</li> */}
      </ul>
    </div>
  );
};

export default PlanetCard;
