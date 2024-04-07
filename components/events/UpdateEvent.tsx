import { auth } from "@clerk/nextjs";
import EventForm from "./EventForm";

const UpdateEvent = (event: any) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <section className="min-h-screen pt-[9rem] px-[2rem] md:px-[6rem]">
      <h3 className="font-made-alt-black text-center text-[2rem] uppercase">
        Update Event
      </h3>
      <EventForm
        event={event.event}
        userId={userId}
        eventId={event.event._id}
        type="Update"
      />
    </section>
  );
};

export default UpdateEvent;
