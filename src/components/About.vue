<template>
  <div class="bg-white dark:bg-slate-950">
    <div id="About"
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 pb-0 mt-10 px-4 py-20 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div class="">
        <img src="/src/assets/About.png"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="rounded drop-shadow-xl bg-none w-[25rem] mx-auto hover:scale-110 transition duration-500" />
      </div>
      <div>
        <h2 class="text-3xl font-normal tracking-tight text-slate-700 dark:text-slate-500 sm:text-2xl">
          About Me
        </h2>
        <h1 class="text-3xl font-bold tracking-tight text-sky-500 sm:text-3xl">
          Building websites, a passion I embrace.
        </h1>
        <p class="mt-4 text-slate-700 dark:text-slate-500">
          Fresh graduate of the informatics engineering education program
          who has an interest and experience in the world of digital visuals. I
          have worked on several projects with usability and aesthetics in mind.
          Accustomed to designing using canva and figma platforms, video editing
          using adobe premiere pro and capcut, and have focused on front end
          developers using html, css, sass, bootsrap, tailwind, vue
          technologies.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          <div
            class="bg-white dark:bg-slate-900 rounded-xl m-1 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 transition duration-500 flex flex-col max-h-[9rem] max-w-[20rem]">
            <div class="rounded-lg overflow-hidden text-center">
              <i class="bx bx-briefcase-alt-2 text-sky-300 bx-sm"></i>
            </div>
            <h3 class="text-center font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Experience
            </h3>
            <p class="text-center font-light dark:text-slate-200 text text-secondary mb-auto dark:text-secondary-light">
              +1 Year Working
            </p>
          </div>
          <div
            class="bg-white dark:bg-slate-900 rounded-xl m-1 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 transition duration-500 flex flex-col max-h-[9rem] max-w-[20rem]">
            <div class="rounded-lg overflow-hidden text-center">
              <i class="bx bx-book-content text-center text-sky-300 bx-sm mx-auto"></i>
            </div>
            <h3 class="text-center font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Projects
            </h3>
            <p class="text-center font-light dark:text-slate-200 text-secondary mb-auto dark:text-secondary-light">
              +10 Projects
            </p>
          </div>
          <div
            class="bg-white dark:bg-slate-900 rounded-xl m-1 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/50 transition duration-500 flex flex-col max-h-[9rem] max-w-[20rem]">
            <div class="rounded-lg overflow-hidden text-center">
              <i class='bx bx-support text-center text-sky-300 bx-sm mx-auto'></i>
            </div>
            <h3 class="text-center font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Freelance
            </h3>
            <p class="text-center font-light dark:text-slate-200 text text-secondary mb-auto dark:text-secondary-light">
              24/7
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
</script>
<style></style>
