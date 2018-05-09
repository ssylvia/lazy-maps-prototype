import React from 'react';

export default class LazyImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullImageLoaded: false,
      imageSrc: ''
    };
    this.image = React.createRef();
  }

  componentDidMount() {
    const reactImg = this.image.current;
    const fullImg = new Image();

    const loadFullImage = () => {
      fullImg.onload = () => {
        this.setState({
          fullImageLoaded: true,
          imageSrc: fullImg.src
        });
        if (typeof this.props.onLoad === 'function') {
          this.props.onLoad();
        }
      };

      if (reactImg.getBoundingClientRect().width < 400) {
        fullImg.src = this.props.medium;
      } else if (reactImg.getBoundingClientRect().width < 700) {
        fullImg.src = this.props.large;
      } else {
        fullImg.src = this.props.full;
      }

      // fullImg.src = this.props.full;
    };

    const observer = new IntersectionObserver(entries => {
      const image = entries[0];
      if (image.isIntersecting) {
        observer.unobserve(reactImg);
        this.setState({
          imageSrc: this.props.small
        });
        loadFullImage();
      }
    });

    observer.observe(reactImg);
  }

  render() {
    return (
      <img
        ref={this.image}
        className={`lazy-image ${this.state.fullImageLoaded ? 'loaded' : ''}`}
        src={this.state.imageSrc}
        alt={this.props.altText}
      />
    );
  }
}
