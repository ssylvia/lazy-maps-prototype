import React, { Fragment } from 'react';
import LazyImage from './LazyImage';
import { WebMapComponent } from './webmapview';

// lazy load the map CSS too
import '../css/ProgressiveMap';

export default class ProgressiveMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactiveLoaded: false,
      interactiveLoading: false,
      webmapComponent: false
    };
  }

  render() {
    return (
      <div
        className={`progressive-map ${
          this.state.interactiveLoaded ? 'map-loaded' : ''
        }`}
      >
        <LazyImage
          small={this.props.small}
          medium={this.props.medium}
          large={this.props.large}
          full={this.props.full}
          altText={this.props.altText}
        />
        {this.state.interactiveLoaded ? (
          ''
        ) : (
          <button
            className="load-interactive"
            type="button"
            onClick={this.loadMap.bind(this)}
            disabled={this.state.interactiveLoading ? true : false}
          >
            {this.state.interactiveLoading
              ? 'Loading...'
              : 'Load Interactive Map'}
          </button>
        )}
        {this.state.webmapComponent}
      </div>
    );
  }

  loadMap() {
    this.setState({
      interactiveLoading: true
    });

    const onComponentLoad = container => {
      // lazy-load the map util & ArcGIS API for JavaScript bundles
      import('../util/map').then(mapUtils => {
        // add it to a map
        const webmap = mapUtils.newWebMap({
          portalItem: {
            id: this.props.webmap
          }
        });

        // render the map as a scene at the component
        const view = mapUtils.newMapView({
          map: webmap,
          container
        });

        view.when(() => {
          this.setState({
            interactiveLoaded: true
          });
        });
      });
    };

    this.setState({
      interactiveLoading: true,
      webmapComponent: <WebMapComponent onload={onComponentLoad} />
    });
  }
}
