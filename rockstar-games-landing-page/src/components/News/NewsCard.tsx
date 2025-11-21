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
      container: "w-[860px] h-[488px]",
      imgHeight: "352px",
      contentPadding: "pt-6 pb-8 pl-8",
      titleSize: "text-[32px]",
      metaGap: "gap-[25px]",
      metaSize: "text-base",
    },
    secondary: {
      container: "w-[260px] h-56",
      imgHeight: "142px",
      contentPadding: "pt-[8px] pb-3 pl-3",
      titleSize: "text-[13px] pr-[31px]",
      metaGap: "gap-[5px]",
      metaSize: "text-[12px]",
    }
  };

  const currentStyle = styles[variant];

  return (
    <div className={`${currentStyle.container} bg-[#020202] rounded-2xl overflow-hidden hover:scale-104 transition-transform duration-300 cursor-pointer shadow-lg`}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          width: "100%",
          height: currentStyle.imgHeight,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className={`${currentStyle.contentPadding} flex flex-col justify-between`}>
        <div className={`${currentStyle.titleSize} font-medium leading-tight text-white mb-1`}>
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