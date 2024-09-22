import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { ProtectedRoute } from "@/lib/auth";

import { AppRoot } from "./routes/app/root";
import { FlightsRoute } from "./routes/app/flights";
// import { FlightCard } from "@/features/book-card/components/flight-card";
// import { FlightSort } from "@/features/book-card/components/flight-sort";
import { SearchFlightsRoute } from "./routes/app/search-flights";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/auth/register",
      lazy: async () => {
        const { RegisterRoute } = await import("./routes/auth/register");
        return { Component: RegisterRoute };
      },
    },
    {
      path: "/auth/login",
      lazy: async () => {
        const { LoginRoute } = await import("./routes/auth/login");
        return { Component: LoginRoute };
      },
    },
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <AppRoot />
        // </ProtectedRoute>
      ),
      children: [
        {
          path: "homepage",
          element: <FlightsRoute />,
          children: [
            {
              index: true,
              element: (
                <div className="flex flex-col-reverse gap-y-8  md:flex-row md:gap-x-8">
                  <div className="flex-1">
                    {/* <FlightCard />
                    <FlightCard />
                    <FlightCard /> */}
                  </div>
                  <div className="flex flex-col gap-y-4 ">
                    {/* <FlightSort /> */}
                  </div>
                </div>
              ),
            },
            {
              path: "search-flights",
              element: <SearchFlightsRoute />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
