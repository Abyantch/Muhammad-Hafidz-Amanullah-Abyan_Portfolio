<template>
    <div id="Experience" class="container mx-auto mt-10 sm:mt-20 px-4">
        <div class="text-center mt-10 sm:mt-20">
            <h2 class="text-xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-slate-700">
                Experience
            </h2>
            <h1 class="text-xl sm:text-3xl font-bold tracking-tight text-sky-500">
                All About My Journey
            </h1>
        </div>
        <ol class="relative border-l-2 sm:border-s-2 mt-10 sm:mt-20 ml-4 sm:ml-[36rem] border-gray-200 dark:border-gray-500">
            <li v-for="(experience, index) in experiences" :key="index" class="mb-4 sm:mb-10 ml-6 relative" :style="animationDelay(index)">
                <div class="absolute left-[-17rem] flex flex-row items-center">
                    <img :src="experience.imgSrc" alt="Gambar" class="w-10 h-10 sm:w-14 sm:h-14 mb-2 sm:mb-0 rounded-full ring-2" />
                    <div class="sm:ml-4 text-center sm:text-left">
                        <h3 class="text-sm sm:text-lg font-semibold text-black dark:text-slate-700">
                            {{ experience.company }}
                        </h3>
                        <time class="block text-xs sm:text-sm font-normal leading-none text-sky-900">
                            {{ experience.time }}
                        </time>
                    </div>
                </div>
                <div v-if="experience.description" class="mt-6 sm:mt-0 max-w-full sm:max-w-lg">
                    <span class="absolute flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 bg-blue-100 rounded-full transform -translate-x-[2rem] sm:left-[-2.3rem] sm:transform-none ring-8 ring-white dark:ring-sky-500 dark:bg-white">
                        <svg class="w-2 h-2 sm:w-2.5 sm:h-2.5 text-sky-500 dark:text-sky-500 shadow-2xl" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-sm sm:text-lg font-semibold text-black dark:text-slate-700">
                        {{ experience.position }}
                    </h3>
                    <p class="text-justify mb-4 text-xs sm:text-base font-normal text-gray-500 dark:text-slate-500">
                        {{ experience.description }}
                    </p>
                </div>
            </li>
        </ol>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const experiences = ref([
    {
        company: 'KEDAIREKA',
        imgSrc: 'https://d1fdloi71mui9q.cloudfront.net/Q5puRF3gSf6IYUYOWRC6_juitHBc7CQ4zqbTi',
        position: 'IT Developer',
        time: 'August-December, 2022',
        description: 'My internship at KEDAIREKA, I was involved in a research project aimed at developing organic filter membranes based on processed soybean waste as an implementation of the Green Economy concept and support for SMEs in Central Java. As part of the IT team.',
    },
    {
        company: 'Startup Campus',
        imgSrc: 'https://th.bing.com/th/id/OIP.2mP0_1pEO8u4IYLjUsIdmwAAAA?rs=1&pid=ImgDetMain',
        position: 'Chief Technology Officer (Founder Track)',
        time: 'January-June, 2023',
        description: 'Certified Independent Study at Startup Campus Academy with founder track, for 5 months we learned about startup development from the beginning to the process of finding investors. Specifically, I was responsible for the development of a website platform built using HTML, CSS, Bootstrap, and CI technologies. In developing this website, I collaborated with my partner.',
    },
    {
        company: 'Kampus Merdeka',
        imgSrc: 'https://cdc.ui.ac.id/wp-content/uploads/2023/01/Logo-Kampus-Merdeka.png',
        position: 'Designer and IT Support',
        time: 'July-December, 2023',
        description: 'My internship at KEDAIREKA, I was involved in a research project aimed at developing organic filter membranes based on processed soybean waste as an implementation of the Green Economy concept and support for SMEs in Central Java. As part of the IT team.',
    },
    {
        company: 'UNNES',
        imgSrc: 'https://greenmetric.ui.ac.id/wp-content/uploads/2021/05/unnes-logo.jpg',
        position: 'Bachelor\'s Thesis',
        time: 'Aug-Jan, 2023-2024',
        description: 'Developed a diabetic retinopathy disease detection system by utilizing python technology and the Hassanat Distance KNN algorithm, and implemented through a website with the help of the Flask-based framework.',
    },
    {
        company: 'Gamelab Indonesia',
        imgSrc: 'https://www.gamelab.id/img/share-v3.png?v=3.11?v=2.1',
        position: 'Bootcamp Front End Developer',
        time: 'June 2024',
        description: 'Learning all about front end dev at Gamelab Indonesia, start from using bootstrap, SASS, VueJs, Tailwind, ReactJs, and MUI.',
    }
]);

const animationDelay = (index) => {
    return {
        animation: `fadeInUp 0.5s ease ${index * 0.3}s both`
    };
};
</script>

<style scoped>
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
