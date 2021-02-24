<template>
  <div class="bg-green-light">
    <Navbar />
    <Main />
    <FilterHeader @toggle="toggleExpand"/>
    <div class="relative">
      <Filters class="absolute -top-1px left-0 z-10" />
      <div class="relative bg-white w-full z-0 transition-all duration-500 ease-in"  :class="[isExpanded ? 'h-826px md:h-322px lg:h-362px' : 'h-0', errorClass]"></div>
    </div>
    <div class="relative z-20">
      
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import FilterHeader from './components/FilterHeader.vue'
import Filters from './components/Filters.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    FilterHeader,
    Filters,
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },
  }
}
</script>
