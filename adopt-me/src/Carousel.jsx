import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  componentDidMount() {
    console.log("Details Page");
  }
  componentWillUnmount() {
    console.log("Details Page Exited");
  }
  handleCilck = (e) => {
    this.setState({
      active: e.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="main active" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              key={image}
              src={image}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleCilck}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
