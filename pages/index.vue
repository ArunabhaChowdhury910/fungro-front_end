<template>
    <div class="w-full h-full">
        <hidden_bar/>
        <navbar/>
        <hero/>
        <div class="px-12 pt-24 rounded-full">
            <Mid_bar/>
        </div>
        <Sub_hero/>
        <div class="px-12 py-24">
            <Catagory/>
        </div>
        
        <Long_card></Long_card>
        <!-- <Feature/> -->
        <!-- <FunngroSharkTank class="pt-36 px-24" />
        -->
        <foot/>
        <exp/>
        <end/>
    </div>
</template>

<script setup>
import hidden_bar from '/components/navbar/hidden_bar.vue'
import navbar from '/components/navbar/upper_navbar.vue'
import hero from '/components/hero.vue'
import Mid_bar from '~/components/navbar/mid_bar.vue';
import Sub_hero from '~/components/sub_hero.vue';
import Catagory from '~/components/catagory.vue';
import Long_card from '~/components/long_card.vue'
import Feature from '~/components/Feature.vue'
import end from '~/components/end.vue'
import foot from '~/components/foot.vue'
import exp from '~/components/exp.vue'
</script>

<style lang="sass" scoped>

</style>