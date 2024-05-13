import InsightItem from "./InsightItem";

function InsightList() {
  return (
    <div className="flex gap-6 items-center">
      <InsightItem title="15" smallDescription="Years of Experience" />
      <InsightItem title="1k" smallDescription="Sucessful Trips" />
      <InsightItem title="20k" smallDescription="Happy Customers" />
      <InsightItem title="4.9" smallDescription="Overall Rating" />
    </div>
  );
}

export default InsightList;
