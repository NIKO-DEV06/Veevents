import { auth } from "@clerk/nextjs";
import EventForm from "./EventForm";

const CreateEvent = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <section className="min-h-screen pt-[9rem] px-[2rem] md:px-[6rem]">
      <h3 className="font-made-alt-black text-center text-[2rem] uppercase">
        Create Event
      </h3>
      <EventForm userId={userId} type="Create" />
    </section>
  );
};

export default CreateEvent;
