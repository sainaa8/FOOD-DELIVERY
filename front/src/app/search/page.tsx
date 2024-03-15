"use client";
import React from "react";

import { useContext } from "react";
import { SearchContext } from "@/components/Provider/searchProvider";
export default function Search() {
  const { search, setSearch } = useContext(SearchContext);
  console.log(search);

  return <div>Search</div>;
}

// "filter":{
//   "$or":[
//       {
//           "name":{
//               "$regex":"100000",
//               "$options":"i"
//           }
//       },
//       {
//           "price":{
//               "$regex":"100000"
//           }
//       }
//   ]
// }

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
