<template>
  <div class="bg-green-light">
    <Navbar />
    <Main />
    <FilterHeader />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import FilterHeader from './components/FilterHeader.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    FilterHeader,

  }
}
</script>
