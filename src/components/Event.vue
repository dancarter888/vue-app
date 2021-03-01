<template>
    <div class="w-full grid grid-cols-12 md:grid-cols-9 lg:grid-cols-11 gap-0 bg-white hover:bg-cream lg:mb-40px">
        <div class="col-start-2 col-end-12 md:col-start-2 md:col-end-9 lg:col-start-2 lg:col-end-10 my-50px lg:mt-40px flex-col relative hover:bg-cream">
            <div class="absolute top-0 w-full">
                <h3 class="text-18px md:text-20px text-green-forest flex justify-center text-center">{{event.manufacturer}} - {{event.vehicle}}</h3>
            </div>
            <div class="flex justify-center pt-45px md:pt-50px lg:pt-65px relative z-20">
                <div class="flex items-center justify-center overflow-hidden mt-14px mb-20px">
                    <img class="object-cover min-h-full" :src="event.img"/>
                </div>
            </div>
            <div class="text-15px md:text-16px text-green-forest">
                <p class="flex justify-center mb-15px">{{event.type}}, {{event.color}}</p>
                <div class="w-full flex justify-center">
                    <button><a>View Event</a></button>
                </div>
            </div>
        </div>
        <div class="col-span-0 lg:col-start-11 lg:col-span-1 lg:bg-white">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
    props: {
        event: Object
    }
}
</script>

<style>
/*
add to img el for non resizing imgs
h-200px md:h-188px lg:h-215px w-300px md:w-280px lg:w-320px
*/
</style>