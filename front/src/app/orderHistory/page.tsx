import React from "react";
import { OrderHistory } from "@/components/order/OrderHistory";
import { AxiosError } from "axios";
import axios from "axios";
const GetOrder = async () => {
  try {
    const { data } = await axios.get("https://food-delivery-isg2.onrender.com/getOrder");

    return data;
  } catch (err: AxiosError | any) {
    console.log(err.message);
  }
};
async function page() {
  const data = await GetOrder();

  return (
    <div>
      <OrderHistory data={data} />
    </div>
  );
}

export default page;
