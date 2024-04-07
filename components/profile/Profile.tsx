import Link from "next/link";
import Collection from "../shared/Collection";

const Profile = ({ organizedEvents }: any) => {
  return (
    <>
      <section className="pt-[10rem] px-[2rem] md:px-[6rem]">
        <div className="flex items-end justify-center sm:justify-between border-b-[1px] w-full border-white/50 pb-[2rem]">
          <h2 className="font-made-alt-black uppercase text-[1.5rem] text-center sm:text-left">
            My Tickets
          </h2>
          <Link
            href={"/#events"}
            className="bg-[#5a3ee5] hover:bg-[#4630b0] duration-300 text-white px-[1.5rem] py-[0.5rem] rounded-md font-semibold hidden sm:flex text-center"
          >
            Explore More Events
          </Link>
        </div>
      </section>

      {/* <section className="my-[5rem] px-[2rem] md:px-[6rem]">
        <Collection
          data={events?.data}
          emptyTitle="No Events Tickets purchased yet."
          emptyStateSubtext="No worries - loads of events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}

      <section className="pt-[10rem] px-[2rem] md:px-[6rem]">
        <div className="flex items-end justify-center sm:justify-between border-b-[1px] w-full border-white/50 pb-[2rem]">
          <h2 className="font-made-alt-black uppercase text-[1.5rem] text-center sm:text-left">
            Events Organized
          </h2>
          <Link
            href={"/events/create"}
            className="bg-[#5a3ee5] hover:bg-[#4630b0] duration-300 text-white px-[1.5rem] py-[0.5rem] rounded-md font-semibold hidden sm:flex text-center"
          >
            Create New Event
          </Link>
        </div>
      </section>

      <section className="my-[5rem]  px-[2rem] md:px-[6rem]">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No Events have been created yet."
          emptyStateSubtext="Create your events now"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="evnstsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default Profile;
