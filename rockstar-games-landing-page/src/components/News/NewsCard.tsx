interface NewsCardProps {
  variant: 'main' | 'secondary';
  image: string;
  title: string;
  author: string;
  date: string;
}

const NewsCard = ({ variant, image, title, author, date }: NewsCardProps) => {
  
  const styles = {
    main: {
      container: "w-full xl:w-[860px] h-auto xl:h-[488px]",
      imgHeight: "h-[200px] sm:h-[280px] xl:h-[352px]", 
      contentPadding: "p-4 xl:pt-6 xl:pb-8 xl:pl-8",
      titleSize: "text-xl sm:text-2xl xl:text-[32px]",
      metaGap: "gap-4 xl:gap-[25px]",
      metaSize: "text-sm xl:text-base",
    },
    secondary: {
      container: "w-full xl:w-[260px] h-auto xl:h-56", 
      imgHeight: "h-[160px] xl:h-[142px]",
      contentPadding: "p-3 xl:pt-[8px] xl:pb-3 xl:pl-3",
      titleSize: "text-lg xl:text-[13px] xl:pr-[31px]",
      metaGap: "gap-3 xl:gap-[5px]",
      metaSize: "text-xs xl:text-[12px]",
    }
  };

  const currentStyle = styles[variant];

  return (
    <div className={`${currentStyle.container} bg-[#020202] rounded-2xl overflow-hidden hover:scale-[1.02] xl:hover:scale-104 transition-transform duration-300 cursor-pointer shadow-lg flex flex-col`}>
      <div
        className={`w-full bg-cover bg-center bg-no-repeat ${currentStyle.imgHeight}`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      <div className={`${currentStyle.contentPadding} flex flex-col justify-between flex-1`}>
        <div className={`${currentStyle.titleSize} font-medium leading-tight text-white mb-2 xl:mb-1`}>
          {title}
        </div>
        
        <div className={`flex ${currentStyle.metaGap} ${currentStyle.metaSize} text-[#797979] font-light`}>
          <div>{author}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;