import React from "react";

export default () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <input type="text" className="w-full bg-[#7474800D] rounded-lg border border-[#F2F2F5] p-2" placeholder="Search" />
        <div className="flex flex-row mt-2 overflow-x-hidden">
          <div className="rounded-2xl p-2 mr-1 border bg-[#7474800D] flex flex-row border-[#F2F2F5]">
            <span>Madrid</span>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.5L8 16.5M16 16.5L8 8.5" stroke="black" stroke-linecap="round" />
            </svg>
          </div>
          <div className="rounded-2xl p-2 mr-1 border bg-[#7474800D] flex flex-row border-[#F2F2F5]">
            <span>Web Desinger</span>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.5L8 16.5M16 16.5L8 8.5" stroke="black" stroke-linecap="round" />
            </svg>
          </div>
          <div className="rounded-2xl p-2 mr-1 border bg-[#7474800D] flex flex-row border-[#F2F2F5]">
            <span>UX/UI</span>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.5L8 16.5M16 16.5L8 8.5" stroke="black" stroke-linecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}