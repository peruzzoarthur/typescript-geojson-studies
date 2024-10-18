import shpjs from "shpjs";

type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
  fileName: string;
};

type Feature = {
  type: "Feature";
  geometry: Geometry;
  properties: Properties;
};

type Geometry = {
  bbox: number[];
  type: "Polygon";
  coordinates: number[][][]; // Adjusted to be an array of arrays of numbers for the polygon
};

type Properties = {
  fid: number;
  CD_MUN: string;
  NM_MUN: string;
  SIGLA_UF: string;
  AREA_KM2: number;
};

const a = await Deno.readFile(
  "/home/ozzurep/coldLab/testing-shape-creation/ShapeLib/RS_Municipios_2022.zip"
);
console.log(a.buffer);

const geoJson: FeatureCollection = await shpjs(a);
console.log(geoJson.features[2]);
