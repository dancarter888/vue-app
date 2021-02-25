<template>
    <div class="py-30px md:py-60px lg:py-80px bg-white">
        <EventGrid :data="data" :eventsLoaded="eventsLoaded"/>
        <div class="w-full grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0">
            <div class="col-start-2 col-span-10 md:col-start-7 md:col-span-8 lg:col-start-15 lg:col-span-8">
                <button v-if="eventsLoaded != data.length - 1" class="w-full h-35px lg:h-40px border-solid border border-green-forest rounded-full flex justify-center items-center focus:outline-none" @click="loadMore">
                    <span class="text-15 lg:text-16px text-green-forest">Load More</span>
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
import EventGrid from './EventGrid.vue'

export default {
    name: 'Events',
    components: {
        EventGrid
    },
    props: {
        data: Array,
    },
    data() {
        return {
            eventsLoaded: 12,
        }
    },
    methods: {
        loadMore() {
            if (this.eventsLoaded + 12 >= this.data.length) {
                this.eventsLoaded = this.data.length - 1
            } else {
                this.eventsLoaded += 12
            }
        }
    }
}
</script>