const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="m-4 p-4 w-[200px] bg-gray-200 hover:bg-gray-300 h-[400px] rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
