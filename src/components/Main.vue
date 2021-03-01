<template>
  <div class="grid-responsive bg-green-light pt-120px md:pt-200px lg:pt-180px">
    <div class="col-start-4 col-span-6 md:col-start-7 md:col-span-8 lg:col-start-15 lg:col-span-8 flex justify-center">
      <h1 class="text-green-forest text-36px md:text-50px lg:text-60px tracking-tighter">WHAT'S ON</h1>
    </div>
    <div class="col-start-3 col-span-8 md:col-start-5 md:col-span-12 lg:col-start-11 lg:col-span-16 flex-col justify-center mt-59px md:mt-140px lg:mt-120px mb-81px md:mb-120px lg:mb-239px">
      <img class="w-full mb-10px lg:mb-20px" :src="mainImg" />
      <div class="text-green-forest text-15px lg:text-16px md:flex md:justify-between">
        <p>PATTI SMITH</p>
        <div>
          <p>Christchurch Town Hall</p>
          <p>Wednesday 7 April 2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      mainImg: require('@/assets/mainImg.svg')
    }
  }
}
</script>
