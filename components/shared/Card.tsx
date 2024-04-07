import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer?._id.toString();
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden bg[#09090b] bg-[#5a3ee5] shadow-md transition-all hover:shadow-lg md:min-h-[438px] rounded-md border-[1px] border-white ">
      <Link
        href={`/events/${event._id}`}
        className="flex items-center justify-center flex-grow bg-gray-50 bg-cover bg-center rounded-t-md"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      ></Link>

      {/* IS EVENT CREATOR */}

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 bg-white rounded-xl shadow-lg transition-all p-2">
          <Link href={`/events/${event._id}/update`} className="text-black">
            <CiEdit size={22} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}
      <div className="flex justify-between min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        <div className="">
          {!hidePrice && (
            <div className="flex gap-2 text-[0.75rem] mt-[0.5rem]">
              <span className="font-semibold rounded-full bg-green-400 text-black border-[1px] px-[1rem] py-[0.2rem]">
                {event.isFree ? "FREE" : `$${event.price}`}
              </span>
              <p className="font-semibold rounded-full bg-black/70 text-whit border-[1px] px-[1rem] py-[0.2rem] line-clamp-1">
                {event.category?.name}
              </p>
            </div>
          )}
          <p className="text-[0.95rem] mt-[0.8rem]">
            {
              // @ts-ignore
              formatDateTime(event.startDateTime).dateTime
            }
          </p>

          <Link href={`/events/${event._id}`}>
            <p className="text-[1.1rem] font-made-medium mt-[0.4rem]">
              {event.title}
            </p>
          </Link>
        </div>
        <div className="flex justify-between w-full text-[0.9rem]">
          <p className="opacity-80 ">
            {event.organizer?.firstName} {event.organizer?.lastName}
          </p>

          {/* {hasOrderLink && ( */}
          <Link
            href={`/orders?eventId=${event._id}`}
            className="flex items-center gap-2 opacity-80 hover:opacity-100 duration-200"
          >
            <p className="">Order Details</p>
            <FaArrowRightLong className="" />
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
