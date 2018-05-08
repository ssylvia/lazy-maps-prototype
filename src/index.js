import '@dojo/shim/Promise';

import React from 'react';
import ReactDOM from 'react-dom';
import LazyImage from './components/LazyImage';
import ProgressiveMap from './components/ProgressiveMap';

// import { Header } from './components/header';
// import { WebMapComponent } from './components/webmapview';

import './css/main.scss';

const addDOMNode = () => {
  const appNode = document.createElement('div');
  appNode.id = 'app';
  document.body.appendChild(appNode);
  return appNode;
};

// const onComponentLoad = container => {
//   // lazy-load the map util & ArcGIS API for JavaScript bundles
//   import('./util/map').then(mapUtils => {
//     // add it to a map
//     const webmap = mapUtils.newWebMap({
//       portalItem: {
//         id: '64a7194db9b444a3ba8eceb6c193e55b'
//       }
//     });

//     // render the map as a scene at the component
//     const view = mapUtils.newMapView({
//       map: webmap,
//       container
//     });
//   });
// };

/**
 * React portion of application
 */
ReactDOM.render(
  <div className="root">
    <div className="App">
      <header className="App-header">
        <LazyImage
          small={`/public/images/cover_50.webp`}
          medium={`/public/images/cover_400.webp`}
          large={`/public/images/cover_700.webp`}
          full={`/public/images/cover_1500.webp`}
          altText="Cover image"
        />
        <h1 className="App-title">Fast Maps with ArcGIS</h1>
      </header>
      <div className="container">
        <p className="narrative-text">
          Nulla aliquam eros eu odio aliquam, a ultrices arcu rutrum. Sed ac
          urna mollis, euismod ligula nec, molestie ligula. Quisque augue ante,
          vehicula id risus sodales, elementum gravida orci. Donec tellus orci,
          posuere eu elit vitae, suscipit sollicitudin mi. Nullam accumsan augue
          augue, eget feugiat lectus porttitor at. In pharetra ligula ut urna
          ornare tincidunt. Etiam euismod neque vitae orci convallis porttitor.
          Quisque vulputate felis sed viverra interdum. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
          vulputate libero et dui rhoncus accumsan. Donec ut tellus eget tortor
          sollicitudin mattis.
        </p>
        <p className="narrative-text">
          Curabitur ut sagittis lorem. Nulla malesuada dapibus lectus sed
          vestibulum. Nulla hendrerit nisi id eros interdum luctus. Nunc luctus
          ligula in ipsum aliquam, consectetur maximus massa pharetra. Nulla
          neque dolor, cursus eu diam id, pretium vestibulum metus. Ut ut
          dignissim lacus. Mauris et ante ac ipsum ultricies dictum. Nullam
          imperdiet felis nec dui suscipit tempor. Aliquam condimentum at dui
          eget vestibulum. Suspendisse eu elementum velit, sit amet scelerisque
          arcu. Suspendisse ullamcorper odio eget lacus mattis, at vehicula
          tortor faucibus. Pellentesque nec metus at libero feugiat aliquet.
          Aenean est justo, euismod non placerat euismod, volutpat ac lacus. Nam
          aliquam augue in lacus vulputate, convallis vehicula velit tincidunt.
        </p>
        <ProgressiveMap
          small={`/public/images/map1_50.webp`}
          medium={`/public/images/map1_400.webp`}
          large={`/public/images/map1_700.webp`}
          full={`/public/images/map1_1000.webp`}
          altText="Map 1"
          webmap="64a7194db9b444a3ba8eceb6c193e55b"
        />
        <p className="narrative-text">
          Nulla aliquam eros eu odio aliquam, a ultrices arcu rutrum. Sed ac
          urna mollis, euismod ligula nec, molestie ligula. Quisque augue ante,
          vehicula id risus sodales, elementum gravida orci. Donec tellus orci,
          posuere eu elit vitae, suscipit sollicitudin mi. Nullam accumsan augue
          augue, eget feugiat lectus porttitor at. In pharetra ligula ut urna
          ornare tincidunt. Etiam euismod neque vitae orci convallis porttitor.
          Quisque vulputate felis sed viverra interdum. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
          vulputate libero et dui rhoncus accumsan. Donec ut tellus eget tortor
          sollicitudin mattis.
        </p>
        <p className="narrative-text">
          Curabitur ut sagittis lorem. Nulla malesuada dapibus lectus sed
          vestibulum. Nulla hendrerit nisi id eros interdum luctus. Nunc luctus
          ligula in ipsum aliquam, consectetur maximus massa pharetra. Nulla
          neque dolor, cursus eu diam id, pretium vestibulum metus. Ut ut
          dignissim lacus. Mauris et ante ac ipsum ultricies dictum. Nullam
          imperdiet felis nec dui suscipit tempor. Aliquam condimentum at dui
          eget vestibulum. Suspendisse eu elementum velit, sit amet scelerisque
          arcu. Suspendisse ullamcorper odio eget lacus mattis, at vehicula
          tortor faucibus. Pellentesque nec metus at libero feugiat aliquet.
          Aenean est justo, euismod non placerat euismod, volutpat ac lacus. Nam
          aliquam augue in lacus vulputate, convallis vehicula velit tincidunt.
        </p>
        <ProgressiveMap
          small={`/public/images/map2_50.webp`}
          medium={`/public/images/map2_400.webp`}
          large={`/public/images/map2_700.webp`}
          full={`/public/images/map2_1000.webp`}
          webmap="2fcd49bf47674a5e91c015f5e4a39f07"
          altText="Map 1"
        />
        <p className="narrative-text">
          Aliquam eleifend ligula non nunc cursus, non molestie massa dapibus.
          Nullam nec augue vitae lorem condimentum aliquet. Vestibulum
          ullamcorper scelerisque pharetra. Proin tempus, magna eget vestibulum
          ornare, massa metus congue turpis, quis consequat ipsum metus eget
          velit. Nulla eget arcu ante. In varius quam sit amet nisi tempor
          efficitur. Sed finibus urna molestie lorem ultricies accumsan.
          Vestibulum lorem elit, interdum nec massa eget, eleifend iaculis
          lectus. Praesent ut tristique metus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Etiam ac nibh
          metus.
        </p>
      </div>
    </div>
  </div>,
  // <div className="main">
  //   <Header appName="Webpack App" />
  //   <WebMapComponent onload={onComponentLoad} />
  // </div>,
  addDOMNode()
);
