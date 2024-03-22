import React from "react";
import { OrderHistory } from "@/components/order/OrderHistory";
import { AxiosError } from "axios";
import axios from "axios";
export const GetOrder = async () => {
  try {
    const { data } = await axios.get("http://localhost:8001/getOrder");

    return data;
  } catch (err: AxiosError | any) {
    console.log(err.message);
  }
};
async function page() {
  const data = await GetOrder();

  return (
    <div>
      <OrderHistory />
    </div>
  );
}

export default page;
