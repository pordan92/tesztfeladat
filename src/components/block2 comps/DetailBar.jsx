//TODO: props => reusable comp
import vagyobecslesImage from "../../assets/security.png";

const DetailBar = ({detOrder, imgOrder, content}) => {
  return (
    <div className="flex felx-row gap-16 px-14 py-28">
      <div className={`flex flex-col w-[575px] order-${detOrder}`}>
        <h3 className="font-[400] text-[20px] bg-[#4966bf3f] mb-5 uppercase">
          {content.name}
        </h3>
        <h1 className="font-[600] text-[36px] mb-5">
          {content.title}
        </h1>
        <p className="mb-10">
          {content.description}
        </p>
        <div className="grid grid-cols-2 gap-6 justify-between mb-10">
            <div className="flex flex-row">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 10.5C0.25 5.11522 4.61522 0.75 10 0.75C15.3848 0.75 19.75 5.11522 19.75 10.5C19.75 15.8848 15.3848 20.25 10 20.25C4.61522 20.25 0.25 15.8848 0.25 10.5ZM13.6103 8.68593C13.8511 8.34887 13.773 7.88046 13.4359 7.6397C13.0989 7.39894 12.6305 7.47701 12.3897 7.81407L9.1543 12.3436L7.53033 10.7197C7.23744 10.4268 6.76256 10.4268 6.46967 10.7197C6.17678 11.0126 6.17678 11.4874 6.46967 11.7803L8.71967 14.0303C8.87556 14.1862 9.09215 14.2656 9.31186 14.2474C9.53157 14.2293 9.73216 14.1153 9.8603 13.9359L13.6103 8.68593Z"
                  fill="#4967BF"
                />
              </svg>
              <h4 className="font-[600] text-[16px] ml-5">{content.list[0]}</h4>
            </div>
            <div className="flex flex-row">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 10.5C0.25 5.11522 4.61522 0.75 10 0.75C15.3848 0.75 19.75 5.11522 19.75 10.5C19.75 15.8848 15.3848 20.25 10 20.25C4.61522 20.25 0.25 15.8848 0.25 10.5ZM13.6103 8.68593C13.8511 8.34887 13.773 7.88046 13.4359 7.6397C13.0989 7.39894 12.6305 7.47701 12.3897 7.81407L9.1543 12.3436L7.53033 10.7197C7.23744 10.4268 6.76256 10.4268 6.46967 10.7197C6.17678 11.0126 6.17678 11.4874 6.46967 11.7803L8.71967 14.0303C8.87556 14.1862 9.09215 14.2656 9.31186 14.2474C9.53157 14.2293 9.73216 14.1153 9.8603 13.9359L13.6103 8.68593Z"
                  fill="#4967BF"
                />
              </svg>
              <h4 className="font-[600] text-[16px] ml-5">{content.list[1]}</h4>
            </div>
            <div className="flex flex-row">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 10.5C0.25 5.11522 4.61522 0.75 10 0.75C15.3848 0.75 19.75 5.11522 19.75 10.5C19.75 15.8848 15.3848 20.25 10 20.25C4.61522 20.25 0.25 15.8848 0.25 10.5ZM13.6103 8.68593C13.8511 8.34887 13.773 7.88046 13.4359 7.6397C13.0989 7.39894 12.6305 7.47701 12.3897 7.81407L9.1543 12.3436L7.53033 10.7197C7.23744 10.4268 6.76256 10.4268 6.46967 10.7197C6.17678 11.0126 6.17678 11.4874 6.46967 11.7803L8.71967 14.0303C8.87556 14.1862 9.09215 14.2656 9.31186 14.2474C9.53157 14.2293 9.73216 14.1153 9.8603 13.9359L13.6103 8.68593Z"
                  fill="#4967BF"
                />
              </svg>
              <h4 className="font-[600] text-[16px] ml-5">{content.list[2]}</h4>
            </div>
            <div className="flex flex-row">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 10.5C0.25 5.11522 4.61522 0.75 10 0.75C15.3848 0.75 19.75 5.11522 19.75 10.5C19.75 15.8848 15.3848 20.25 10 20.25C4.61522 20.25 0.25 15.8848 0.25 10.5ZM13.6103 8.68593C13.8511 8.34887 13.773 7.88046 13.4359 7.6397C13.0989 7.39894 12.6305 7.47701 12.3897 7.81407L9.1543 12.3436L7.53033 10.7197C7.23744 10.4268 6.76256 10.4268 6.46967 10.7197C6.17678 11.0126 6.17678 11.4874 6.46967 11.7803L8.71967 14.0303C8.87556 14.1862 9.09215 14.2656 9.31186 14.2474C9.53157 14.2293 9.73216 14.1153 9.8603 13.9359L13.6103 8.68593Z"
                  fill="#4967BF"
                />
              </svg>
              <h4 className="font-[600] text-[16px] ml-5">{content.list[3]}</h4>
            </div>
        </div>
        <button className="w-[158px] h-[48px] bg-[#EF7C00] flex justify-center items-center">
          Részletek
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
      <div className={`w-[575px] box-border order-${imgOrder}`}>
        <img
          className="w-[550px] h-[360px] m-4"
          src={content.image}
          alt="image"
        />
      </div>
    </div>
  );
};

export default DetailBar;
