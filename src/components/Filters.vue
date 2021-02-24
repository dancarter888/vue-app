<template>
    <div class="w-full h-auto grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0 text-15px md:text-16px bg-green-forest pt-40px pb-30px lg:pb-70px text-cream">
        <div class="col-start-2 col-span-10 md:col-start-2 md:col-span-5 lg:col-start-4 lg:col-span-8 pb-30px">
            <FilterGroup name="Gender" :values="['Male', 'Female']"/>
        </div>
        <div class="col-start-2 col-span-10 md:col-start-8 md:col-span-6 lg:col-start-15 lg:col-span-8 pb-30px">
            <FilterGroup name="Species" :values="['Human', 'Cat', 'Alien', 'Dog', 'Bird']"/>
        </div>
        <div class="col-start-2 col-span-10 md:col-start-15 md:col-span-5 lg:col-start-26 lg:col-span-8 pb-30px">
            <FilterGroup name="Height" :values="['100cm', '200cm', '300cm']"/>
        </div>
    </div>
</template>

<script>
import FilterGroup from './FilterGroup.vue'

export default {
    name: 'Filters',
    components: {
        FilterGroup,
    },
}
</script>
