import React from 'react';
//import {Carousel} from 'reactstrap'

class Movies extends React.Component{
render()
{
    return( 
  
 <div>
   <img height='400px' width= '1500px' src={require ('../assets/images/carousel.jpg')} />
  </div>



);
}
}
export default Movies;


{/*import React, { Component } from 'react';
import {
Carousel,
CarouselItem,
CarouselControl,
CarouselIndicators,
CarouselCaption
} from 'reactstrap';

const items = [
{
  src: `${require ('../assets/images/KabirSingh.jpeg')}`,
  altText: 'Slide 1',
  
},
{
  src: `${require ('../assets/images/spiderman.jpeg')}`,
  altText: 'Slide 2',
  
},
{
  src: `${require ('../assets/images/avengers.jpeg')}`,
  altText: 'Slide 3',
  
}
];

class Movies extends Component {
constructor(props) {
  super(props);
  this.state = { activeIndex: 0 };
}

onExiting = () => {
  this.animating = true;
}

onExited = () => {
  this.animating = false;
}

next = () => {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
  this.setState({ activeIndex: nextIndex });
}

previous = () => {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
  this.setState({ activeIndex: nextIndex });
}

goToIndex = (newIndex) => {
  if (this.animating) return;
  this.setState({ activeIndex: newIndex });
}

render() {
  const { activeIndex } = this.state;

  const slides = items.map((item) => {
    return (
      <div className="Carousel">
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
      </div>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={this.next}
      previous={this.previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
    </Carousel>
  );
}
}

export default Movies;*/}