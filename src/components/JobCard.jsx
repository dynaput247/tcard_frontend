import React from "react";

export default () => {
  return (
    <div className="rounded-xl border border-[#F2F2F5] w-full flex flex-col p-3 my-2">
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row justify-between">
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_43_755)">
              <rect x="5" y="3" width="44" height="44" rx="11" fill="#00A77F" />
              <g filter="url(#filter1_i_43_755)">
                <path d="M27.2732 38.9334C19.4222 38.9334 14.5334 33.9356 14.5334 25.3576C14.5334 16.7978 19.4585 11.8 27.2732 11.8C33.5645 11.8 38.4171 15.6416 39.0716 21.3248C39.1307 21.8383 38.7126 22.2681 38.1957 22.2681H33.5485C33.0805 22.2681 32.695 21.9125 32.5914 21.456C31.9943 18.8269 29.9344 17.1431 27.2732 17.1431C22.2193 17.1431 20.3283 20.269 20.3283 25.3576C20.3283 30.5008 22.6463 33.5903 27.2914 33.5903C29.9595 33.5903 31.9627 31.9884 32.612 29.3773C32.7224 28.9331 33.1029 28.5925 33.5606 28.5925H38.2155C38.7387 28.5925 39.1589 29.0323 39.092 29.5511C38.358 35.2437 33.6809 38.9334 27.2732 38.9334Z" fill="white" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_43_755" x="0.27" y="0.47" width="53.46" height="53.46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.2" />
                <feGaussianBlur stdDeviation="2.365" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_755" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_755" result="shape" />
              </filter>
              <filter id="filter1_i_43_755" x="14.5334" y="11.8" width="24.5656" height="27.4993" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.365993" />
                <feGaussianBlur stdDeviation="0.182997" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_43_755" />
              </filter>
            </defs>
          </svg>
          <div className="w-full">
            <p className="text-lg">BackEnd Developer</p>
            <p className="text-sm">T-Card</p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <span className="text-[10px]">2 hours ago</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7.2002V16.6854C6 18.0464 6 18.7268 6.20412 19.1433C6.58245 19.9151 7.41157 20.3588 8.26367 20.2454C8.7234 20.1842 9.28964 19.8067 10.4221 19.0518L10.4248 19.0499C10.8737 18.7507 11.0981 18.6011 11.333 18.5181C11.7642 18.3656 12.2348 18.3656 12.666 18.5181C12.9013 18.6012 13.1266 18.7515 13.5773 19.0519C14.7098 19.8069 15.2767 20.1841 15.7364 20.2452C16.5885 20.3586 17.4176 19.9151 17.7959 19.1433C18 18.7269 18 18.0462 18 16.6854V7.19691C18 6.07899 18 5.5192 17.7822 5.0918C17.5905 4.71547 17.2837 4.40973 16.9074 4.21799C16.4796 4 15.9203 4 14.8002 4H9.2002C8.08009 4 7.51962 4 7.0918 4.21799C6.71547 4.40973 6.40973 4.71547 6.21799 5.0918C6 5.51962 6 6.08009 6 7.2002Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className="p-2 flex flex-row justify-center items-center gap-2">
        <div className="px-4 py-2 rounded-md border border-[#F2F2F5] w-auto">
          <span className="text-xs">Go</span>
        </div>
        <div className="px-4 py-2 rounded-md border border-[#F2F2F5] w-auto">
          <span className="text-xs">Full-Time</span>
        </div>
        <div className="px-4 py-2 rounded-md border border-[#F2F2F5] w-auto">
          <span className="text-xs">2 years</span>
        </div>
      </div>
    </div>
  )
}