import { FC } from "react";
import { IconProps } from "./types";
import classnames from "classnames";

/** @dev Expore Plus Icon Component */
export const PlusIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V7.25H1.75C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75H7.25V14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V8.75H14.25C14.6642 8.75 15 8.41421 15 8C15 7.58579 14.6642 7.25 14.25 7.25H8.75V1.75Z"
        fill="white"
      />
    </svg>
  );
};

export const DeleteIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5247 2.49547C11.7841 2.49547 12 2.71081 12 2.9848V3.23813C12 3.50546 11.7841 3.72746 11.5247 3.72746H0.475902C0.215907 3.72746 0 3.50546 0 3.23813V2.9848C0 2.71081 0.215907 2.49547 0.475902 2.49547H2.41971C2.81457 2.49547 3.1582 2.21481 3.24703 1.81881L3.34882 1.36415C3.50702 0.744825 4.02766 0.333496 4.62351 0.333496H7.37649C7.96585 0.333496 8.49233 0.744825 8.64469 1.33149L8.75362 1.81815C8.8418 2.21481 9.18543 2.49547 9.58094 2.49547H11.5247ZM10.5372 11.7562C10.7402 9.86487 11.0955 5.37158 11.0955 5.32625C11.1084 5.18891 11.0637 5.05892 10.9749 4.95425C10.8796 4.85625 10.759 4.79825 10.626 4.79825H1.37901C1.24545 4.79825 1.11837 4.85625 1.03019 4.95425C0.940717 5.05892 0.896628 5.18891 0.903112 5.32625C0.904303 5.33458 0.917053 5.49285 0.938368 5.75747C1.03306 6.93297 1.29678 10.2069 1.46719 11.7562C1.58779 12.8975 2.33665 13.6148 3.42137 13.6408C4.25842 13.6602 5.12075 13.6668 6.00253 13.6668C6.83309 13.6668 7.67662 13.6602 8.53959 13.6408C9.66192 13.6215 10.4101 12.9168 10.5372 11.7562Z"
      />
    </svg>
  );
};

export const VerticalDots: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 13.5C6.5 12.6716 7.17157 12 8 12C8.82843 12 9.5 12.6716 9.5 13.5C9.5 14.3284 8.82843 15 8 15C7.17157 15 6.5 14.3284 6.5 13.5ZM6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8ZM8 1C7.17157 1 6.5 1.67157 6.5 2.5C6.5 3.32843 7.17157 4 8 4C8.82843 4 9.5 3.32843 9.5 2.5C9.5 1.67157 8.82843 1 8 1Z"
        fill="#7886A0"
      />
    </svg>
  );
};

/** @dev Search Icon Component */
export const SearchIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5748 16.2984C14.3479 17.3587 12.7488 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8483 17.2837 14.5293 16.1135 15.7804C15.9917 15.8294 15.8777 15.9033 15.7792 16.0021C15.6911 16.0904 15.623 16.191 15.5748 16.2984ZM16.495 18.1284C14.9748 19.3019 13.0689 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.181 19.2242 15.1808 17.9336 16.7385L21.7469 20.5419C22.1379 20.9319 22.1387 21.5651 21.7487 21.9561C21.3587 22.3471 20.7255 22.3479 20.3345 21.9579L16.495 18.1284Z"
        fill="#353C4B"
      />
    </svg>
  );
};

export const DollarIcon: FC<IconProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.7656 5.33333C11.3773 5.33333 11.0625 5.64813 11.0625 6.03646V7.27555C9.42579 7.53771 8.32212 8.54759 8.32212 9.96679C8.32212 11.3177 9.2465 12.1849 11.1346 12.543L12.1377 12.7315C13.3243 12.964 13.7701 13.3033 13.7701 13.9003C13.7701 14.5663 13.049 15.0564 11.9869 15.0564C11.0822 15.0564 10.3413 14.7423 10.0332 14.0511C9.7972 13.6489 9.52841 13.4981 9.12194 13.4981C8.61058 13.4981 8.25 13.8312 8.25 14.3338C8.25 14.5035 8.28934 14.6794 8.3549 14.8428C8.67465 15.6776 9.61097 16.3392 11.0625 16.5286V17.7552C11.0625 18.1435 11.3773 18.4583 11.7656 18.4583C12.1539 18.4583 12.4688 18.1435 12.4688 17.7552V16.5637C14.5153 16.4076 15.75 15.3287 15.75 13.6929C15.75 12.3168 14.8846 11.544 12.8785 11.1607L11.882 10.9659C10.7609 10.7522 10.3086 10.4066 10.3086 9.84741C10.3086 9.18136 10.9576 8.74151 11.9344 8.74151C12.7474 8.74151 13.3571 9.02427 13.6718 9.70917C13.8947 10.0987 14.17 10.2684 14.6158 10.2684C15.1206 10.2684 15.4615 9.96051 15.4615 9.5081C15.4615 9.34473 15.4353 9.21277 15.3894 9.0871C15.0142 8.03074 13.9313 7.36128 12.4688 7.23149V6.03646C12.4688 5.64813 12.1539 5.33333 11.7656 5.33333Z"
        fill="url(#paint0_linear_283_7337)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_283_7337"
          x1="12"
          y1="2"
          x2="12"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0977DD" />
          <stop offset="1" stopColor="#00519B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SolanaIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_98_4327)">
        <path
          d="M5.24872 15.9638C5.36941 15.8431 5.53537 15.7727 5.71138 15.7727H21.6732C21.9648 15.7727 22.1107 16.1247 21.9045 16.3309L18.7514 19.484C18.6307 19.6047 18.4647 19.6751 18.2887 19.6751H2.32692C2.03524 19.6751 1.8894 19.3231 2.09559 19.1169L5.24872 15.9638Z"
          fill="url(#paint0_linear_98_4327)"
        />
        <path
          d="M5.24872 4.1911C5.37444 4.0704 5.54039 4 5.71138 4H21.6732C21.9648 4 22.1107 4.35202 21.9045 4.55821L18.7514 7.71134C18.6307 7.83203 18.4647 7.90244 18.2887 7.90244H2.32692C2.03524 7.90244 1.8894 7.55042 2.09559 7.34423L5.24872 4.1911Z"
          fill="url(#paint1_linear_98_4327)"
        />
        <path
          d="M18.7514 10.0397C18.6307 9.91904 18.4647 9.84863 18.2887 9.84863H2.32692C2.03524 9.84863 1.8894 10.2007 2.09559 10.4068L5.24872 13.56C5.36941 13.6807 5.53537 13.7511 5.71138 13.7511H21.6732C21.9648 13.7511 22.1107 13.399 21.9045 13.1929L18.7514 10.0397Z"
          fill="url(#paint2_linear_98_4327)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_98_4327"
          x1="20.1483"
          y1="2.11641"
          x2="9.10152"
          y2="23.2755"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_98_4327"
          x1="15.3181"
          y1="-0.405401"
          x2="4.27125"
          y2="20.7537"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_98_4327"
          x1="17.7178"
          y1="0.847478"
          x2="6.67101"
          y2="22.0066"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <clipPath id="clip0_98_4327">
          <rect
            width="20"
            height="15.6751"
            fill="white"
            transform="translate(2 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CheckIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.14286L7.54545 13L19 1"
        stroke="#735CF7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LoadingIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={classnames("animate-spin -ml-1 mr-3 h-5 w-5", props.className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export const ChevronDownIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};

export const DetailIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1H5ZM4.75 4.5C4.33579 4.5 4 4.83579 4 5.25C4 5.66421 4.33579 6 4.75 6H11.25C11.6642 6 12 5.66421 12 5.25C12 4.83579 11.6642 4.5 11.25 4.5H4.75ZM4 8.25C4 7.83579 4.33579 7.5 4.75 7.5H7.25C7.66421 7.5 8 7.83579 8 8.25C8 8.66421 7.66421 9 7.25 9H4.75C4.33579 9 4 8.66421 4 8.25ZM4.75 10.5C4.33579 10.5 4 10.8358 4 11.25C4 11.6642 4.33579 12 4.75 12H9.25C9.66421 12 10 11.6642 10 11.25C10 10.8358 9.66421 10.5 9.25 10.5H4.75Z"
        fill="#7886A0"
      />
    </svg>
  );
};

export const CopyIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.75"
        y="1.75"
        width="9.5"
        height="9.5"
        rx="1.25"
        stroke="#94A3B8"
        strokeWidth="1.5"
      />
      <rect x="4" y="4" width="11" height="11" rx="2" fill="#94A3B8" />
    </svg>
  );
};

export const DotIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="currentColor" />
    </svg>
  );
};

export const EditIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.11086 2.99695L11.0024 5.88849C11.1242 6.0103 11.1242 6.20906 11.0024 6.33087L4.00115 13.3321L1.02626 13.6623C0.628755 13.7072 0.292156 13.3706 0.337036 12.9731L0.667222 9.9982L7.66847 2.99695C7.79029 2.87513 7.98904 2.87513 8.11086 2.99695ZM13.3041 2.26284L11.7397 0.698458C11.2524 0.211191 10.4606 0.211191 9.97017 0.698458L8.83535 1.83328C8.71353 1.95509 8.71353 2.15385 8.83535 2.27566L11.7269 5.1672C11.8487 5.28902 12.0475 5.28902 12.1693 5.1672L13.3041 4.03239C13.7914 3.54191 13.7914 2.75011 13.3041 2.26284Z"
        fill="#7886A0"
      />
    </svg>
  );
};

export const TelegramIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.23723 11.4221C9.06997 9.31707 12.2918 7.92914 13.9027 7.25862C18.5076 5.34391 19.4632 5.01136 20.0874 5.0001C20.2247 4.9979 20.5303 5.03182 20.7297 5.19305C20.8954 5.32901 20.9421 5.5129 20.9654 5.642C20.9861 5.77098 21.0146 6.06493 20.9913 6.2944C20.7426 8.91538 19.6627 15.2756 19.1136 18.2113C18.8831 19.4534 18.4247 19.8699 17.9818 19.9105C17.0184 19.9991 16.288 19.2744 15.3557 18.6635C13.8975 17.707 13.074 17.1119 11.6573 16.1787C10.0205 15.1003 11.0823 14.5075 12.0147 13.5389C12.2581 13.2853 16.5004 9.42766 16.5807 9.07776C16.591 9.03399 16.6014 8.87083 16.503 8.78484C16.4072 8.6986 16.2647 8.72813 16.1611 8.75144C16.0135 8.78459 13.6852 10.3251 9.16839 13.3726C8.50797 13.8269 7.9097 14.0483 7.371 14.0366C6.78051 14.0239 5.64095 13.702 4.79405 13.427C3.7581 13.0895 2.93192 12.9111 3.00443 12.3379C3.04069 12.0396 3.45249 11.7342 4.23723 11.4221Z"
        fill="url(#paint0_linear_558_25332)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_558_25332"
          x1="12"
          y1="5"
          x2="12"
          y2="19.9179"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AABEE" />
          <stop offset="1" stopColor="#229ED9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const TwitterIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7711 8.08863C19.7779 8.26352 19.7802 8.43833 19.7802 8.61322C19.7802 13.9154 16.0503 20.0365 9.22975 20.0365C7.13458 20.0365 5.18638 19.3687 3.54492 18.232C3.83508 18.2638 4.12976 18.2877 4.42896 18.2877C6.16614 18.2877 7.76615 17.6437 9.03531 16.5625C7.41269 16.5387 6.04255 15.3701 5.57 13.7803C5.79685 13.828 6.03047 13.8519 6.26938 13.8519C6.60627 13.8519 6.93335 13.8043 7.24687 13.7089C5.54888 13.3432 4.26994 11.7216 4.26994 9.77398C4.26994 9.75013 4.26994 9.74214 4.26994 9.72624C4.77037 10.0204 5.34314 10.2031 5.95134 10.227C4.95501 9.50357 4.30007 8.27145 4.30007 6.88032C4.30007 6.14898 4.48246 5.45736 4.80351 4.86116C6.63188 7.29365 9.36542 8.89149 12.4471 9.05843C12.3838 8.7643 12.3514 8.45436 12.3514 8.14433C12.3514 5.92647 14.0117 4.12988 16.0601 4.12988C17.1265 4.12988 18.0897 4.61486 18.7657 5.3939C19.6121 5.21901 20.405 4.88516 21.1224 4.4241C20.8443 5.36212 20.2572 6.14894 19.49 6.6418C20.2407 6.54641 20.9566 6.33194 21.6206 6.01397C21.1224 6.81685 20.4954 7.52423 19.7711 8.08863Z"
        fill="#1EA1F2"
      />
    </svg>
  );
};

export const EmailIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33823 7.38771C3.49006 7.61447 3.6889 7.8111 3.92625 7.96214L10.9262 12.4167L9.8525 14.104L3 9.74333V15.4C3 17.6091 4.79086 19.4 7 19.4H17C19.2091 19.4 21 17.6091 21 15.4V9.74333L14.1475 14.104C12.8372 14.9378 11.1628 14.9378 9.8525 14.104L10.9262 12.4167C11.5814 12.8336 12.4186 12.8336 13.0738 12.4167L20.0738 7.96214C20.3111 7.8111 20.5099 7.61447 20.6618 7.38771C20.0417 5.98156 18.6355 5 17 5H7C5.3645 5 3.95826 5.98156 3.33823 7.38771Z"
        fill="#353C4B"
      />
    </svg>
  );
};

export const HamsterboxIcon: FC<IconProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="180"
      height="28"
      viewBox="0 0 180 28"
      fill="none"
    >
      <g clipPath="url(#clip0_795_496)">
        <path
          d="M180 3.53462V25.1478C179.999 25.6724 179.79 26.1753 179.419 26.546C179.048 26.9167 178.545 27.1249 178.02 27.1249H1.97704C1.45292 27.1241 0.950485 26.9156 0.579878 26.545C0.209272 26.1744 0.000739756 25.6719 0 25.1478L0 3.53462C0 3.01027 0.208295 2.50741 0.579061 2.13664C0.949828 1.76587 1.4527 1.55758 1.97704 1.55758H136.802C136.462 1.93744 136.227 2.399 136.119 2.89704H4.70351C3.81353 2.89704 2.96001 3.25058 2.3307 3.87989C1.70139 4.5092 1.34785 5.36272 1.34785 6.2527V22.4213C1.34785 23.3113 1.70139 24.1648 2.3307 24.7942C2.96001 25.4235 3.81353 25.777 4.70351 25.777H175.283C176.172 25.777 177.026 25.4235 177.655 24.7942C178.285 24.1648 178.638 23.3113 178.638 22.4213V6.26109C178.638 5.37111 178.285 4.51759 177.655 3.88828C177.026 3.25897 176.172 2.90543 175.283 2.90543H155.957C155.85 2.40763 155.616 1.94607 155.277 1.56597H178.02C178.544 1.56522 179.046 1.77204 179.417 2.14107C179.788 2.51011 179.998 3.01124 180 3.53462V3.53462Z"
          fill={props.color}
        />
        <path
          d="M15.4332 15.9673H9.96629V22.4409H5.49208V6.31422H9.96629V12.3768H15.4332V6.31422H19.9074V22.4409H15.4332V15.9673Z"
          fill={props.color}
        />
        <path
          d="M32.9357 19.8095H27.2171L26.3475 22.4409H21.6356L27.508 6.31422H32.6785L38.5341 22.4409H33.8054L32.9357 19.8095ZM30.075 11.1631L28.3609 16.3784H31.8144L30.075 11.1631Z"
          fill={props.color}
        />
        <path
          d="M40.2678 6.31422H45.6872L49.728 16.7783L53.6904 6.31422H59.0874V22.4409H54.6132V13.5429L51.5568 22.4409H47.818L44.742 13.4729V22.4409H40.2678V6.31422Z"
          fill={props.color}
        />
        <path
          d="M67.5605 22.6003C63.9699 22.6003 61.1791 20.8833 60.9974 17.4298H65.7764C65.8687 18.6434 66.5789 19.0545 67.4011 19.0545C68.2232 19.0545 68.8188 18.6434 68.8188 17.8884C68.7965 15.3046 60.989 16.5154 61.0421 10.9115C61.0421 7.75435 63.6735 6.06255 67.0823 6.06255C70.7875 6.06255 73.212 7.86901 73.3713 11.0709H68.5112C68.4637 10.067 67.8485 9.60835 67.0236 9.60835C66.8669 9.59013 66.7082 9.60681 66.5588 9.65718C66.4094 9.70756 66.273 9.79039 66.1594 9.89972C66.0458 10.0091 65.9578 10.1422 65.9017 10.2895C65.8457 10.4369 65.8229 10.5949 65.8351 10.7521C65.8351 13.1542 73.5895 12.3768 73.5895 17.5445C73.5783 20.38 71.3803 22.6003 67.5605 22.6003Z"
          fill={props.color}
        />
        <path
          d="M74.8814 6.31422H87.9181V9.88239H83.6117V22.4409H79.1375V9.88239H74.8814V6.31422Z"
          fill={props.color}
        />
        <path
          d="M100.3 9.90476H94.4672V12.5362H99.6125V15.9393H94.4672V18.8476H100.3V22.4409H89.9846V6.31422H100.3V9.90476Z"
          fill={props.color}
        />
        <path
          d="M109.618 6.31422C113.622 6.31422 115.633 8.60165 115.633 11.4847C115.633 13.5876 114.489 15.4192 112.09 16.1491L115.725 22.4409H110.706L107.504 16.4986H107.023V22.4409H102.549V6.31422H109.618ZM109.24 10.067H107.023V13.4226H109.24C110.454 13.4226 111.072 12.827 111.072 11.7308C111.072 10.7297 110.457 10.067 109.24 10.067Z"
          fill={props.color}
        />
        <path
          d="M125.557 22.4409H117.585V6.31422H125.317C128.586 6.31422 130.599 7.82426 130.599 10.5088C130.599 12.4662 129.455 13.733 127.878 14.1692C128.761 14.3627 129.549 14.8555 130.11 15.5639C130.67 16.2723 130.969 17.1529 130.954 18.0562C130.966 20.7715 129.022 22.4409 125.557 22.4409ZM124.321 9.88239H122.056V12.7179H124.321C125.418 12.7179 126.013 12.2621 126.013 11.3197C126.013 10.3774 125.429 9.88239 124.333 9.88239H124.321ZM124.64 15.8974H122.056V18.8252H124.665C125.784 18.8252 126.343 18.3694 126.343 17.4074C126.343 16.4455 125.75 15.8974 124.651 15.8974H124.64Z"
          fill={props.color}
        />
        <path
          d="M167.321 17.8968L164.645 22.4465H159.544L164.782 14.1916L159.36 6.31422H164.645L167.688 10.7521L170.299 6.31422H175.4L170.232 14.4237L175.744 22.4269H170.459L167.321 17.8968Z"
          fill={props.color}
        />
        <path
          d="M158.745 16.96C158.515 14.955 157.559 14.4433 157.005 12.7291C156.955 12.5781 156.977 12.6117 156.854 12.0803C155.786 7.49988 152.47 6.10729 153.163 5.36904C153.46 5.05585 154.161 4.7035 154.22 3.97085C154.22 3.94569 154.22 3.91213 154.22 3.87298C154.22 3.48175 154.079 3.10374 153.821 2.80932C153.563 2.51489 153.207 2.3241 152.82 2.27246C152.432 2.22082 152.038 2.31185 151.713 2.5286C151.387 2.74535 151.151 3.07305 151.049 3.45073H141.239C140.837 2.18117 139.111 1.64986 138.163 3.25498C138.093 3.48667 138.063 3.72899 138.077 3.97085C138.135 4.68952 138.837 5.04187 139.134 5.36904C139.827 6.10449 136.508 7.49708 135.443 12.0803C135.319 12.6117 135.342 12.5781 135.292 12.7291C134.732 14.4545 133.781 14.9662 133.552 16.96C133.501 17.3973 133.495 17.8385 133.533 18.2771C133.603 18.9958 133.748 20.3045 134.738 21.4258C136.237 23.1232 138.507 23.0869 138.91 23.0757H153.39C153.792 23.0757 156.066 23.1232 157.565 21.4258C158.555 20.3073 158.7 18.9958 158.77 18.2771C158.806 17.8384 158.797 17.3971 158.745 16.96V16.96Z"
          fill="#C4BBD7"
        />
        <path
          d="M158.311 20.0137C158.404 19.79 159.128 17.9751 158.364 16.2637C157.184 13.6295 153.233 12.9668 150.535 13.5317C148.916 13.8913 147.436 14.712 146.273 15.8946C145.128 14.6887 143.64 13.8638 142.011 13.5317C138.756 12.8913 136.262 14.5523 135.786 14.8851C134.03 16.1491 133.359 18.4002 134.109 20.257C134.964 22.4046 137.543 23.6126 139.942 22.7737H152.621C153.744 23.1299 154.961 23.0427 156.022 22.53C157.082 22.0173 157.907 21.1179 158.325 20.0165L158.311 20.0137Z"
          fill="white"
        />
        <path
          d="M146.102 16.4343C146.157 16.7753 146.124 17.1244 146.007 17.4494C145.954 17.5709 145.877 17.6806 145.781 17.7723C145.685 17.864 145.572 17.9357 145.448 17.9835C145.112 18.1069 144.752 18.1509 144.397 18.1121C144.075 18.101 143.766 17.9807 143.521 17.771C143.373 17.6172 143.138 17.8521 143.286 18.0059C143.58 18.2662 143.954 18.419 144.346 18.4393C144.764 18.4909 145.187 18.438 145.579 18.2855C145.891 18.1661 146.147 17.9335 146.295 17.634C146.453 17.255 146.504 16.8402 146.443 16.4343C146.418 16.2246 146.086 16.2218 146.111 16.4343H146.102Z"
          fill="#07080A"
        />
        <path
          d="M146.265 16.4343C146.206 16.8405 146.258 17.2549 146.416 17.634C146.562 17.9338 146.817 18.1667 147.129 18.2855C147.522 18.4369 147.946 18.4897 148.365 18.4393C148.757 18.419 149.13 18.2662 149.424 18.0059C149.573 17.8521 149.338 17.6172 149.19 17.771C148.945 17.9807 148.636 18.101 148.314 18.1121C147.959 18.1511 147.599 18.1071 147.263 17.9835C146.625 17.7262 146.525 17.0495 146.597 16.4343C146.622 16.2218 146.29 16.2246 146.265 16.4343V16.4343Z"
          fill="#07080A"
        />
        <path
          d="M139.693 12.1307C139.313 11.5938 138.79 11.0737 138.899 10.4361C138.899 10.3829 138.946 10.1564 139.044 10.1369C139.064 10.1369 139.114 10.1369 139.293 10.3662C139.405 10.5116 139.455 10.6039 139.528 10.7101C139.617 10.8348 139.714 10.9534 139.819 11.0653C140.112 11.4176 140.261 11.5966 140.289 11.7811C140.289 11.8147 140.353 12.1558 140.166 12.2565C140.086 12.3001 139.992 12.3113 139.904 12.2879C139.816 12.2645 139.741 12.2082 139.693 12.1307V12.1307Z"
          fill="#07080A"
        />
        <path
          d="M152.419 12.1307C152.802 11.5938 153.323 11.0736 153.214 10.4361C153.214 10.3829 153.166 10.1564 153.068 10.1369C153.051 10.1369 152.998 10.1369 152.819 10.3662C152.707 10.5116 152.657 10.6039 152.584 10.7101C152.5 10.8351 152.406 10.9538 152.305 11.0653C152.011 11.4176 151.863 11.5966 151.835 11.7811C151.835 11.8147 151.771 12.1558 151.958 12.2565C152.037 12.2968 152.128 12.3062 152.213 12.2829C152.298 12.2596 152.372 12.2054 152.419 12.1307V12.1307Z"
          fill="#07080A"
        />
        <path
          d="M146.343 15.4556H145.912C145.86 15.4555 145.809 15.4666 145.761 15.4881C145.714 15.5096 145.672 15.541 145.637 15.5802C145.603 15.6195 145.578 15.6656 145.563 15.7155C145.548 15.7654 145.544 15.8179 145.551 15.8694L145.655 16.6105C145.666 16.6972 145.709 16.7768 145.775 16.8344C145.841 16.892 145.925 16.9238 146.013 16.9237H146.625C146.713 16.9238 146.797 16.892 146.863 16.8344C146.929 16.7768 146.972 16.6972 146.983 16.6105L147.087 15.8694C147.094 15.8179 147.09 15.7654 147.075 15.7155C147.06 15.6656 147.035 15.6195 147.001 15.5802C146.966 15.541 146.924 15.5096 146.877 15.4881C146.829 15.4666 146.778 15.4555 146.726 15.4556H146.343Z"
          fill="#07080A"
        />
        <path
          d="M138.642 23.4896C137.766 23.4896 135.566 23.3022 134.044 21.5769C132.867 20.243 132.719 18.7217 132.646 17.9891C132.601 17.4957 132.609 16.9989 132.669 16.507C132.783 15.4918 133.137 14.5181 133.7 13.6659C134.007 13.1845 134.255 12.6682 134.439 12.1279C134.452 12.0866 134.463 12.0446 134.472 12.0021C134.489 11.921 134.517 11.7923 134.573 11.5434C135.261 8.59047 136.824 6.8679 137.758 5.84163C137.912 5.67385 138.085 5.4809 138.208 5.3299C137.833 5.02509 137.257 4.52454 137.19 3.68842C137.187 3.63441 137.187 3.58025 137.19 3.52623C137.188 3.21132 137.248 2.89907 137.367 2.60741C137.486 2.31576 137.661 2.05046 137.883 1.82674C138.104 1.60301 138.368 1.42528 138.658 1.30375C138.949 1.18222 139.261 1.11928 139.576 1.11855C139.991 1.12591 140.398 1.2395 140.757 1.4485C141.116 1.65751 141.416 1.95498 141.628 2.31261H150.445C150.709 1.85732 151.115 1.50165 151.601 1.30069C152.087 1.09973 152.626 1.0647 153.134 1.20103C153.642 1.33737 154.091 1.63745 154.411 2.05479C154.731 2.47212 154.905 2.98342 154.905 3.50946C154.909 3.5644 154.909 3.6195 154.905 3.67444C154.838 4.51336 154.262 5.00831 153.887 5.31312C154.01 5.46412 154.187 5.65707 154.338 5.82486C155.272 6.85113 156.835 8.57369 157.523 11.5239C157.581 11.7755 157.607 11.9042 157.623 11.9853C157.632 12.0278 157.643 12.0698 157.657 12.1111C157.841 12.6514 158.089 13.1677 158.395 13.6491C158.953 14.5059 159.301 15.4822 159.41 16.4986V16.4986C159.468 16.9907 159.474 17.4873 159.43 17.9807C159.357 18.7106 159.212 20.2346 158.032 21.5685C156.396 23.4197 153.985 23.5008 153.278 23.4784H138.653L138.642 23.4896ZM138.737 3.35565C138.672 3.70241 138.974 3.94289 139.232 4.15262C139.357 4.25219 139.475 4.3596 139.587 4.47421C140.356 5.29075 139.587 6.13525 138.907 6.88189C138.021 7.85782 136.67 9.33431 136.086 11.8902C136.033 12.1223 136.007 12.2425 135.991 12.318C135.973 12.413 135.949 12.5064 135.918 12.5977C135.7 13.2474 135.405 13.8688 135.04 14.4489C134.582 15.1151 134.294 15.8831 134.201 16.686C134.155 17.0693 134.148 17.4563 134.181 17.8409C134.243 18.4533 134.352 19.5942 135.196 20.5506C136.39 21.9068 138.231 21.9488 138.762 21.9488H153.303C153.837 21.9655 155.674 21.918 156.868 20.5506C157.707 19.5942 157.825 18.4533 157.883 17.8409C157.916 17.4563 157.911 17.0694 157.867 16.686C157.773 15.8831 157.485 15.1151 157.028 14.4489C156.665 13.864 156.373 13.2379 156.158 12.5837C156.128 12.4921 156.104 12.3987 156.085 12.3041C156.069 12.2286 156.043 12.1083 155.99 11.8762C155.395 9.32033 154.055 7.84384 153.169 6.8679C152.489 6.12127 151.72 5.27677 152.492 4.46022C152.602 4.3469 152.72 4.24131 152.844 4.14423C153.124 3.90654 153.387 3.69961 153.348 3.28575C153.309 2.87188 152.788 2.65097 152.45 2.67334C152.276 2.68476 152.109 2.75047 151.974 2.86129C151.838 2.9721 151.741 3.12246 151.695 3.29134L151.538 3.8646H140.563L140.392 3.3221C140.34 3.14482 140.236 2.9875 140.092 2.8711C139.949 2.7547 139.774 2.68474 139.59 2.67054C139.415 2.67919 139.246 2.73603 139.102 2.83476C138.958 2.93349 138.844 3.07024 138.773 3.22982C138.757 3.27059 138.745 3.3127 138.737 3.35565V3.35565Z"
          fill="#07080A"
        />
        <path
          d="M151.236 3.7835C151.111 3.40268 150.931 3.04197 150.702 2.71249C150.182 1.95746 149.047 1.11855 147.57 0.760616C146.651 0.543835 145.694 0.543835 144.774 0.760616C143.435 1.05371 142.248 1.82402 141.435 2.92781C141.159 3.30864 140.988 3.75496 140.937 4.22253C140.917 4.3876 140.91 4.55411 140.918 4.72029C140.918 4.95238 141.055 5.07543 141.332 5.12856L141.418 5.14254C141.455 5.3243 141.48 5.49488 141.527 5.66266C141.726 6.35057 142.266 6.70851 143.188 6.67216C143.658 6.64692 144.125 6.58898 144.587 6.49878C145.535 6.31105 146.511 6.29778 147.464 6.45963C147.995 6.55771 148.531 6.62771 149.069 6.66936C149.794 6.72808 150.467 6.482 150.708 5.85002C150.787 5.61811 150.852 5.3819 150.904 5.14254C151.298 5.06424 151.418 4.94959 151.385 4.61123C151.367 4.33051 151.318 4.05275 151.236 3.7835V3.7835Z"
          fill="#3CBF7C"
        />
        <path
          d="M149.262 7.27058C149.179 7.27476 149.096 7.27476 149.013 7.27058C148.451 7.22687 147.891 7.15406 147.336 7.05246C146.452 6.90371 145.549 6.91792 144.671 7.09441C144.183 7.18781 143.69 7.24761 143.194 7.27338C141.606 7.33769 141.1 6.40091 140.937 5.83604C140.916 5.76615 140.898 5.69522 140.884 5.62351C140.717 5.54779 140.574 5.42567 140.473 5.27158C140.373 5.11749 140.318 4.93785 140.317 4.75384C140.308 4.553 140.317 4.35177 140.345 4.15262C140.41 3.58565 140.621 3.04525 140.957 2.58385C141.851 1.35829 143.161 0.501161 144.643 0.173375C145.654 -0.0636511 146.707 -0.0636511 147.719 0.173375C149.096 0.480884 150.324 1.25429 151.197 2.36294C151.459 2.73973 151.665 3.15223 151.81 3.58775V3.58775C151.901 3.89539 151.958 4.21251 151.978 4.53293C152.019 4.75006 151.984 4.9748 151.879 5.16934C151.774 5.36389 151.606 5.51637 151.401 5.60114C151.365 5.75689 151.318 5.91008 151.262 6.05975C150.954 6.82596 150.205 7.27058 149.262 7.27058ZM146.186 5.74935C146.647 5.74881 147.106 5.79 147.559 5.87239C148.07 5.96636 148.585 6.03357 149.103 6.07373C149.355 6.0961 149.959 6.09331 150.14 5.6319C150.186 5.4991 150.225 5.36371 150.255 5.22643C150.275 5.14533 150.294 5.06424 150.316 4.98314L150.414 4.62521L150.769 4.5553C150.758 4.35732 150.724 4.16128 150.669 3.97086C150.56 3.64275 150.405 3.33198 150.207 3.04805C149.771 2.42166 148.739 1.64986 147.428 1.33387C146.6 1.13937 145.739 1.13937 144.911 1.33387C143.723 1.59519 142.668 2.2726 141.936 3.2438L141.891 3.30532C141.687 3.60245 141.559 3.94534 141.519 4.30362C141.508 4.38713 141.502 4.47113 141.499 4.5553L141.911 4.6308L141.992 5.02509C142.006 5.08661 142.017 5.14533 142.028 5.20685C142.044 5.30107 142.064 5.39441 142.09 5.48649C142.176 5.7913 142.369 6.1017 143.158 6.06814C143.599 6.04234 144.038 5.98722 144.472 5.90315C145.04 5.8027 145.615 5.75218 146.192 5.75215L146.186 5.74935Z"
          fill="#07080A"
        />
        <path
          d="M141.413 5.14253C144.491 4.28047 147.747 4.28047 150.825 5.14253Z"
          fill="#3CBF7C"
        />
        <path
          d="M141.572 5.7158L141.253 4.57208C144.436 3.6765 147.805 3.6765 150.988 4.57208L150.666 5.7158C149.228 5.3121 147.744 5.10146 146.251 5.08941C144.669 5.07516 143.094 5.28608 141.572 5.7158V5.7158Z"
          fill="#07080A"
        />
        <path
          d="M145.784 3.57377C145.896 3.61829 146.015 3.64107 146.136 3.64088C146.382 3.64026 146.619 3.54633 146.799 3.37802C146.703 3.28577 146.595 3.20762 146.477 3.14592C146.378 3.2167 146.26 3.25483 146.139 3.25498C146.065 3.25535 145.992 3.24109 145.923 3.21304C145.812 3.17327 145.714 3.10125 145.644 3.0061C145.512 3.02456 145.384 3.06225 145.263 3.11796C145.376 3.32781 145.561 3.48974 145.784 3.57377V3.57377Z"
          fill="white"
        />
        <path
          d="M147.045 3.01449L147.061 2.96695V2.94738H146.648C146.604 3.02208 146.545 3.08683 146.474 3.13753C146.592 3.19923 146.7 3.27738 146.796 3.36963C146.905 3.27167 146.99 3.15023 147.045 3.01449V3.01449Z"
          fill="white"
        />
        <path
          d="M145.166 2.6202C145.158 2.79311 145.197 2.96489 145.277 3.11796C145.398 3.06225 145.526 3.02456 145.658 3.0061C145.608 2.93584 145.574 2.85592 145.558 2.77158C145.541 2.68725 145.543 2.6004 145.563 2.51674C145.427 2.53539 145.293 2.57012 145.166 2.6202V2.6202Z"
          fill="white"
        />
        <path
          d="M145.588 2.43844C145.632 2.32634 145.709 2.23025 145.809 2.16285C145.909 2.09545 146.027 2.05992 146.147 2.06093C146.221 2.06147 146.293 2.07472 146.362 2.10008C146.495 2.15354 146.604 2.25274 146.67 2.37972V2.37972H147.089V2.35735C147.047 2.21673 146.973 2.08761 146.873 1.97963C146.773 1.87165 146.65 1.7876 146.513 1.73375C146.291 1.65007 146.045 1.65007 145.823 1.73375C145.824 1.74582 145.824 1.75804 145.823 1.77011C145.822 1.80724 145.807 1.8427 145.781 1.86921C145.755 1.89573 145.72 1.9113 145.683 1.91272C145.708 2.00062 145.698 2.095 145.655 2.17558C145.628 2.2276 145.584 2.26967 145.532 2.29582C145.457 2.33614 145.371 2.34711 145.289 2.32659H145.252V2.34057C145.219 2.43019 145.2 2.5246 145.196 2.6202C145.314 2.57238 145.437 2.53768 145.563 2.51674C145.571 2.48878 145.577 2.46361 145.588 2.43844Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_795_496">
          <rect width="180" height="27.1249" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
