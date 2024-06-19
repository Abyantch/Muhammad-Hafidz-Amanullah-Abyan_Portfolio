<script setup>
import { ref, watch, onMounted } from 'vue';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
const darkMode = ref(false);

watch(darkMode, (newValue) => {
  const html = document.querySelector('html');
  if (newValue) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
});

// Sync initial state with the checkbox value
onMounted(() => {
  const html = document.querySelector('html');
  darkMode.value = html.classList.contains('dark');
});



</script>

<template>
 <header class="bg-white dark:bg-gray-900 ">
    <nav id="nav-menu" class="fixed top-0 left-0 w-full backdrop-blur-2xl bg-white/30 dark:bg-white/5 z-50 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a href="#About" class="relative text-sm font-semibold leading-6 text-slate-700 dark:text-slate-100 dark:hover:text-sky-300 transform transition-transform duration-300 hover:text-sky-500 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-500 after:origin-center after:transition-all after:duration-1000 hover:after:left-0 hover:after:w-full">About Me</a>
        <a href="#Experience" class="relative text-sm font-semibold leading-6 text-slate-700 dark:text-slate-100 dark:hover:text-sky-300 transform transition-transform duration-300 hover:text-sky-500 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-500 after:origin-center after:transition-all after:duration-1000 hover:after:left-0 hover:after:w-full">Experience</a>
        <div class="flex -space-x-2 overflow-hidden">     
          <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-black" src="/src/assets/CTO.png" alt="" />
        </div>
        <a href="#Portfolio" class="relative text-sm font-semibold leading-6 text-slate-700 dark:text-slate-100 dark:hover:text-sky-300 transform transition-transform duration-300 hover:text-sky-500 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-500 after:origin-center after:transition-all after:duration-1000 hover:after:left-0 hover:after:w-full">Portofolio</a>
        <a href="#Certificate" class="relative text-sm font-semibold leading-6 text-slate-700 dark:text-slate-100 dark:hover:text-sky-300 transform transition-transform duration-300 hover:text-sky-500 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-sky-500 after:origin-center after:transition-all after:duration-1000 hover:after:left-0 hover:after:w-full">Certificate</a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <label class="swap swap-rotate cursor-pointer">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" class="hidden theme-controller" v-model="darkMode" />
          
          <!-- sun icon -->
          <svg class="swap-off fill-current w-7 h-7 text-amber-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
          
          <!-- moon icon -->
          <svg class="swap-on fill-current w-7 h-7 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        </label>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto rounded-full ring-2 ring-white dark:ring-black" src="/src/assets/CTO.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#About" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">About Me</a>
              <a href="#Experience" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Experience</a>
              <a href="#Portofolio" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Portofolio</a>
              <a href="#Certificate" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">Certificate</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

input[type="checkbox"]:checked ~ svg.swap-off {
  display: none;
}

input[type="checkbox"]:not(:checked) ~ svg.swap-on {
  display: none;
}
</style>
