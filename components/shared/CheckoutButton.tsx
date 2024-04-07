"use client";

import { IEvent } from "@/lib/database/models/event.model";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  // @ts-ignore
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {/* CANNOT BUY PAST EVENT */}
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          <SignedOut>
            <button>
              <Link
                href={"/sign-in"}
                className="mb-[0.5rem] mt-[0.2rem] bg-[#5a3ee5] hover:bg-[#4630b0] duration-300 text-white px-[1.5rem] py-[0.5rem] rounded-md font-semibold text-center"
              >
                Get Ticket
              </Link>
            </button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
