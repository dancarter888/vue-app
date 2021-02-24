<template>
  <div class="w-full h-auto md:h-60px lg:h-120px grid grid-cols-12 md:grid-cols-20 lg:grid-cols-36 gap-0 bg-green-forest text-15px">
    <div class="col-start-5 col-span-4 flex justify-center items-center mb-4px">
      <span class="text-cream">Filter Type</span>
    </div>
    <div class="col-start-2 col-span-10">
        <hr class="filter-border"/>
        <form class="flex-col text-15px text-cream">
            <div>
                <div class="mt-8px mb-7px">
                    <input class="h-15px w-15px mr-10px radio-btn" type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                </div>
                <hr class="filter-border"/>
            </div>
            <div>
                <div class="mt-8px mb-7px">
                    <input class="h-15px w-15px mr-10px radio-btn" type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                </div>
                <hr class="filter-border"/>
            </div>
            <div>
                <div class="mt-8px mb-7px">
                    <input class="h-15px w-15px mr-10px radio-btn" type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                </div>
                <hr class="filter-border"/>
            </div>
            <div>
                <div class="mt-8px mb-7px">
                    <input class="h-15px w-15px mr-10px radio-btn" type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                </div>
                <hr class="filter-border"/>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Filters'
}
</script>
