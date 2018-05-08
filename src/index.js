import "@dojo/shim/Promise";

import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/header";
import { WebMapComponent } from "./components/webmapview";

import "./css/main.scss";

const addDOMNode = () => {
  const appNode = document.createElement("div");
  appNode.id = "app";
  document.body.appendChild(appNode);
  return appNode;
}

const onComponentLoad = (container) => {
  // lazy-load the map util & ArcGIS API for JavaScript bundles
  import("./util/map").then(mapUtils => {
    // create a feature layer
    const featureLayer = mapUtils.newFeatureLayer({
      id: "states",
      portalItem: {
        id: "b234a118ab6b4c91908a1cf677941702"
      },
      outFields: ["NAME", "STATE_NAME", "VACANT", "HSE_UNITS"],
      title: "U.S. counties"
    });

    // add it to a map
    const webmap = mapUtils.newWebMap({
      portalItem: {
        id: "3ff64504498c4e9581a7a754412b6a9e"
      },
      layers: [featureLayer]
    });

    // render the map as a scene at the component
    const view = mapUtils.newSceneView({
      map: webmap,
      container
    });

    featureLayer.when(() => {
      view.goTo({ target: featureLayer.fullExtent });
    });
  });
};

/**
 * React portion of application
 */
ReactDOM.render(
  <div className="main">
    <Header appName="Webpack App"/>
    <WebMapComponent
      onload={onComponentLoad} />
  </div>,
  addDOMNode()
);
