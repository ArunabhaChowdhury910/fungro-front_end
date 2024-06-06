<template>
  <div class="w-full px-12 flex flex-col justify-between space-y-5">
    <h1 class="text-4xl text-center text-ivory_white font-bold">We are trusted by</h1>
    <p class="text-xl text-slate_grey font-semibold w-full text-center">
      Hundreds of companies and partners working with Funngro to find smart talent
    </p>
    <div class="flex justify-around h-full">
      <div class="w-10 h-1"></div>
      <div class="relative overflow-hidden whitespace-nowrap">
        <div class="flex text-white space-x-8 animate-marquee">
          <span
            v-for="(company, index) in companies"
            :key="index"
            class="flex justify-center items-center"
          >
            <span
              :class="[
                company.toLowerCase() === 'companies' || company.toLowerCase() === 'partners'
                  ? 'text-ivory_white font-normal  '
                  : 'font-semibold text-shade_green hover:scale-125 ',
                'text-lg  transition-transform duration-300',
              ]"
            >
              {{ company }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const companies = [
  'Companies',
  'CarDekho',
  'Enerzy Solar',
  'Mobigic',
  'Tarakki',
  'StockPe',
  'LegacyNext',
  'Two 99',
  'MOnech',
  'Eco 365',
  'Grow Partner',
  'Partners',
  'Mask group',
  'AIC Pinnacle',
  'Qapita',
  'Headstart',
  'AIC',
  
  
];
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 15s linear infinite;
}

.hover\\:scale-125:hover {
  transform: scale(1.25);
}
</style>
