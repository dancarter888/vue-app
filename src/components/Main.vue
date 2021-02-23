<template>
  <div class="w-full grid grid-cols-12 gap-0 bg-green-light pt-120px">
    <div class="col-start-4 col-span-6 flex justify-center">
      <h1 class="text-green-forest text-36px tracking-tighter">WHAT'S ON</h1>
    </div>
    <div class="col-start-3 col-span-8 flex-col">
      <img class="mt-59px mb-10px" :src="mainImg" />
      <div class="text-green-forest text-15px mb-81px">
        <p>PATTI SMITH</p>
        <p>Christchurch Town Hall</p>
        <p>Wednesday 7 April 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      mainImg: require('@/assets/mainImg.png')
    }
  }
}
</script>
