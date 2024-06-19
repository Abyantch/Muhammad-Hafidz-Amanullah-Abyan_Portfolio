<template>
<section class="bg-white dark:bg-slate-950 ">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="text-center mt-20 text-3xl font-normal tracking-tight text-gray-900 dark:text-slate-700 sm:text-2xl ">Contact Us</h2>
      <h1 class="text-center text-3xl mb-5 font-bold tracking-tight text-sky-500 sm:text-3xl">
                Leave Some Message
            </h1>      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 dark:bg-slate-950 border border-gray-300 text-gray-900 dark:text-slate-500 text-sm rounded-lg focus:outline-none focus:ring-sky-500 focus:border-sky-500 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 block w-full p-2.5 peer " placeholder="Input Your Email">
                <p class="text-sm  text-pink-700 m-1 invisible peer-invalid:visible">Email invalid</p>
            </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700 ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 dark:text-slate-500 bg-gray-50 dark:bg-slate-950 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700 ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 dark:text-slate-500 bg-gray-50 dark:bg-slate-950 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300">Send message</button>
      </form>
  </div>
</section>
</template>
<script>
</script>
<style>
</style>
