<template>
    <div class="w-full grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0 bg-white">
        <div class="col-start-1 col-end-13 md:col-start-2 md:col-end-20 lg:col-start-2 lg:col-end-35">
            <div class="w-full grid grid-cols-12 md:grid-cols-18 lg:grid-cols-33 gap-0 bg-white">
                <template v-for="index in eventsLoaded" :key="data[index]">
                    <div class="col-span-1 md:col-span-1 lg:col-span-2"></div>
                    <div class="col-span-10 md:col-span-7 lg:col-span-8">
                        <Event :event="data[index]"/>
                    </div>
                    <div class="col-span-1 md:col-span-1 lg:col-span-1"></div>
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