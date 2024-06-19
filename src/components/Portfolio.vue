<template>
    <div id="Portfolio" class="text-center mt-[15rem]">
        <h2 class="text-3xl font-normal tracking-tight text-gray-900 dark:text-slate-700 sm:text-2xl">
            Portfolio
        </h2>
        <h1 class="text-3xl font-bold tracking-tight text-sky-500 sm:text-3xl">
            This is my work
        </h1>
    </div>
    <div class="font-sans mt-7">
        <div x-data="{ openTab: 1 }" class="">
            <div class="">
                <div class="max-w-lg mx-auto mb-4 flex space-x-4 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-md">
                    <button x-on:click="openTab = 1" :class="{ 'bg-sky-500 text-white': openTab === 1 }"
                        class="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-sky-500 hover:text-white">
                        Website
                    </button>
                    <button x-on:click="openTab = 2" :class="{ 'bg-sky-500 text-white': openTab === 2 }"
                        class="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-sky-500 hover:text-white">
                        App
                    </button>
                    <button x-on:click="openTab = 3" :class="{ 'bg-sky-500 text-white': openTab === 3 }"
                        class="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-sky-500 hover:text-white">
                        Video
                    </button>
                </div>
                <div class="grid grid-cols-2 gap-5 max-w-3xxl mx-[15rem]">
                    <div x-show="openTab === 1"
                        class="card transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 hover:transition hover:duration-500 max-w-[20rem] h-[22rem]">
                        <div class="rounded-lg overflow-hidden">
                            <img src="https://ik.imagekit.io/ymfeid1q7/Liljoy.png?updatedAt=1718337980136"
                                alt="Project 1" class="max-h-70 sm:h-60 w-full object-cover" />
                        </div>
                        <h3 class="font-semibold text-xl tex-dark mt-5 mb-3">
                            LilJoy Beadies
                        </h3>
                        <a href="https://github.com/Abyantch/Little-Joy-Beadies"
                            class="text-light text-sky-500">More!</a>
                    </div>

                    <div x-show="openTab === 1"
                        class="card transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 hover:transition hover:duration-500 max-w-[20rem] h-[22rem]">
                        <div class="rounded-lg overflow-hidden">
                            <img src="https://ik.imagekit.io/ymfeid1q7/LoveBuddy.png?updatedAt=1718337964152" alt="Project 1" class="max-h-70 sm:h-60 w-full object-cover" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
                            LoveBuddy.id
                        </h3>
                        <a href="https://github.com/Abyantch/LoveBuddy.id--Website-"
                            class="text-light text-sky-500">More!</a>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5 max-w-3xxl  mx-[15rem]">
                    <div x-show="openTab === 2"
                        class="card transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 hover:transition hover:duration-500 max-w-[20rem] h-[22rem]">
                        <div class="rounded-lg overflow-hidden">
                            <img src="https://ik.imagekit.io/ymfeid1q7/ToDo.png?updatedAt=1718340328776"
                                alt="Project 1" class="max-h-70 sm:h-60 w-full object-cover" />
                        </div>
                        <h3 class="font-semibold text-xl tex-dark mt-5 mb-3">
                            To-Do-List App
                        </h3>
                        <a href="https://github.com/Abyantch/To-Do-List-App"
                            class="text-light text-sky-500">More!</a>
                    </div>
                    <div x-show="openTab === 2"
                        class="card transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 hover:transition hover:duration-500 max-w-[20rem] h-[22rem]">
                        <div class="rounded-lg overflow-hidden">
                            <img src="https://ik.imagekit.io/ymfeid1q7/Drication.png?updatedAt=1718337960774" alt="Project 1" class="max-h-70 sm:h-60 w-full object-cover" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
                            Drication
                        </h3>
                        <a href="https://github.com/Abyantch/Diabetic-retinopathy-identification-CLAHE-2D-LDA-Using-Hassanat-Distance-KNN-H-KNN-algorithm."
                            class="text-light text-sky-500">More!</a>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-5 max-w-3xxl  mx-[15rem]">
                    <div x-show="openTab === 3"
                        class="card transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 hover:transition hover:duration-500 max-w-[20rem] h-[22rem]">
                        <div class="rounded-lg overflow-hidden">
                            <iframe width="300" height="240" src="https://www.youtube.com/embed/mC_-IauuOuk?si=PIqHneSlQDHTcOK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <h3 class="font-semibold text-xl tex-dark mt-5 mb-3">
                            Lomba Lampah Kita<br> Pemkot Semarang Tahun 2024
                        </h3>
                    </div>

                    <div x-show="openTab === 3"
                        class="card transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 hover:transition hover:duration-500 max-w-[20rem] h-[22rem]">
                        <div class="rounded-lg overflow-hidden">
                            <iframe width="300" height="240" src="https://www.youtube.com/embed/xkYnUY0mguM?si=84rGaWpKyZhO1TlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
                            Video Profil<br>  UMKM Tahu Hambida
                        </h3>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>
<script setup>
</script>
<style></style>
