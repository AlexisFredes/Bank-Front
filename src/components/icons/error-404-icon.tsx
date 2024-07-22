import { IconProps } from './model/icon-props';

export const Error404Icon = ({ width, height, VBH, VBW }: IconProps) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox={`0 0 ${VBW} ${VBH}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#D7282F"
        d="M35.875 52.478c1.16 0 2.273-.469 3.094-1.303a4.49 4.49 0 0 0 1.281-3.148 4.49 4.49 0 0 0-1.281-3.147 4.338 4.338 0 0 0-3.094-1.304c-1.16 0-2.273.47-3.094 1.304a4.49 4.49 0 0 0-1.281 3.147c0 1.18.46 2.313 1.281 3.148a4.338 4.338 0 0 0 3.094 1.303Zm17.5-4.45a4.49 4.49 0 0 1-1.281 3.147A4.338 4.338 0 0 1 49 52.478a4.338 4.338 0 0 1-3.094-1.303 4.49 4.49 0 0 1-1.281-3.148c0-1.18.46-2.312 1.281-3.147A4.338 4.338 0 0 1 49 43.576c1.16 0 2.273.47 3.094 1.304a4.49 4.49 0 0 1 1.281 3.147Zm8.75 4.45c1.16 0 2.273-.469 3.094-1.303a4.49 4.49 0 0 0 1.281-3.148 4.49 4.49 0 0 0-1.281-3.147 4.338 4.338 0 0 0-3.094-1.304c-1.16 0-2.273.47-3.094 1.304a4.49 4.49 0 0 0-1.281 3.147c0 1.18.46 2.313 1.281 3.148a4.338 4.338 0 0 0 3.094 1.303Z"
      />
      <path
        fill="#D7282F"
        d="M31.5 28c-4.641 0-9.093 1.686-12.374 4.686C15.844 35.686 14 39.756 14 44v80c0 4.243 1.844 8.313 5.126 11.314 3.281 3 7.733 4.686 12.374 4.686h105c4.641 0 9.092-1.686 12.374-4.686C152.156 132.313 154 128.243 154 124V44c0-4.243-1.844-8.313-5.126-11.314-3.282-3-7.733-4.686-12.374-4.686h-105Zm113.75 16v16H22.75V44c0-2.122.922-4.157 2.563-5.657C26.953 36.843 29.179 36 31.5 36h105c2.321 0 4.546.843 6.187 2.343s2.563 3.535 2.563 5.657ZM31.5 132c-2.32 0-4.546-.843-6.187-2.343S22.75 126.122 22.75 124V68h122.5v56c0 2.122-.922 4.157-2.563 5.657S138.821 132 136.5 132h-105Z"
      />
      <path
        fill="#D7282F"
        d="M64.125 121.056c.688.687 1.547 1.031 2.407 1.031.86 0 1.776-.344 2.407-1.031l15.13-15.114 15.129 15.114c.687.687 1.547 1.031 2.406 1.031.86 0 1.777-.344 2.407-1.031 1.319-1.317 1.319-3.492 0-4.866l-15.129-15.114 15.129-15.114c1.319-1.317 1.319-3.492 0-4.866-1.318-1.374-3.495-1.317-4.87 0L84.01 96.21 68.88 81.096c-1.318-1.317-3.495-1.317-4.87 0-1.376 1.317-1.319 3.492 0 4.866l15.129 15.114-15.13 15.114c-1.318 1.317-1.318 3.492 0 4.866h.115Z"
      />
    </svg>
  );
};
