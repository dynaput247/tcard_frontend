import React from "react";

export default () => {
  return (
    <div className="rounded-xl border border-[#F2F2F5] w-full flex flex-row justify-between p-3">
      <div className="flex flex-row">
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
        <div>
          <p className="text-lg">BackEnd Developer</p>
          <p className="text-sm">T-Card</p>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-[10px]">2 hours ago</span>
        
      </div>
    </div>
  )
}