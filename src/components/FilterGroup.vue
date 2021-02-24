<template>
    <h3 class=" pb-8px w-full flex justify-center">Filter Type</h3>
    <hr class="filter-border"/>
    <form class="flex-col text-15px">
        <Filter />
        <Filter />
        <Filter />
        <Filter />
        <Filter />
        <Filter />
    </form>
</template>

<script>
import Filter from './Filter.vue'

export default {
    name: 'FilterGroup',
    components: {
        Filter
    }

}
</script>
