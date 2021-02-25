<template>
  <div class="bg-green-light">
    <Navbar />
    <Main />
    <FilterHeader @toggle="toggleExpand"/>
    <div class="relative">
      <Filters class="absolute -top-1px left-0 z-10" :filters="filters" :isExpanded="isExpanded" @expand="changeHeight" @addFilter="addFilter" @removeFilter="removeFilter"/>
      <div class="relative bg-white w-full z-0 transition-all duration-500 ease-in-out" :style="isExpanded ? {height: expandHeight + 'px'} : {height: '0px'}"></div>
    </div>
    <div class="relative z-20">
      <Events :data="fakedData" :checkedFilters="checkedFilters"/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import FilterHeader from './components/FilterHeader.vue'
import Filters from './components/Filters.vue'
import Events from './components/Events.vue'

var faker = require('faker');

var DATA_SIZE = 30
var fakedData = []
var filters = {
  manufacturer: new Set(),
  type: new Set(),
  color: new Set(),
}

for (let i=0; i<DATA_SIZE; i++) {
  fakedData.push(
    {
      vehicle: faker.vehicle.vehicle(),
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      type: faker.vehicle.type(),
      color: faker.vehicle.color(),
      img: faker.image.image()
    }
  )
}

for (let i=0; i<fakedData.length; i++) {
  filters.manufacturer.add(fakedData[i].manufacturer)
  filters.type.add(fakedData[i].type)
  filters.color.add(fakedData[i].color)
}

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
      fakedData,
      filters,
      checkedFilters: {
        manufacturer: new Set(),
        type: new Set(),
        color: new Set()
      },
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
    },
    addFilter(checked) {
        for (let entry of Object.entries(this.checkedFilters)) {
          if (entry[0] == checked.name.charAt(0).toLowerCase() + checked.name.slice(1)) {
            
            entry[1].add(checked.value)
          }
        }
        console.log(this.checkedFilters)
    },
    removeFilter(checked) {
        for (let entry of Object.entries(this.checkedFilters)) {
          if (entry[0] == checked.name.charAt(0).toLowerCase() + checked.name.slice(1)) {
            entry[1].delete(checked.value)
          }
        }
    }
  },
  mounted() {
    console.log(this.fakedData)
    console.log(this.filters)
  }
}
</script>
