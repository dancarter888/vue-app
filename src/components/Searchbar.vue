<template>
    <div class="h-22px md:h-35px w-full border-solid border border-black rounded-full flex items-center justify-center md:justify-between md:px-12px">
        <input class="h-full w-full md:w-2/3 items-center text-14px md:text-15px lg:text-16px text-black placeholder-black text-center md:text-left bg-transparent focus:placeholder-transparent focus:outline-none" placeholder="Search"/>   
        <img class="h-0 md:h-19px w-auto" :src="magGlass"/>
    </div>
</template>

<script>
export default {
    name: 'Searchbar',
    data() {
        return {
            magGlass: require('@/assets/magGlass.svg'),
        }
    }
}
</script>
