<template>
    <div class="grid-responsive h-510px md:h-705px lg:h-705px pt-160px md:pt-240px lg:pt-160px pb-30px md:pb-40px lg:pb-40px bg-green-forest">
        <div class="col-start-2 col-span-10 md:col-start-2 md:col-span-7 flex-col justify-start text-white text-18px md:text-20px lg:text-24px mb-116px md:mb-235px lg:mb-116px">
            <p>81 Jack Hinton Drive</p>
            <p>Addington, Christchurch 8024</p>
            <p>PO Box 13144</p>
            <p>Christchurch, New Zealand</p>
            <br />
            <p>0800 822 7369</p>
            <p>+64 3 339 3599</p>
            <p>info@venuesotautahi.co.nz</p>
        </div>
        <div class="col-start-2 col-span-1 md:col-start-2 md:col-span-1 flex items-end -mb-1 md:mb-0 px-4px">
            <a><img class="md:w-30px cursor-pointer" :src="fb"></a>
        </div>
        <div class="col-start-3 col-span-1 md:col-start-3 md:col-span-1 flex items-end -mb-1 md:mb-0 px-4px">
            <a><img class="md:w-30px cursor-pointer" :src="insta"></a>
        </div>
        <div class="col-start-2 col-span-1 md:col-start-4 md:col-span-1 flex items-end px-4px">
            <a><img class="md:w-30px cursor-pointer" :src="twitter"></a>
        </div>
        <div class="col-start-3 col-span-1 md:col-start-5 md:col-span-1 flex items-end px-4px">
            <a><img class="md:w-30px cursor-pointer" :src="linkedIn"></a>
        </div>
        <div class="col-start-6 col-span-2 md:col-start-9 md:col-span-4 lg:col-start-17 lg:col-span-4 flex items-end justify-center">
            <img class= "w-60px md:w-97px cursor-pointer" :src="logoWhite">
        </div>
        <div class="col-start-11 col-span-2 flex items-end justify-center">
            <button><img class="md:w-0" :src="msgLogo"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            fb: require('@/assets/fbLogo.svg'),
            insta: require('@/assets/instaLogo.svg'),
            twitter: require('@/assets/twitterLogo.svg'),
            linkedIn: require('@/assets/linkedInLogo.svg'),
            logoWhite: require('@/assets/venuesLogoWhite.svg'),
            msgLogo: require('@/assets/msgLogo.svg'),
        }
    }
}
</script>
