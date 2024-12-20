const InterInfoBar = () => {
  return (
    <div className=" box-border w-[1184px] h-[179px] gap-24 flex flex-row items-center justify-around bg-sky-600 border border-sky-600 rounded-lg">
      <div>
        <h1 className="font-[600] text-[36px]">Vagyonvédelemi rendszerre van szüksége? </h1>
        <h1 className="font-[600] text-[28px]">Keressen bennünket bizalommal és kérje tanácsadásunkat!</h1>
      </div>
      <button className="w-[183px] h-[48px] bg-[#EF7C00] flex justify-center items-center">
        Ajánlatkérés
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-4"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-2.62268e-07 6C-2.80374e-07 5.58579 0.335786 5.25 0.75 5.25L11.3879 5.25L7.23017 1.29062C6.93159 1.00353 6.92228 0.528746 7.20937 0.230167C7.49647 -0.0684112 7.97125 -0.077721 8.26983 0.209374L13.7698 5.45937C13.9169 5.60078 14 5.79599 14 6C14 6.20401 13.9169 6.39922 13.7698 6.54062L8.26983 11.7906C7.97125 12.0777 7.49647 12.0684 7.20938 11.7698C6.92228 11.4713 6.93159 10.9965 7.23017 10.7094L11.3879 6.75L0.75 6.75C0.335786 6.75 -2.44163e-07 6.41421 -2.62268e-07 6Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default InterInfoBar;
