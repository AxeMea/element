<script>
  export default {
    data() {
      return {
        auto: false,
        items: [
          {
            src: 'http://fuss10.elemecdn.com/0/9f/b0a000b13dca18fad4a3c803fe70bjpeg.jpeg',
            alt: 'slide 1',
            link: 'http://fuss10.elemecdn.com/0/9f/b0a000b13dca18fad4a3c803fe70bjpeg.jpeg'
          }, {
            src: 'http://fuss10.elemecdn.com/f/26/5584ca873d6dd0fef218f01c14200jpeg.jpeg',
            alt: 'slide 2',
            link: 'http://fuss10.elemecdn.com/f/26/5584ca873d6dd0fef218f01c14200jpeg.jpeg'
          }, {
            src: 'http://fuss10.elemecdn.com/8/b1/812b5ce7b61ffef01432ddb259e02jpeg.jpeg',
            alt: 'slide 3',
            link: 'http://fuss10.elemecdn.com/8/b1/812b5ce7b61ffef01432ddb259e02jpeg.jpeg'
          }
        ]
      };
    }
  }
</script>

<style scoped>
</style>
## Carousel 轮播器
轮播器。

### 基础用法


包含标题，内容和操作。

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。
```html
<el-carousel class="demo-carousel" :auto="auto">
  <el-carousel-slide
    v-for="item in items"
    :src="item.src"
    :alt="item.alt"
    :link="item.link">
  </el-carousel-slide>
</el-carousel>

<style>
  .demo-carousel {
    font-size: 14px;
  }
</style>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| body-style | 设置 body 的样式| object| — | { padding: '20px' } |
