<template>
    <div class="mt-8px mb-7px">
        <input class="h-15px w-15px mr-10px chkbx" type="checkbox" :id="value" :name="name" :value="value">
        <label>{{ value.charAt(0).toUpperCase() + value.slice(1) }}</label>
    </div>
    <hr class="filter-border"/>
</template>

<script>
export default {
    name: 'Filter',
    props: {
        name: String,
        value: String
    }

}
</script>