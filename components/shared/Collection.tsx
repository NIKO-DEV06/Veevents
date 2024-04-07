import { IEvent } from "@/lib/database/models/event.model";
import Card from "./Card";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
  urlParamName?: string;
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  limit,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="mt-[3rem]">
          <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "Events_Organized";
              const hidePrice = collectionType === "My_Tickets";
              return (
                <li key={event._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="mt-[3rem] flex flex-col items-center justify-center italic border-2 py-[4rem] bg-[#5a3ee5] rounded-md">
          <h3 className="font-bold text-[1.3rem]">{emptyTitle}</h3>
          <p className="text-center">{emptyStateSubtext} 💃</p>
        </div>
      )}
    </>
  );
};

export default Collection;
