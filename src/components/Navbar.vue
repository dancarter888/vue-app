<template>
  <div class="grid grid-cols-12 gap-0 static bg-opacity-100">
    <div class="col-start-2 col-span-2 pt-15px">
      <div class="h-22px w-full border-solid border border-black rounded-full flex justify-center items-center">   
        <span class="text-black text-14px p-0">Search</span>
      </div>  
    </div>
    <div class="col-start-6 col-span-2 pt-16px flex justify-center">
      <img class="h-19px w-auto" :src='venuesLogo' />
    </div>
    <div class="col-start-11 col-span-1 pt-16px">
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
