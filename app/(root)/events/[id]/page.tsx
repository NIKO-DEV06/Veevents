import { SearchParamProps } from "@/types";
import EventDetails from "@/components/events/EventDetails";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";

const page = async ({ params: { id }, searchParams }: SearchParamProps) => {
  const event = await getEventById(id);
  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.pasge as string,
  });
  return <EventDetails event={event} relatedEvents={relatedEvents} />;
};

export default page;
