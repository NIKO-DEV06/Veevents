import Image from "next/image";
import { IoLocation } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import { formatDateTime } from "@/lib/utils";
import Collection from "../shared/Collection";
import CheckoutButton from "../shared/CheckoutButton";

const EventDetails = ({ event, relatedEvents, searchParams }: any) => {
  return (
    <>
      <section className="min-h-screen pt-[9rem] px-[2rem] md:px-[6rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Image
            src={event.imageUrl}
            alt="event-img"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center border-[1px] border-white/50 rounded-md"
          />
          <div className="flex w-full flex-col gap-[1rem] pt-5 md:p-10">
            <div className="flex flex-col gap-[1rem]">
              <h2 className="font-made-alt-black uppercase trackingwider text-[1.5rem] leading-[2.2rem]">
                {event.title}
              </h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3 items-center">
                  <p className="font-semibold rounded-full bg-green-400 px-6 py-[0.4rem] text-black">
                    {event.isFree ? "FREE" : `$${event.price}`}
                  </p>
                  <p className="rounded-full bg-gray-200 px-4 py-[0.4rem] text-black">
                    {event.category.name}
                  </p>
                </div>

                <p className="mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-[#8676db]">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>

            {/* CHECKOUT BUTTON */}
            <CheckoutButton event={event} />
            <div className="flex flex-col gap-5 border-t-[1px] border-white/50 pt-[1rem]">
              <div className="flex items-center gap-[0.8rem] md:gap-3">
                <IoCalendar size={25} />
                <div className="flex flex-wrap items-center gap-[0.3rem]">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  <p>
                    {formatDateTime(event.endDateTime).dateOnly} -{" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IoLocation size={25} />
                <p>{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-[2rem]">
              <p className="font-made-alt-black uppercase trackingwider text-[1rem]">
                What It&apos;s About!:
              </p>
              <p>{event.description}</p>
              <p className="underline text-[#8676db] hover:text-[#a99de2] cursor-pointer duration-200">
                {event?.url}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS WITH THE SAME CATEGORY */}
      <section className="pt-[3rem] px-[2rem] md:px-[6rem] flex flex-col">
        <h2 className="font-made-alt-black trackingwider text-[1.5rem]">
          Related Events
        </h2>
        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found."
          emptyStateSubtext="Come back later or Create your own event under this category!"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
