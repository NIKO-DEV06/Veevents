import { IEvent } from "@/lib/database/models/event.model";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { checkoutOrder } from "@/lib/actions/order.actions";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);
  const onCheckOut = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };
  return (
    <form action={onCheckOut} method="post">
      <button
        type="submit"
        role="link"
        className="mb-[0.5rem] mt-[0.2rem] bg-[#5a3ee5] hover:bg-[#4630b0] duration-300 text-white px-[1.5rem] py-[0.5rem] rounded-md font-semibold text-center"
      >
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </button>
    </form>
  );
};

export default Checkout;
