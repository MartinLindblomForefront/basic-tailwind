import { useState } from "react";
import { FlexGrow } from "./examples/flexGrow";
import { Grid } from "./examples/grid";
import { Sizes } from "./examples/sizes";
import { SizesGrid } from "./examples/sizesGrid";
import { Card } from "./examples/card";
import { CardWithComponents } from "./examples/cardWithComponents/cardWithComponents";
import { Example } from "./example";

export const App = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);

  const components = [
    <Grid />,
    <FlexGrow />,
    <Sizes />,
    <SizesGrid />,
    <Card />,
    <CardWithComponents />,
    <Example />
  ];

  const changeToPreviousComponent = () => {
    setCurrentComponentIndex(prev => prev - 1);
  };

  const changeToNextComponent = () => {
    setCurrentComponentIndex(prev => prev + 1);
  };

  return (
    <div className="flex flex-row h-screen items-center justify-between gap-10 p-4">
      <button className="rounded-full px-4 py-2 font-bold text-sm bg-inherit text-gray-500 shadow-sm border border-gray-500 disabled:opacity-50 hover:opacity-80" disabled={currentComponentIndex <= 0} onClick={changeToPreviousComponent}>Prev</button>
      <div className="flex flex-col gap-y-72 items-center justify-center h-screen">
        {components[currentComponentIndex]}
      </div>
      <button className="rounded-full px-4 py-2 font-bold text-sm bg-inherit text-gray-500 shadow-sm border border-gray-500 disabled:opacity-50 hover:opacity-80" disabled={currentComponentIndex >= components.length - 1} onClick={changeToNextComponent}>Next</button>
    </div>
  );
}
