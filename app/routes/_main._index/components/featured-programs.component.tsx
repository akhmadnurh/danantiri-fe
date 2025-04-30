const FeaturedProgramsComponent = () => {
  return (
    <div className="mt-3 p-12 flex justify-center items-center flex-col bg-gray-100">
      <h1 className="text-2xl text-red-600 font-bold">Featured Programs</h1>
      <div className="w-[25em] bg-white rounded-md border p-6 flex flex-col items-center justify-center gap-1 shadow-sm">
        <span className="text-red-600 font-semibold text-lg">Beasiswa S2</span>
        <span className="text-gray-600 text-md">Beasiswa S2 di Unigga</span>
        <span className="text-gray-500 text-sm">
          0xa02353de283aeecd3f6ed758f6370682
        </span>
      </div>
    </div>
  );
};

export default FeaturedProgramsComponent;
