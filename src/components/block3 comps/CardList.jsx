import cardImage1 from "../../assets/cardImage1.png";
import cardImage2 from "../../assets/cardImage2.png";
import cardImage3 from "../../assets/cardImage3.png";
import scaniaLogo from "../../assets/scaniaLogo.png";
import mavLogo from "../../assets/mavLogo.png";
import mapeiLogo from "../../assets/mapeiLogo.png";

import {
  arrowRightIcon,
  securityCardLogo,
  securityCardLogo2,
  securityCardLogo3,
} from "../../assets/Icons";

const cards = [
  {
    headLogo: scaniaLogo,
    img: cardImage1,
    middleLogo: securityCardLogo,
    title: "Komplex biztonsági megoldások a Scania telephelyén",
    description:
      "Korszerűsítettük a videó-rendszert, fejlesztettük a kerítésvédelmet, valamint bevezettük a rendszámos beléptetést. Az automatizált biztonsági megoldás 24/7 védelmet nyújt, teljesen kiváltva a biztonsági őröket.",
  },
  {
    headLogo: mavLogo,
    img: cardImage2,
    middleLogo: securityCardLogo2,
    title: "Vagyonvédelmi- és insfrastruktúra felügyeleti rendszerek a MÁV-nál",
    description:
      "A GSM-R2 projekt során 65 MÁV állomáson valósítottuk meg a vagyonvédelmi és infrastruktúra felügyeleti rendszerek kiépítését, beleértve a tűzjelző, behatolásjelző és beléptető rendszereket.",
  },
  {
    headLogo: mapeiLogo,
    img: cardImage3,
    middleLogo: securityCardLogo3,
    title: "Beléptető és munkaidő nyilvántartó rendszer a Mapei vállalatnál",
    description:
      "A Mapei Kft.-nél egy integrált beléptető és munkaidő-nyilvántartó rendszert vezettünk be, ami egyszerűsítette az adminisztrációt, pontosította a munkaidő-kezelést, és támogatta a bérszámfejtést.",
  },
];

const Card = ({ content }) => {
  return (
    <div className="max-w-[321px] max-h-[588px] box-border flex flex-col">
      <div className="max-h-[254px] relative">
        <img src={content.headLogo} className="absolute right-0" />
        <img src={content.img} />
      </div>
      <div className="bg-white relative px-6">
        <div className="absolute top-[-40px] left-[22px]">
          {content.middleLogo}
        </div>
        <h1 className="text-black mt-16 font-[600] text-[20px]">
          {content.title}
        </h1>
        <div className="w-[273px] h-[120px] my-2 text-ellipsis overflow-hidden">
          <p className="text-black font-[400] text-[16px] text-ellipsis">
            {content.description}
          </p>
        </div>
        <div className="flex items-center mt-3 mb-6">
          {arrowRightIcon}
          <a className="text-black mx-3">Elolvasom</a>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="flex gap-14 h-fit w-[1184px] pb-20">
      {cards.map((e) => (
        <Card content={e} />
      ))}
    </div>
  );
};

export default CardList;
