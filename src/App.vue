<template>
    <Header :width="width"></Header>
    <router-view :width="width"></router-view>>
    <Footer :width="width"></Footer>
</template>

<script>
import About from './components/pages/about/about.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    About,
    Header,
    Footer
  },
  data: () => ({
    width: 0,
    
  }),
  methods: {
    onResize() {
      this.width=document.documentElement.clientWidth
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize();
  },
  onUpdated() {
    this.onResize()
  }
  
}
</script>

<style lang="scss">
  @import "./assets/variables-mixins.scss";
  @import './assets/fonts.scss';

  #app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    
}
    
  
</style>
