<template>
    <div ref="filters" class="h-auto grid-responsive text-15px md:text-16px bg-green-forest pt-40px pb-30px lg:pb-70px text-cream">
        <div class="col-start-2 col-span-10 md:col-start-2 md:col-span-5 lg:col-start-4 lg:col-span-8 pb-30px">
            <FilterGroup name="Color" :filter="filters.color" @addFilter="addFilter" @removeFilter="removeFilter"/>
        </div>
        <div class="col-start-2 col-span-10 md:col-start-8 md:col-span-6 lg:col-start-15 lg:col-span-8 pb-30px">
            <FilterGroup name="Manufacturer" :filter="filters.manufacturer" @addFilter="addFilter" @removeFilter="removeFilter"/>
        </div>
        <div class="col-start-2 col-span-10 md:col-start-15 md:col-span-5 lg:col-start-26 lg:col-span-8 pb-30px">
            <FilterGroup name="Type" :filter="filters.type" @addFilter="addFilter" @removeFilter="removeFilter"/>
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
    props: {
        filters: Object,
        isExpanded: Boolean
    },
    emits: ['expand', 'addFilter', 'removeFilter'],
    methods: {
        checkHeight() {
            this.$emit('expand', this.$refs.filters.clientHeight)
        },
        addFilter(checked) {
            this.$emit('addFilter', checked)
        },
        removeFilter(checked) {
            this.$emit('removeFilter', checked)
        }
    },
    updated() {
        this.checkHeight()
    },
    mounted() {
        window.addEventListener("resize", this.checkHeight);
        this.checkHeight()
    },
    unmounted() {
        window.removeEventListener("resize", this.checkHeight);
    },
}
</script>
