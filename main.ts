import shpjs from "shpjs";
import { FeatureCollection } from "types-geojson";

const a = await Deno.readFile(
  "/home/ozzurep/coldLab/testing-shape-creation/ShapeLib/pel.zip"
);
console.log(a.buffer);

const geoJson: FeatureCollection = await shpjs(a);
console.log(geoJson);
