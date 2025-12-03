import { useParams } from "react-router-dom";

function GameGallery() {
  const { id } = useParams();

  return (
    <div className="w-full min-h-[60vh] flex flex-col justify-center items-center mt-28 text-white">
      <h1 className="text-6xl font-extrabold mb-4">GALLERY {id}</h1>
      <p className="text-xl text-[#B1B1B1]">Details for game ID: {id}</p>
      <div className="mt-10 p-10 border border-[#333] rounded-lg bg-[#1a1a1a]">
        Game Card #{id}.
      </div>
    </div>
  );
}

export default GameGallery;
