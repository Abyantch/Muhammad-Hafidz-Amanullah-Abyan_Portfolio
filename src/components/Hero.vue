<script setup>
</script>

<template>
  <div id="Hero" class="bg-white dark:bg-slate-950">
    <div class="mx-auto mt-[6.5rem] max-w-6xl py-6 sm:px-6 sm:py-1 lg:px-8">
      <div class="relative isolate overflow-hidden max-h-[40] max-lg:[40rem] max-sm:[20rem] bg-sky-500 dark:bg-sky-700 px-6 pt-16 hover:shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 hover:scale-105 transition duration-500 flex flex-col-reverse lg:flex-row">
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#ffffff" stop-opacity="0.5" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A Junior Web Front End Developer
          </h2>
          <h2 class="text-3xl font-light tracking-tight text-white sm:text-4xl mt-3">
            Make a Better Visual For a Better Website
          </h2>
          <div class="mt-10 mb-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a href="https://www.linkedin.com/in/muhammad-hafidz-amanullah-abyan-4a8b191ab/" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-sky-500 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Connect With Me!</a>
          </div>
        </div>
        <div class="relative sm:my-auto h-auto lg:ml-20 flex justify-center items-center lg:flex lg:items-center">
          <img class="relative mx-auto max-w-full p-10 object-contain sm:max-w-auto rounded-3xl" src="/src/assets/CTO.png" alt="Abyantch" />
        </div>
      </div>
      <div class="relative mt-1">
        <div class="absolute block w-full h-auto bottom-[25px] z-1 left-0">
          <a href="#About"><i class="mdi mdi-arrow-down animate-bounce text-sky-500 dark:text-sky-300 absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-200 h-12 w-12 mx-auto shadow-md"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 10%;
}

.mdi-arrow-down {
  color: teal;
}
</style>
