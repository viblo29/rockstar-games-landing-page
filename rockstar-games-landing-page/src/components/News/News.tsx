import NewsCard from "./NewsCard";
import gta6 from "../../../public/gta 6.jpg";
import trailerImg from "../../../public/trailer.png";
import gtaCarDriving from "../../../public/gta-car-driving.png";

function News() {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-28 mx-[140px] flex flex-col gap-10">
        <div className="font-extrabold text-[48px]">Últimas Notícias</div>
        <div className="flex gap-10">
          <NewsCard
            variant="main"
            image={gta6}
            title="Grand Theft Auto VI - Veja o 1º trailer agora"
            author="Rockstar Games"
            date="5 de dezembro de 2023"
          />
          <div className="flex flex-col gap-10">
            <NewsCard
              variant="secondary"
              image={trailerImg}
              title="1º Trailer. Terça-feira, 5 de Dezembro. 9h Et."
              author="Rockstar Games "
              date="1 de dezembro de 2023"
            />
            <NewsCard
              variant="secondary"
              image={gtaCarDriving}
              title="Nova atualização de GTA Online chegando em dezembro"
              author="GTA Online"
              date="30 de novembro de 2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
