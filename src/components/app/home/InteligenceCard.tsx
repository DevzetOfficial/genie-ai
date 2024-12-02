function InteligenceCard({
  img,
  title,
  shortDesc,
}: {
  img: string;
  title: string;
  shortDesc: string;
}) {
  return (
    <div>
      <div className="rounded-2xl aspect-[416/320] overflow-hidden mb-8">
        <img className="size-full object-cover" src={img} alt="" />
      </div>
      <h4 className="text-2xl font-semibold mb-4 text-black">{title}</h4>
      <p className="text-[rgba(0,0,0,0.70)]">{shortDesc}</p>
    </div>
  );
}

export default InteligenceCard;
