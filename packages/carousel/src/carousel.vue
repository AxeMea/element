<template>
  <div class="el-carousel"  :style="{width: suffixPx(width), height: suffixPx(height)}">

    <!-- slides wrapper start  -->
    <div class="el-carousel__slides-wrapper" ref="slides">
      <slot></slot>
    </div>
    <!-- slides wrapper end  -->

    <!-- indicators wrapper start  -->
    <ol class="el-carousel__indicators-wrapper">
      <li v-for="(indicator, index) in indicators" :class="{'active': indicator}" @click="indicatorClick(index)">
      </li>
    </ol>
    <!-- indicators wrapper end  -->

    <!-- slide control start -->
    <a class="left el-carousel__slide-control" href="javascript:void(0)" @click="prev">
      <i class="el-icon el-icon-arrow-left"></i>
    </a>
    <a class="right el-carousel__slide-control" href="javascript:void(0)" @click="next">
      <i class="el-icon el-icon-arrow-right"></i>
    </a>
    <!-- slide control start -->

  </div>
</template>

<script>
import { addClass, removeClass } from 'wind-dom/src/class';

export default {
  name: 'el-carousel',

  componentName: 'ElCarousel',

  props: {
    width: {
      type: Number,
      default: 400
    },

    height: {
      type: Number,
      default: 250
    },

    auto: {
      type: Boolean,
      default: true
    },

    duration: {
      type: Number,
      default: 1000
    }
  },

  mounted() {
    // init indicators
    this.indicators = [];
    this.$children.forEach((v, i) => {
      this.indicators.push(false);
    });

    // set default slide
    this.setDefaultSlide();

    // auto
    if (this.auto && !this.autoTimer) {
      this.autoTimer = setInterval(() => {
        this.prev();
      }, this.duration);
    }
  },

  data() {
    return {
      indicators: [],

      activeIndex: 0,

      lock: false
    };
  },

  methods: {
    /**
     * add 'px' suffix
     * @param  {Number} value
     * @return {String}
     */
    suffixPx(value) {
      return value + 'px';
    },

    /**
     * slide
     * @param  {Number} index
     * @param  {String} dir   'next' / 'prev'
     */
    slide(index, dir = 'next') {
      if (this.lock) return;

      this.lock = true;

      let activeChildNode = this.$children[this.activeIndex].$el;
      this.setActiveIndicator(this.activeIndex, false);

      this.activeIndex = index;
      let nextChildNode = this.$children[this.activeIndex].$el;

      addClass(nextChildNode, `pre-${ dir }`);

      setTimeout(() => {
        addClass(activeChildNode, `${ dir }`);
        addClass(nextChildNode, `${ dir }`);
        this.setActiveIndicator(this.activeIndex);
      }, 100);

      setTimeout(() => {
        removeClass(activeChildNode, `${ dir }`);
        removeClass(activeChildNode, 'active');

        removeClass(nextChildNode, `pre-${ dir }`);
        removeClass(nextChildNode, `${ dir }`);
        addClass(nextChildNode, 'active');
      }, 600);

      setTimeout(() => {
        this.lock = false;
      }, 1000);

    },

    /**
     * slide to next
     * @param  {Number}   index
     */
    next(index = -1) {
      let len = this.$children.length;
      let nextIndex = index >= 0 ? index : (this.activeIndex + 1) % len;
      this.slide(nextIndex, 'next');
    },

    /**
     * slide to prev
     * @param  {Number} index
     */
    prev(index = -1) {
      let len = this.$children.length;
      let prevIndex = index >= 0 ? index : (this.activeIndex - 1 + len) % len;
      this.slide(prevIndex, 'prev');
    },

    /**
     * indicator click function
     * @param  {Number} index
     */
    indicatorClick(index) {
      if (index < this.activeIndex) {
        this.prev(index);
      } else if (index > this.activeIndex) {
        this.next(index);
      }
    },

    /**
     * set default slide
     */
    setDefaultSlide() {
      let index = 0;
      let node = this.$children[index].$el;

      if (node) {
        addClass(node, 'active');
        this.setActiveIndicator(index);
      }
    },

    /**
     * set active indicator
     * @param {Number}  index
     * @param {Boolean} isActive
     */
    setActiveIndicator(index, isActive = true) {
      if (this.indicators[index] != null) {
        this.$set(this.indicators, index, isActive);
      }
    }
  }
};
</script>
