import CarouselSlide from './../carousel/src/carousel-slide';

/* istanbul ignore next */
CarouselSlide.install = function(Vue) {
  Vue.component(CarouselSlide.name, CarouselSlide);
};

export default CarouselSlide;
