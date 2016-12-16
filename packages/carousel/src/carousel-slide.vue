<template>
  <div class="el-carousel-slide">
    <a :href="link"><img :src="src" :alt="alt"/></a>
  </div>
</template>

<script>
export default {
  name: 'el-carousel-slide',

  componentName: 'ElCarouselSlide',

  props: {
    link: {
      type: String,
      default: 'javascript:void(0)'
    },

    html: {
      type: String,
      default: ''
    },

    src: {
      type: String,
      default: ''
    },

    alt: {
      type: String,
      default: 'default'
    }
  }
};
</script>
