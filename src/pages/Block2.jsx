import DetailBar from "../components/block2 comps/DetailBar";
import securityImage from "../assets/security.png";
import containerImage from "../assets/container.png";
import BasicInfoBar from "../components/BasicInfoBar";
import { engineerIcon, experienceIcon, projectIcon, systemIcon } from './../assets/Icons';



const data = [
    {
        name: "Vagyonvédelem",
        title: "Biztonságtechnikai rendszerek",
        description:"Innovatív vagyonvédelmi rendszereket kínálunk, amelyek a szükséges szakhatósági engedélyek beszerzésétől a teljeskörű kivitelezésig minden folyamatot magukban foglalnak, a tervezéstől a karbantartásig.",
        list: [
            "Tervezés",
            "Kivitelezés",
            "Egyedi megoldások",
            "Karbantartás"
        ],
        image: securityImage
    },
    {
        name: "Beléptető Rendszerek",
        title: "Konténer megoldások",
        description:"A konténereink célja, hogy ideiglenes helyszíneken biztosítsák a munkavégzést, beléptetést, szállásolást és értéktárolást, ipari és építési igényekre szabva. Könnyen szállíthatók, gyorsan telepíthetők, és megfelelnek a biztonságtechnikai követelményeknek, praktikus és funkcionális megoldásokat nyújtva.",
        list: [
            "Könnyen szállítható",
            "Gyorsan telepíthető",
            "Sokcélú felhasználás",
            "Egyedi gyártás"
        ],
        image: containerImage
    }
]

const infos = [
    {
        icon: experienceIcon,
        number: "30+",
        description: "Év Tapasztalat",
    },
    {
        icon: projectIcon,
        number: "600+",
        description: "Elkészült Projekt",
    },
    {
        icon: systemIcon,
        number: "1800+",
        description: "Aktív Rendszer",
    },
    {
        icon: engineerIcon,
        number: "12",
        description: "Szakértő Mérnök",
    }
]

const Block2 = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-[993px] text-center">
        <h1 className="font-[600] text-[48px]">
          A legjobb komplex szolgáltatást nyújtjuk a biztonségtechnika
          üzletágban!
        </h1>
      </div>

      <DetailBar detOrder={1} imgOrder={2} content={data[0]}/>
      <DetailBar detOrder={2} imgOrder={1} content={data[1]}/>
      <BasicInfoBar content={infos}/>
    </div>
  );
};

export default Block2;
