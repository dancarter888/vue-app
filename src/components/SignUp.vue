<template>
    <form class="grid-responsive text-15px lg:text-16px text-green-forest bg-green-light pt-20px pb-20px md:pt-30px md:pb-15px">
        <div class="flex justify-center col-start-4 col-span-6 md:col-start-2 md:col-span-5 lg:col-start-2 lg:col-span-5 mb-20px md:mb-0 md:mt-10px">
            <span>Sign up to our Newsletter</span>
        </div>
        <div class="flex justify-start items-center border-solid border border-green-forest col-start-2 col-span-10 md:col-start-8 md:col-span-6 lg:col-start-19 lg:col-span-8 h-35px lg:h-40px mb-15px lg:mb-12px pl-10px">
            <input class="h-full w-full items-center placeholder-green-forest text-left md:text-left bg-transparent focus:placeholder-transparent focus:outline-none" placeholder="Email"/>
        </div>
        <button class="cursor-pointer flex justify-center items-center border-solid border border-green-forest rounded-full col-start-2 col-span-10 md:col-start-15 md:col-span-5 lg:col-start-28 lg:col-span-8 h-35px lg:h-40px">
            <span>Submit</span>
        </button>
    </form>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>