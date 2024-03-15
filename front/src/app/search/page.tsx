"use client";
import React from "react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { SearchContext } from "@/components/Provider/searchProvider";

type Obj = {
  body: object;
};
export default async function Search() {
  const { search, setSearch } = useContext(SearchContext);
  console.log(search);
  const body = {
    filter: {
      " $or": [
        {
          name: {
            " $regex": search,
            " $options": "i",
          },
        },
        {
          price: {
            "  $regex": search,
          },
        },
      ],
    },
  };
  console.log(body);
  useEffect(() => {
    const getFilteData = async () => {
      const { data } = await axios.get("http://localhost:8001/foods", body);
      console.log(data);
    };
    getFilteData();
  }, []);

  return <div>Search</div>;
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
