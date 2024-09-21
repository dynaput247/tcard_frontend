import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Jobs from "../components/Jobs";

export default () => {
  return (
    <div className="py-1 w-full">
      <Header />
      <div className="w-full px-4">
        <h2 className="text-[22px] font-medium leading-6 px-2">Find your dream job</h2>
        <div className="w-full mt-2">
          <Search />
          <Jobs />
        </div>
      </div>
    </div>
  )
}