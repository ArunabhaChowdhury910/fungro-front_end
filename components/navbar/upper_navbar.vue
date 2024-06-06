<template>
    <div class="w-full h-full py-3 flex justify-between px-12 items-center pt-16">
      <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg" class=" " />
      <div class="flex space-x-10 items-center">
        <p class="text-xl text-white hover:text-shade_green cursor-pointer p-4">Teen</p>
        <p class="text-xl text-white hover:text-shade_green cursor-pointer p-4">Company</p>
        <p class="text-xl text-white hover:text-shade_green cursor-pointer">Download App</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const dropdownVisible = ref({
    teen: false,
    company: false
  })
  
  const showDropdown = (menu) => {
    dropdownVisible.value[menu] = true
  }
  
  const hideDropdown = (menu) => {
    dropdownVisible.value[menu] = false
  }
  </script>
  
  <style scoped>
  .icon-hover {
    color: white;
    transition: color 0.3s;
  }
  
  .icon-hover:hover {
    color: var(--shade-green);
  }
  </style>
  