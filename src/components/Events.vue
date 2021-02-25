<template>
  <div class="w-full grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0 bg-white py-30px">
      <div v-for="event in events" :key="event">
          {{event}}
      </div>

  </div>
</template>

<script>
export default {
    name: 'Events',
    data() {
        return {    
            events: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        }
    }
}
</script>