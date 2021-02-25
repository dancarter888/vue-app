<template>
  <div class="bg-green-light">
    <Navbar />
    <Main />
    <FilterHeader @toggle="toggleExpand"/>
    <div class="relative">
      <Filters class="absolute -top-1px left-0 z-10" :isExpanded="isExpanded" @expand="changeHeight"/>
      <div class="relative bg-white w-full z-0 transition-all duration-500 ease-in-out" :style="isExpanded ? {height: expandHeight + 'px'} : {height: '0px'}"></div>
    </div>
    <div class="relative z-20">
      <Events />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import FilterHeader from './components/FilterHeader.vue'
import Filters from './components/Filters.vue'
import Events from './components/Events.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Main,
    FilterHeader,
    Filters,
    Events,
  },
  data() {
    return {
      expandHeight: 0,
      isExpanded: false,
    }
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },
    changeHeight(height) {
      console.log(height)
      this.expandHeight = height;
    }
  },
}
</script>
