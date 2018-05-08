// NOTE: it's probably a good idea to move the config logic
// into this file as well
import '../config';

// in order to lazy-lad the ArcGIS API for JavaScript bundles
// all imports from 'esri' should be co-located in this module
import WebMap from 'esri/WebMap';
import MapView from 'esri/views/MapView';

// Lazy Load CSS
import 'arcgis-js-api/themes/light/main.css';

// then other modules (components) can dynamically `import()` this module
// and use the functions below to access the esri modules
export function newWebMap(...args) {
  return new WebMap(...args);
}
export function newMapView(...args) {
  return new MapView(...args);
}
