import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FlightCard = () => {
  return (
    <div className="flex flex-col">
      <Card className="rounded-bl-none">
        <CardHeader>
          <CardTitle className="flex gap-x-1 text-center items-center justify-center font-bold md:justify-start">
            <span>Milano</span>-<span>Madrid</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-y-5 md:flex-row  ">
          <div className="flex flex-col gap-y-1 text-xs items-center md:flex-1 md:items-start">
            <div className="flex space-x-1 items-center ">
              <PlaneTakeoff className="text-mainPurple h-4 w-4" />
              <span>Departure</span>
            </div>
            <span className="md:text-lg font-bold">7:30 AM</span>
            <span>
              Airport: <span className="">MXP</span>
            </span>
          </div>
          <Separator className="h-8 w-0.5 bg-gray-400 md:h-0.5 md:w-24 " />

          <div className="flex flex-col gap-y-1 text-xs items-center md:flex-1 ">
            <span>Alitali</span>
            <span>
              <Plane className="text-mainPurple h-4 w-4" />
            </span>
            <span>2h 25m (nonstop)</span>
          </div>
          <Separator className="h-8 w-0.5 bg-gray-400 md:h-0.5 md:w-24 " />

          <div className="flex flex-col gap-y-1 text-xs items-center md:flex-1 md:items-end">
            <div className="flex space-x-1 items-center ">
              <PlaneLanding className="text-mainPurple h-4 w-4" />
              <span>Arrival</span>
            </div>
            <span className="md:text-lg font-bold">9:55 AM</span>
            <span>
              Airport: <span className="">MAD</span>
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pr-0 pb-0 ">
          <div className="flex flex-col pb-2 gap-y-0">
            <div className="text-mainPurple font-bold">
              Price: <span className="">$200</span>
            </div>
            <div>
              <span className="text-muted-foreground text-xs">Round trip</span>
            </div>
          </div>
          <Button className="rounded-br-xl rounded-tr-none rounded-bl-none bg-mainPurple px-6 py-6 md:px-12 md:py-8">
            Book Flight
          </Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center md:justify-start">
        <Accordion
          className="w-full text-center md:w-auto"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-40 flex items-center justify-center bg-mainCardBgDark text-mainPurple rounded-b-lg underline underline-offset-1">
              Check the details
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
