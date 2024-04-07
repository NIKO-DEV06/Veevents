import UpdateEvent from "@/components/events/UpdateEvent";
import { getEventById } from "@/lib/actions/event.actions";

type UpdateEventProps = {
  params: { id: string };
};

const page = async ({ params: { id } }: UpdateEventProps) => {
  const event = await getEventById(id);

  return <UpdateEvent event={event} />;
};

export default page;
