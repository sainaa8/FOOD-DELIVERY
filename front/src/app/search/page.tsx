"use client";
import React from "react";
import axios from "axios";
import { useContext } from "react";
//import { SearchContext } from "@/components/Provider/searchProvider";
import { SearchMap } from "@/components/search/searchMap";
import { useSearchParams } from "next/navigation";
const getFilterFoods = async () => {
  ///const { search, setSearch } = useContext(SearchContext);
  const params = useSearchParams();
  const id = params.get("id");
  console.log(id);
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
  console.log(body);

  try {
    const { data } = await axios.post<FoodType[]>(
      "http://localhost:8001/foods",
      body
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Search() {
  const data = await getFilterFoods();
  console.log(data);

  return (
    <div>
      <SearchMap data={data} />
    </div>
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
