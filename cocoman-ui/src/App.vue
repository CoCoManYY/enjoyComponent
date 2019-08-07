<template>
  <div id="app">
    <h3>button</h3>
    <div style="display:flex;justify-content:center;">
      <coco-button type='primary'>coco的button</coco-button>
      <coco-button type='success'>coco的button</coco-button>
      <coco-button type='info'>coco的button</coco-button>
      <coco-button type='warn'>coco的button</coco-button>
      <coco-button type='danger'>coco的button</coco-button>
      <coco-button type='primary' disabled>coco的button</coco-button>
    </div>
    <h3>轮播图</h3>
    <div>
      <coco-carousel autoPlay>
        <coco-carousel-item name="1">
          <div class="box">1</div>
        </coco-carousel-item>
        <coco-carousel-item name="2">
          <div class="box">2</div>
        </coco-carousel-item>
        <coco-carousel-item name="3">
          <div class="box">3</div>
        </coco-carousel-item>
      </coco-carousel>
    </div>
    <h3>日期选择器</h3>
    <div>
      <coco-datetimepicker></coco-datetimepicker>
    </div>
  </div>
</template>

<script>
import cocoButton from './components/coco-button'
import cocoCarouselItem from './components/coco-carousel-item'
import cocoCarousel from './components/coco-carousel'
import cocoDatetimepicker from './components/coco-datetimepicker'
export default {
  name: 'App',
  components: {
    cocoButton,cocoCarouselItem,cocoCarousel,cocoDatetimepicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
  width: 500px;
  height: 200px;
  background-color: gray;
}
</style>
