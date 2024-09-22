import { useFlights } from "../api/get-flights";
import { FlightCard } from "./flight-card";

export const FlightsHomepage = () => {
  const { data } = useFlights();

  console.log(data);

  return (
    <div className="flex flex-col gap-y-8">
      {data?.flights.map((flight) => (
        <div key={flight.id} className="flex flex-col">
          <FlightCard flight={flight} />
        </div>
      ))}
    </div>
  );
};
