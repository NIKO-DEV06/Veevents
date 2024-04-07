import Collection from "../shared/Collection";

const EventsSection = ({ events }: any) => {
  return (
    <section className="min-h-screen pt-[3rem] lg:pt-[10rem]">
      <h1 className="text-[2rem] lg:text-[2.5rem] font-made-black leading-[2.3rem] lg:leading-[3rem]">
        Trusted by Thousands <br /> of Events
      </h1>
      <div>Search CategoryFilter</div>
      <Collection
        data={events?.data}
        emptyTitle="No Events Found."
        emptyStateSubtext="Come back later or Sign Up and create your own event!"
        collectionType="All_Events"
        limit={6}
        page={1}
        totalPages={2}
      />
    </section>
  );
};

export default EventsSection;
