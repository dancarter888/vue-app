<template>
  <div class="w-full h-auto grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0 text-15px">
    <div class="col-start-5 col-span-4 flex justify-center items-center mb-8px">
      <span class="text-cream">Filter Type</span>
    </div>
    <div class="col-start-2 col-span-10 pb-30px">
        <hr class="filter-border"/>
        <form class="flex-col text-15px text-cream">
            <Filter />
            <Filter />
            <Filter />
            <Filter />
            <Filter />
            <Filter />
        </form>
    </div>
  </div>
</template>

<script>
import Filter from './Filter.vue'

export default {
    name: 'FilterGroup',
    components: {
        Filter
    }

}
</script>
