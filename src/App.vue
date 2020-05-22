<template>
  <div id="app">
    <div class="row">
      <hi-button @click="fn">默认按钮</hi-button>
      <hi-button type="primary">主要按钮</hi-button>
      <hi-button type="success">成功按钮</hi-button>
      <hi-button type="info">信息按钮</hi-button>
      <hi-button type="warning">警告按钮</hi-button>
      <hi-button type="danger">危险按钮</hi-button>
    </div>
    <div class="row">
      <hi-button plain>朴素按钮</hi-button>
      <hi-button plain type="primary">主要按钮</hi-button>
      <hi-button plain type="success">成功按钮</hi-button>
      <hi-button plain type="info">信息按钮</hi-button>
      <hi-button plain type="warning">警告按钮</hi-button>
      <hi-button plain type="danger">危险按钮</hi-button>
    </div>
    <div class="row">
      <hi-button round>圆角按钮</hi-button>
      <hi-button round type="primary">主要按钮</hi-button>
      <hi-button round type="success">成功按钮</hi-button>
      <hi-button round type="info">信息按钮</hi-button>
      <hi-button round type="warning">警告按钮</hi-button>
      <hi-button round type="danger">危险按钮</hi-button>
    </div>
    <div class="row">
      <hi-button icon="hi hi-cog"></hi-button>
      <hi-button type="primary" icon="hi hi-cog"></hi-button>
      <hi-button type="success" icon="hi hi-cog"></hi-button>
      <hi-button type="info" icon="hi hi-cog"></hi-button>
      <hi-button type="warning" icon="hi hi-cog"></hi-button>
      <hi-button type="danger" icon="hi hi-cog"></hi-button>
    </div>
    <div class="row">
      <hi-button :disabled="true">默认按钮</hi-button>
      <hi-button :disabled="true" type="primary">主要按钮</hi-button>
      <hi-button :disabled="true" type="success">成功按钮</hi-button>
      <hi-button :disabled="true" type="info">信息按钮</hi-button>
      <hi-button :disabled="true" type="warning">警告按钮</hi-button>
      <hi-button :disabled="true" type="danger">危险按钮</hi-button>
    </div>
    <div class="row">
      <hi-button type="text">文字按钮</hi-button>
      <hi-button type="text" disabled>文字按钮</hi-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{

      }
    },
    methods:{
      fn(e){
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row{
    margin-bottom: 20px;
    button[class^="hi-button"]{
      margin-right: 10px;
    }
  }
</style>
