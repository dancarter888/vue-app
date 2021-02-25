<template>
    <div class="w-full grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0 bg-white">
        <div class="col-start-1 col-end-13 md:col-start-2 md:col-end-20 lg:col-start-3 lg:col-end-36">
            <div class="w-full grid grid-cols-12 md:grid-cols-18 lg:grid-cols-33 gap-0 bg-white">
                <template v-for="index in eventsLoaded" :key="data[index]">
           
                    <div class="col-span-full md:col-span-9 lg:col-span-11">
                        <Event :event="data[index]"/>
                    </div>
        
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Event from './Event'

export default {
    name: 'EventGrid',
    components: {
        Event
    },
    props: {
        data: Array,
        eventsLoaded: Number
    },
}
</script>