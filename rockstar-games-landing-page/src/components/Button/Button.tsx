interface ButtonProps {
  text: string;
  h: string;
  w: string;
  font: string
}

function Button({ text, h, w, font }: ButtonProps) {
  return (
    <button
      style={{ width: w, height: h , fontWeight: font}}
      className={`
        bg-[#FCAF17] 
        text-[#020202] 
        rounded-[15px] 
        text-[20px] 
        flex justify-center items-center
        cursor-pointer
        shadow-[0px_4px_16px_1px_#00000052]
        transition-all duration-300 ease-in-out
        hover:bg-[#e59d12] 
        hover:scale-105 
        hover:shadow-lg
        active:scale-95
        active:shadow-sm
      `}
    >
      {text}
    </button>
  );
}

export default Button;
