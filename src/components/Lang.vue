<template>
    <div class="bg-white dark:bg-slate-950 mt-20 py-10 sm:py-14">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-8 text-gray-700 dark:text-slate-700">
                Experienced in the following technologies
            </h2>
            <div id="image-carousel" class="splide mt-10">
                <div class="splide__track">
                    <ul class="splide__list">
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png"
                                alt="HTML5" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png"
                                alt="CSS3" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/180px-Bootstrap_logo.svg.png"
                                alt="Bootstrap" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/182px-Sass_Logo_Color.svg.png"
                                alt="Sass" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/180px-Vue.js_Logo_2.svg.png"
                                alt="Vue.js" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png"
                                alt="Python" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png"
                                alt="JavaScript" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/640px-Figma-logo.svg.png"
                                alt="Figma" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042"
                                alt="Tailwind" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Wordpress-Logo.svg/768px-Wordpress-Logo.svg.png?20210511042647"
                                alt="Wordpress" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
                                alt="React" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://th.bing.com/th/id/OIP.b6COxQxrr0FPStd8EeJf0QHaGa?rs=1&pid=ImgDetMain"
                                alt="MUI" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/615px-Vitejs-logo.svg.png?20220412224743"
                                alt="Vite" width="158" height="48" />
                        </li>
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
                                alt="Github" width="158" height="48" />
                        </li>
                    
                        <li class="splide__slide">
                            <img class="max-h-12 w-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/768px-Webpack.svg.png?20210415142115"
                                alt="Webpack" width="158" height="48" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Splide } from "@splidejs/splide";

export default {
    mounted() {
        new Splide("#image-carousel", {
            pagination: false,
            type: "loop",
            perPage: 5,
            autoplay: true,
            interval:3000,
            speed:5000,
            pauseOnHover: false,
            breakpoints: {
                640: {
                    perPage: 2,
                },
                480: {
                    perPage: 1,
                },
            },
        }).mount();
    },
};
</script>

<style>
#image-carousel {
    height: 80px; /* Sesuaikan tinggi ini dengan tinggi gambar */
    overflow: hidden;
}

.splide__list {
    height: auto !important;
    display: flex;
    align-items: center; /* Vertically center the items */
}

.splide__slide img {
    height: 100%;
    max-height: 80px; /* Sesuaikan dengan tinggi kontainer */
    object-fit: contain;
}

.splide__arrow {
    top: 50%; /* Position arrows in the middle */
    transform: translateY(-50%);
}
</style>
