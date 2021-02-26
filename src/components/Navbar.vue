<template>
  <div class="grid-responsive fixed bg-opacity-100 z-30">
    <div class="col-start-2 col-span-2 md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-4 pt-15px md:pt-20px lg:pt-30px">
      <Searchbar />
    </div>
    <div class="col-start-6 col-span-2 md:col-start-10 lg:col-start-18 pt-16px md:pt-22px lg:pt-30px flex justify-center">
      <img class="h-19px w-60px md:h-30px md:w-97px cursor-pointer" :src='venuesLogo' />
    </div>
    <div class="col-start-11 col-span-1 md:col-start-19 lg:col-start-35 pt-16px md:pt-25px lg:pt-30px flex justify-center">
      <Hamburger />
    </div>
  </div>
</template>

<script>
import Searchbar from './Searchbar.vue'
import Hamburger from './Hamburger.vue'

export default {
  name: 'Navbar',
  components: {
      Searchbar,
      Hamburger
  },
  data() {
    return {
      venuesLogo: require('@/assets/venuesLogo.svg')
    }
  }  
}
</script>
