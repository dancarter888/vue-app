<template>
    <div class="mt-8px mb-7px">
        <input class="h-15px w-15px mr-10px radio-btn" type="radio" :id="value" :name="name" :value="male">
        <label>{{ value }}</label>
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