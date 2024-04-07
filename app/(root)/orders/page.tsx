import Orders from "@/components/orders/Orders";
import { getOrdersByEvent } from "@/lib/actions/order.actions";
import { SearchParamProps } from "@/types";

const page = async ({ searchParams }: SearchParamProps) => {
  const eventId = (searchParams?.eventId as string) || "";
  const searchText = (searchParams?.query as string) || "";

  const orders = await getOrdersByEvent({ eventId, searchString: searchText });

  return <Orders orders={orders} />;
};

export default page;
