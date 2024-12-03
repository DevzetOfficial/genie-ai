interface SalesDriveProps {
  title: string;
  details: string;
  image: string;
}

const SingleSaleDrive: React.FC<SalesDriveProps> = ({
  title,
  details,
  image,
}) => {
  return (
    <div className=" p-5 md:py-10 md:pl-10 border border-[#E3E9F2] bg-[#FCFCFD] rounded-2xl text-black space-y-5 md:space-y-10">
      <div className="md:pr-10 space-y-5 md:space-y-8">
        <h3 className="text-2xl md:md:text-[32px] font-semibold">{title}</h3>
        <p className="opacity-70  md:text-xl">{details}</p>
      </div>
      <div className="aspect-[600/290]  rounded-2xl overflow-hidden order-first lg:order-last">
        <img
          className=" object-cover size-full object-left-top"
          src={image}
          alt="sales drive image"
        />
      </div>
    </div>
  );
};

export default SingleSaleDrive;
