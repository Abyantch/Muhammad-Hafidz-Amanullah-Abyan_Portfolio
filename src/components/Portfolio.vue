<template>
  <div id="Portfolio" class="text-center mt-20 sm:mt-[15rem] px-4">
    <h2 class="text-3xl font-normal tracking-tight text-gray-900 dark:text-slate-700 sm:text-2xl">
      Portfolio
    </h2>
    <h1 class="text-3xl font-bold tracking-tight text-sky-500 sm:text-3xl">
      This is my work
    </h1>
  </div>
  <div class="font-sans mt-7">
    <div class="max-w-3xl mx-auto">
      <div class="max-w-lg mx-auto mb-4 flex space-x-4 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-md">
        <button v-for="(tab, index) in tabs" :key="index" @click="currentTab = tab"
          :class="{ 'bg-sky-500 text-white': currentTab.name === tab.name }"
          class="flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 hover:bg-sky-500 hover:text-white">
          {{ tab.label }}
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        <div v-for="project in currentTab.projects" :key="project.id"
          class="card transition-all duration-300 bg-white dark:bg-slate-900 rounded-xl shadow-md m-1 p-4 hover:scale-105 hover:transition hover:duration-500">
          <div v-if="currentTab.name === 'video'" class="relative overflow-hidden" style="padding-top: 56.25%;">
            <iframe :src="project.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full"></iframe>
          </div>

          <div v-else class="rounded-lg overflow-hidden">
            <img :src="project.image" :alt="project.title" class="max-h-70 sm:h-60 w-full object-cover" />
          </div>
          <h3 class="font-semibold text-xl text-dark mt-5 mb-3">
            {{ project.title }}
          </h3>
          <a :href="project.link" class="text-light text-sky-500">Demo</a>
          <div class="flex flex-wrap mt-3 ml-[-0.4rem]">
            <span v-for="(tech, index) in project.technologies" :key="index"
              class="bg-gray-100 text-sky-500 dark:bg-gray-700 dark:text-gray-200 rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-2">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
  {
    name: 'website',
    label: 'Website',
    projects: [
      {
        id: 1,
        title: 'LilJoy Beadies',
        image: 'https://ik.imagekit.io/ymfeid1q7/Liljoy.png?updatedAt=1718337980136',
        link: 'https://github.com/Abyantch/Little-Joy-Beadies',
        technologies: ['Boostrap', 'SASS', 'Vite'],
      },
      {
        id: 2,
        title: 'LoveBuddy.id',
        image: 'https://ik.imagekit.io/ymfeid1q7/LoveBuddy.png?updatedAt=1718337964152',
        link: 'https://github.com/Abyantch/LoveBuddy.id--Website-',
        technologies: ['Boostrap', 'Code Igniter'],
      },
      {
        id: 3,
        title: 'Jadoo',
        image: 'https://ik.imagekit.io/ymfeid1q7/Jadoo.png?updatedAt=1721720031446',
        link: 'https://landingpagejadoo.netlify.app',
        technologies: ['React', 'MUI', 'Vite'],
      },
    ],
  },
  {
    name: 'app',
    label: 'App',
    projects: [
      {
        id: 1,
        title: 'To-Do-List App',
        image: 'https://ik.imagekit.io/ymfeid1q7/ToDo.png?updatedAt=1718340328776',
        link: 'https://todo-app-abyantch.netlify.app/',
        technologies: ['Vue', 'Tailwind'],
      },
      {
        id: 2,
        title: 'Drication',
        image: 'https://ik.imagekit.io/ymfeid1q7/Drication.png?updatedAt=1718337960774',
        link: 'https://github.com/Abyantch/Diabetic-retinopathy-identification-CLAHE-2D-LDA-Using-Hassanat-Distance-KNN-H-KNN-algorithm.',
        technologies: ['Python', 'Scikit-learn', 'OpenCV'],
      },
      {
        id: 3,
        title: 'KanbanKuu',
        image: 'https://ik.imagekit.io/ymfeid1q7/KanbanKuu?updatedAt=1721645598549',
        link: 'https://kanbankuu-abyantch.netlify.app/',
        technologies: ['React', 'MUI', 'Vite'],
      },
    ],
  },
  {
    name: 'video',
    label: 'Video',
    projects: [
      {
        id: 1,
        title: 'Lomba Lampah Kita Pemkot Semarang Tahun 2024',
        image: '',
        link: 'https://www.youtube.com/embed/mC_-IauuOuk?si=PIqHneSlQDHTcOK3',
        technologies: ['Premiere Pro', 'Capcut Pro'],
      },
      {
        id: 2,
        title: 'Video Profil UMKM Tahu Hambida',
        image: '',
        link: 'https://www.youtube.com/embed/xkYnUY0mguM?si=84rGaWpKyZhO1TlM',
        technologies: ['Premiere Pro', 'Capcut Pro'],
      },
      {
        id: 3,
        title: 'Lomba Kampung Hebat Kota Semarang tahun 2024',
        image: '',
        link: 'https://www.youtube.com/embed/t6lbIY2AW9w?si=OS1C5FMrfmfC-_Iw',
        technologies: ['Premiere Pro', 'Capcut Pro'],
      },
    ],
  },
]);

const currentTab = ref(tabs.value[0]);
</script>

<style scoped>
@media (max-width: 640px) {
  #Portfolio {
    margin-top: 5rem;
  }

  .max-w-3xl {
    max-width: 100%;
  }

  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
}

.badge {
  background-color: #e2e8f0;
  color: #2d3748;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.dark .badge {
  background-color: #4a5568;
  color: #edf2f7;
}
</style>
