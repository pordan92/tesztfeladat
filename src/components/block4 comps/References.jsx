import mercedes from "../../assets/mercedes.png";
import belfry from "../../assets/belfry.png";
import kaeser from "../../assets/kaeser.png";
import marzek from "../../assets/marzek.png";
import trendency from "../../assets/trendency.png";
import szepmuveszeti from "../../assets/szepmuveszeti.png";
import mapei from "../../assets/mapei.png";
import kesz from "../../assets/kesz.png";
import knauf from "../../assets/knauf.png";

import linde from "../../assets/linde.png";
import bud from "../../assets/bud.png";
import hbd from "../../assets/hbd.png";
import lounge from "../../assets/lounge.png";
import bayer from "../../assets/bayer.png";
import build from "../../assets/build.png";
import kozgaz from "../../assets/kozgaz.png";
import mrp from "../../assets/mrp.png";
import bkjk from "../../assets/bkjk.png";

import ebh from "../../assets/ebh.png";
import ehrle from "../../assets/ehrle.png";
import gls from "../../assets/gls.png";
import hanon from "../../assets/hanon.png";
import market from "../../assets/market.png";
import tudasepito from "../../assets/tudasepito.png";
import whb from "../../assets/whb.png";
import tell from "../../assets/tell.png";
import operett from "../../assets/operett.png";

import peka from "../../assets/peka.png";
import scania from "../../assets/scania.png";
import omw from "../../assets/omw.png";
import mav from "../../assets/mav.png";
import zaev from "../../assets/zaev.png";

const brands = [
  mercedes,
  belfry,
  kaeser,
  marzek,
  trendency,
  szepmuveszeti,
  mapei,
  kesz,
  knauf,

  linde,
  bud,
  hbd,
  lounge,
  bayer,
  build,
  kozgaz,
  mrp,
  bkjk,

  ebh,
  ehrle,
  gls,
  hanon,
  market,
  tudasepito,
  whb,
  tell,
  operett,

  peka,
  scania,
  omw,
  mav,
  zaev,
];

const References = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-50">
      <div className="my-10 text-center">
        <h1 className="text-[#4967BF] bg-[#4967BF1A] text-[20px] font-[400] my-4">SIKERES EGYÜTTMŰKÖDÉSEINK</h1>
        <h1 className="text-[#111827] text-[24px] font-[300] mb-2">Vállalatok, akik már részesei voltak innovatív megoldásainknak.</h1>
      </div>
      <div className="flex flex-row flex-wrap w-wull justify-center items-center">
        {brands.map((e) => (
          <div className="w-[147px]">
            <img className="w-[83.13px] h-[77px] mx-auto" src={e} />
          </div>
        ))}
      </div>
      <button className="w-[208px] h-[48px] bg-[#ffffff] flex justify-center items-center text-[#111827] border-2 border-[#111827] my-14">
        Referencia Munkáink
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-4"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 10.7202C3.5 10.306 3.83579 9.97021 4.25 9.97021L14.8879 9.97021L10.7302 6.01084C10.4316 5.72374 10.4223 5.24896 10.7094 4.95038C10.9965 4.6518 11.4713 4.64249 11.7698 4.92959L17.2698 10.1796C17.4169 10.321 17.5 10.5162 17.5 10.7202C17.5 10.9242 17.4169 11.1194 17.2698 11.2608L11.7698 16.5108C11.4713 16.7979 10.9965 16.7886 10.7094 16.49C10.4223 16.1915 10.4316 15.7167 10.7302 15.4296L14.8879 11.4702L4.25 11.4702C3.83579 11.4702 3.5 11.1344 3.5 10.7202Z"
            fill="#111827"
          />
        </svg>
      </button>
    </div>
  );
};

export default References;
