// NOTE: it's probably a good idea to move the config logic 
// into this file as well
import "../config";

// in order to lazy-lad the ArcGIS API for JavaScript bundles
// all imports from 'esri' should be co-located in this module 
import FeatureLayer from "esri/layers/FeatureLayer";
import WebMap from "esri/WebMap";
import SceneView from "esri/views/SceneView";

// then other modules (components) can dynamically `import()` this module
// and use the functions below to access the esri modules
export function newFeatureLayer(...args) {
  return new FeatureLayer(...args);
}
export function newWebMap(...args) {
  return new WebMap(...args);
}
export function newSceneView(...args) {
  return new SceneView(...args);
}
