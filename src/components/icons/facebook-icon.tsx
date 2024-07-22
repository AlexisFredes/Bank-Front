import { IconProps } from './model/icon-props';

export const FacebookIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width ?? '43.38px'}
      height={height ?? '43.38px'}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_984_6553)">
        <g clipPath="url(#clip1_984_6553)">
          <path
            d="M28.3467 17.1224H30.7024V13.4703C29.5557 13.3673 28.409 13.3101 27.2623 13.3101C23.8596 13.3101 21.5289 15.222 21.5289 18.7137V21.7247H17.6899V25.8232H21.5289V36.3101H26.1406V25.8232H29.967L30.5404 21.7247H26.1281V19.1144C26.1281 17.9123 26.4771 17.1224 28.3342 17.1224H28.3467Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_984_6553">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12.6899 12.3101)"
          />
        </clipPath>
        <clipPath id="clip1_984_6553">
          <rect
            width="13"
            height="23"
            fill="white"
            transform="translate(17.6899 13.3101)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
