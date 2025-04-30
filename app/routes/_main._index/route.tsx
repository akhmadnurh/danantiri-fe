import type { MetaFunction } from "@remix-run/node";
import HeaderSectionComponent from "./components/header.component";
import FundSummaryComponent from "./components/fund-summary.component";
import FeaturedProgramsComponent from "./components/featured-programs.component";

export const meta: MetaFunction = () => {
  return [
    { title: "Danantiri" },
    { name: "description", content: "Welcome to Danantiri!" },
  ];
};

export default function Index() {
  return (
    <div className="h-full bg-gray-100">
      <HeaderSectionComponent />
      <FundSummaryComponent />
      <FeaturedProgramsComponent />
    </div>
  );
}
