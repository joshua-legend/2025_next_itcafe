const AdCard = ({ imageUrl, title, subTitle, buttonTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5 w-full">
      <div className={`h-[150px] w-full relative`}>
        <Image alt="" className="object-cover" fill src={imageUrl} />
      </div>
      <h5 className="text-lg text-gray-800 font-medium">{title}</h5>
      <p className="text-md text-gray-700">{subTitle}</p>
      <button className={`bg-[#00a5b1] rounded-3xl text-white py-2 px-5 w-fit`}>{buttonTitle}</button>
    </div>
  );
};

export default AdCard;
