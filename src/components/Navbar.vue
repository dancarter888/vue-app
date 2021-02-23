<template>
  <div class="w-full grid grid-cols-12 md:grid-cols-20 gap-0 fixed bg-opacity-100">
    <div class="col-start-2 col-span-2 md:col-start-2 md:col-span-3 pt-15px">
      <input class="h-22px w-full border-solid border border-black rounded-full flex justify-center items-center text-14px text-center bg-opacity-90" value="Search"/>   
    </div>
    <div class="col-start-6 col-span-2 md:col-start-10 md:col-span-2 pt-16px flex justify-center">
      <img class="h-19px md:h-22px w-auto" :src='venuesLogo' />
    </div>
    <div class="col-start-11 col-span-1 md:col-start-19 md:col-span-1 pt-16px">
      <div class="h-20px flex flex-col items-center justify-between">
        <div class="h-2px w-full bg-black"></div>
        <div class="h-2px w-full bg-black"></div>
        <div class="h-2px w-full bg-black"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      venuesLogo: require('@/assets/venuesLogo.svg')
    }
  }  
}
</script>
