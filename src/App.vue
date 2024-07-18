<template>
    <div>
        <div
            v-if="showLoveYou"
            id="init"
            class="min-h-screen relative flex flex-col items-center justify-start md:justify-center pt-8 md:pt-0 space-y-12"
        >
            <img src="/src/assets/love-you.gif" alt="GIF By Tenor" />
            <span class="block text-4xl font-bold tracking-wider"
                >Will you be my valentine?</span
            >

            <div class="flex items-center space-x-32">
                <button
                    @click="loveYouToo"
                    class="button bg-teal-500 hover:scale-150 text-2xl"
                >
                    Yes
                </button>
                <button
                    ref="button"
                    @click="moveButton"
                    @mouseover="moveButton"
                    class="absolute transition-all duration-500 button bg-rose-500 text-2xl"
                >
                    No
                </button>
            </div>
        </div>

        <div
            v-if="!showLoveYou"
            id="love-you-too"
            class="min-h-screen flex flex-col items-center justify-center space-y-12"
        >
            <img src="/src/assets/kiss.gif" alt="GIF By Tenor" />
            <span class="block text-4xl font-bold tracking-wider"
                >Yayy! Love you too 💗</span
            >
        </div>

        <span
            class="font-open-sans absolute bottom-0 left-0 w-full pb-8 text-center text-black"
        >
            &copy; Copyrights - GIFs by Tenor
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showLoveYou: true
        }
    },
    methods: {
        moveButton() {
            const button = this.$refs.button
            button.style.left = `${Math.ceil(Math.random() * 65)}%`
            button.style.top = `${Math.ceil(Math.random() * 65)}%`
        },
        loveYouToo() {
            this.showLoveYou = false
        }
    }
}
</script>
