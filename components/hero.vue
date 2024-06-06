<template>
    <div class=" pt-8 flex items-center justify-between px-12">
      <div class="space-y-3 text-ivory_white">
        <h1 class="text-6xl  font-bold ">Earn your first income</h1>
          <p class="text-slate_grey" >Real companies, real projects, real earnings and real money</p>
          <p class="text-slate_grey">Smart opportunities for the smart generation</p>
          <div class="pt-6 flex items-center rush ">
            <nuxt-link class="text-2xl text-ivory_white hover:text-shade_green hover:bg-ivory_white font-semibold border p-4 rounded-xl py-1 bg-shade_green" to="https://teenlancer.funngro.com/pages/login/">Get Started -></nuxt-link>
          </div>
          <h3 class="text-shade_green pt-3 text-xl font-semibold">BE INDEPENDENT BEFORE 18!</h3>

      </div>
      <div>
        <!-- make this cascading -->
        <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png" class="rounded-lg cascade"/>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @keyframes cascade {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rush {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.rush {
  animation: rush 1s ease-out;
}
  </style>
  