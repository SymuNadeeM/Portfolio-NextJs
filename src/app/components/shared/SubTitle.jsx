
const SubTitle = ({subtitle}) => {
  return (
    <div className="flex items-center gap-4 mb-7.5">
        <h3 className="text-2xl text-white font-medium capitalize">
          {subtitle}
        </h3>
        <div className="w-[80px] h-[1.8px] rounded-md bg-gradient-to-r from-[#fa5252] to-[#dd2476]"></div>
      </div>
  );
};

export default SubTitle;