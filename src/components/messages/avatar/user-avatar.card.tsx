import { FC } from "react";
import { UserAvatarCardItemProps } from "./types";

export const UserAvatarMessage: FC<UserAvatarCardItemProps> = (props) => {
  return (
    <div className="flex justify-between items-center text-white py-2 px-4">
      <div className="flex items-center">
        <img
          src="/assets/images/sample-avatar.png"
          alt="User avatar"
          className="rounded-[50%] w-[36px] h-[36px]"
        />
        <div className="pl-[20px]">
          <div className="items-center">
            <p className="text-[18px] text-bold semi-bold">
              {props.walletAddress}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="mr-4 w-7 h-10"
          onClick={() => props.setOpened(!props.opened)}
        >
          <svg
            width="20"
            height="2"
            viewBox="0 0 20 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="1.5" rx="0.75" fill="white" />
          </svg>
        </button>
        <button className="w-7 h-10">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
