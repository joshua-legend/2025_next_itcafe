const ContentCard = ({ isHigh, imageUrl, title, subTitle }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className={`${isHigh ? "h-[500px]" : "h-[300px]"} w-full relative`}>
        <Image alt="" className="object-cover" fill src={imageUrl} />
      </div>
      <h5 className="text-xs text-slate-500 font-medium">{title}</h5>
      <p className="text-md text-gray-700">{subTitle}</p>
    </div>
  );
};

export default ContentCard;
