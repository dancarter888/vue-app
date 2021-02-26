<template>
    <div class="py-30px md:py-60px lg:py-80px bg-white">
        <EventGrid :eventsToLoad="eventsToLoad" :numToLoad="numToLoad"/>
        <div class="w-full grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0">
            <div class="col-start-2 col-span-10 md:col-start-7 md:col-span-8 lg:col-start-15 lg:col-span-8">
                <button v-if="numToLoad < eventsToLoad.length" class="w-full h-35px lg:h-40px border-solid border border-green-forest rounded-full flex justify-center items-center focus:outline-none" @click="loadMore">
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
        checkedFilters: Object
    },
    data() {
        return{
            moreToLoad: 0,
            initialLoad: 12
        }
    },
    computed: {
        eventsToLoad() {
            let toLoad = []
            this.data.map(entry => {
                if ((this.checkedFilters.manufacturer.size == 0 || this.checkedFilters.manufacturer.has(entry.manufacturer))
                && (this.checkedFilters.type.size == 0 || this.checkedFilters.type.has(entry.type))
                && (this.checkedFilters.color.size == 0 || this.checkedFilters.color.has(entry.color))) {
                    toLoad.push(entry)
                }
            })
            return toLoad      
        },
        numToLoad() {
            if (this.initialLoad + this.moreToLoad > this.eventsToLoad.length) {
                return this.eventsToLoad.length
            } else {
                return this.initialLoad + this.moreToLoad
            }
        }
    },
    methods: {
        loadMore() {
            this.moreToLoad += 12
        }
    },
    watch: { 
        checkedFilters: function() { // watch it
            this.moreToLoad = 0
        }
    }
}
</script>