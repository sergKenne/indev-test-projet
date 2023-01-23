<template>
  <div class="wrapper">
        <HeaderComponent/>
        <main class="main">
            <div class="container">
                <div class="main__inner-basket">
                    <BasketComponent/>
                    <CouponComponent/>
                </div>
                <div class="main__slider">
                    <ProductsComponent/>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import BasketComponent from './components/BasketComponent.vue'
import CouponComponent from './components/CouponComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BasketComponent,
    CouponComponent,
    ProductsComponent
  }
}
</script>
