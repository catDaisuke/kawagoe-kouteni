<template>
  <div id="app">
    <KouteniHeader></KouteniHeader>
    <!-- <img src="./assets/logo.png"> -->
    <div class="main-contents">
    <router-view/>
    </div>
  </div>
</template>

<script>
import KouteniHeader from '@/components/header/KouteniHeader.vue'

export default {
  components: {
    KouteniHeader
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  font-size:1rem;
}

.main-contents {
  margin:1rem;
}
</style>
