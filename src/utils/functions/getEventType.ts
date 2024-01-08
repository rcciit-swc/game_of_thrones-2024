import { events } from "@/utils";
export const getEventType = (event_id: string, is_team: boolean) => {
  const event = events.find((event) => event.id === event_id);
  if (is_team) {
    return event?.teamType === "Team" ? "Team" : "Doubles";
  } else {
    return "Singles";
  }
};
