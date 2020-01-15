<template>
  <div class="actionSheet" v-if="show">
    <div class="yj-overlayer" @click="closeSheet"></div>
  </div>
</template>
<script>
export default {
  name:'actionSheet',
  props:{
    show:{
      type:Boolean,
      default:false
    }
  },
  model:{
    prop:'show',
    event:'onShow'
  },
  methods:{
    closeSheet(){
      this.$emit('onShow',false)
    }
  }
}
</script>
<style lang="scss">
.actionSheet{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .yj-overlayer{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>