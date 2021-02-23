<template>
  <div class="bg-green-light">
    <Navbar />
    <Main />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Main
  }
}
</script>
