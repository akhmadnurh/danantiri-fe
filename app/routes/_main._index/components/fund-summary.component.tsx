const FundSummaryComponent = () => {
  return (
    <div className="h-56 bg-white flex justify-center items-center gap-8 shadow-md">
      <CardComponent title="Managed Fund Amount" description="12.5 IDRX" />
      <CardComponent title="Programs Funded" description="1" />
    </div>
  );
};

export default FundSummaryComponent;

const CardComponent = (props: { title: string; description: string }) => {
  return (
    <div className="w-96 bg-gray-100 rounded-md border border-gray-300 p-4 flex flex-col items-center justify-center gap-2">
      <span className="text-gray-600">{props.title}</span>
      <span className="text-2xl font-bold text-red-600">
        {props.description}
      </span>
    </div>
  );
};
