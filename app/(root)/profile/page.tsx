import Profile from "@/components/profile/Profile";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";

const page = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 });
  return <Profile organizedEvents={organizedEvents} />;
};

export default page;
