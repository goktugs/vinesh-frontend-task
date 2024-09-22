import { queryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { Flight } from "@/types/api";

export const getFlights = (): Promise<{
  flights: Flight[];
}> => {
  return api.get("/schipol/", {
    params: {
      includedelays: false,
    },
  });
};

export const getFlightsQueryOptions = () => {
  return queryOptions({
    queryKey: ["schipol"],
    queryFn: () => getFlights(),
  });
};

type UseFlightsOptions = {
  queryConfig?: QueryConfig<typeof getFlightsQueryOptions>;
};

export const useFlights = ({ queryConfig }: UseFlightsOptions = {}) => {
  return useQuery({
    ...getFlightsQueryOptions(),
    ...queryConfig,
  });
};
