<template>
    <h3 class=" pb-8px w-full flex justify-center">Filter {{ name }}</h3>
    <hr class="filter-border"/>
    <form class="flex-col text-15px">
        <Filter v-for="value in filter" :key="value" :name="name" :value="value" @checked="addFilter" @unChecked="removeFilter"/>
    </form>
</template>

<script>
import Filter from './Filter.vue'

export default {
    name: 'FilterGroup',
    components: {
        Filter
    },
    props: {
        name: String,
        filter: Set
    },
    methods: {
        addFilter(checked) {
            this.$emit('addFilter', checked)
        },
        removeFilter(checked) {
            this.$emit('removeFilter', checked)
        }
    },
}
</script>
