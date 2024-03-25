"use client";
import React from "react";
import axios from "axios";
import { useContext } from "react";
//import { SearchContext } from "@/components/Provider/searchProvider";
import { SearchMap } from "@/components/search/searchMap";
import { useSearchParams } from "next/navigation";
import { Stack } from "@mui/material";
const GetFilterFoods = async (id: string) => {
  const body = {
    filter: {
      $or: [
        {
          name: {
            $regex: id,
            $options: "i",
          },
        },
        {
          price: {
            $regex: id,
          },
        },
      ],
    },
  };

  try {
    const { data } = await axios.post<FoodType[]>(
      "https://food-delivery-isg2.onrender.com/foods",
      body
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Search({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const data: FoodType[] | undefined = await GetFilterFoods(searchParams.id);

  return (
    <Stack sx={{ width: "100vw", alignItems: "center" }}>
      <div style={{ width: "90%" }}>
        <div
          style={{
            fontSize: "30px",
            marginLeft: "150px",
            marginBottom: "30px",
            border: "1px solid green",
            borderRadius: "17px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "170px",
            fontFamily: "sans-serif",
            padding: "5px 0px",
            color: "green",
            marginTop: "60px",
          }}
        >
          Хайлт
        </div>
        <SearchMap data={data as FoodType[]} />
      </div>
    </Stack>
  );
}

//////////////////////////////////////////

// import { GetServerSideProps } from "next";

// interface MyPageProps {
//   search: string;
// }

// function SearchPage({ search }: MyPageProps) {
//   console.log(search);

//   return <div>sdaaa</div>;
// }
// export default SearchPage;

// export const getServerSideProps: GetServerSideProps<MyPageProps> = async (
//   context
// ) => {
//   const search = context.params?.id as string;
//   console.log(search);

//   return {
//     props: {
//       search: search,
//     },
//   };
// };
