import React from "react";
import Translator from "../components/TranslatorAsync.js";
import { SketchAttributesCard } from "@seasketch/geoprocessing/client-ui";
import { Size } from "../components/Size.js";
import { PriorityAreas } from "../components/PriorityAreas.js";
import { Gfw } from "../components/Gfw.js";

// Named export loaded by storybook
export const SimpleReport = () => {
  return (
    <Translator>
      <Size />
      <PriorityAreas />
      <Gfw />
      <SketchAttributesCard autoHide />
    </Translator>
  );
};

// Default export lazy-loaded by top-level ReportApp
export default SimpleReport;
