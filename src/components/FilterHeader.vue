<template>
  <div class="w-full h-55px md:h-78px lg:h-140px grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0 bg-green-forest items-center">
      <div class="col-start-5 col-span-4 md:col-start-9 md:col-span-4 lg:col-start-17 flex justify-center">
          <span class="text-cream text-15px md:text-18px lg:text-20px">FILTER EVENTS</span>
      </div>
      <div class="col-start-9 col-span-3 md:col-start-18 md:col-span-2 lg:col-start-33 lg:col-span-3 flex justify-end">
          <button class="text-green-light text-15px lg:text-16px appearance-none focus:outline-none" @click="toggleExpand">{{isExpanded ? "Hide" : 'Show'}} Filter</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'FilterHeader',
    data() {
        return {
            isExpanded: false,
        }
    },
    methods: {
        toggleExpand() {
            this.isExpanded = !this.isExpanded
            this.$emit('toggle')
        }
    }
}
</script>   