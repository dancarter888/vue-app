<template>
    <div class="w-full bg-green-forest pt-40px pb-30px">
        <FilterGroup />
        <FilterGroup />
        <FilterGroup />
        <FilterGroup />
        <FilterGroup />
        <FilterGroup />
        <FilterGroup />
        <FilterGroup />
    </div>
</template>

<script>
import FilterGroup from './FilterGroup.vue'

export default {
    name: 'Filters',
    components: {
        FilterGroup,
    }
}
</script>
