
type CardProps = {
  title: string;
  subTitle?: string;
  description: string;
  cardImage: { src: string; alt: string };
  onClick?: () => void;
};

const Card = ({
  title,
  subTitle,
  description,
  cardImage,
  onClick,
}: CardProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded shadow-lg overflow-hidden w-full bg-white flex flex-col transition-all duration-200 hover:bg-gray-100 hover:scale-105 h-full"
    >
      <div className="relative w-full">
        <img
          className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover"
          src={cardImage.src}
          alt={cardImage.alt}
        />
      </div>

      <div className="p-2 flex flex-col gap-2 text-left">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {subTitle && <h4 className="text-sm text-gray-500">{subTitle}</h4>}
        <p className="text-xs line-clamp-2 sm:line-clamp-none text-gray-400">
          {description}
        </p>
      </div>
    </button>
  );
};

export default Card;
