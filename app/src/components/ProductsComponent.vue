<template>
    <div>
        <h4 class="main__slider-title">
            <span>Просмотренные товары</span> 
            <span class="main__slider-index"><span class="ind">1</span><span class="main__slider-length"> / {{products.length}}</span></span>
        </h4>
        <div class="main__slider-inner">
            <div class="slider">
                <CardComponent v-for="product in products" :key="product.id" :product="product" />
            </div>
            
        </div>
    </div>
</template>

<script>
    import setSlider from '../utils/setSlider.js'
    import CardComponent from "./CardComponent.vue";
    import { mapState } from 'vuex'

    export default {
       name: "ProductsComponent" ,
       components: {
            CardComponent,
       },
       computed: mapState({
           products: state => state.products
       }),
       mounted() {
            setSlider();
       }
    }
</script>