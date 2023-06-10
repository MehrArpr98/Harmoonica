<template>
  <header>
    <Header />
  </header>
  
  <router-view></router-view>

  <footer>
    <Footer />
  </footer>
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
