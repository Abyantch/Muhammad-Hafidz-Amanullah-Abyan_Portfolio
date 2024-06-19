<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Lang from './components/Lang.vue'
import Timeline from './components/Timeline.vue'
import Portfolio from './components/Portfolio.vue'
import Certificate from './components/Certificate.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar/>
  <Hero/>
  <About/>
  <Lang/>
  <Timeline/>
  <Portfolio/>
  <Certificate/>
  <Contact/>
  <Footer/>
</template>

<style>
html{
  scroll-behavior: smooth;
}
#app{
  padding-left: 3%;
  padding-right: 3%;
  
}

</style>
