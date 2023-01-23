<template>
    <div class="basket main__basket">
        <div class="basket__header">
            <h2 class="basket__title">Ваша корзина</h2>
            <span class="basket__qty" v-if="carts.length">{{totalProductInCart}} товара</span>
            <span v-if="carts.length" class="basket__clean-cart" @click="cleanCart">Очистить корзину</span>
        </div>
        <div class="basket__empty" v-if="!carts.length">
            <h1>YOUR CART IS EMPTY</h1>
        </div>
        <div class="in-basket basket__cards">
            <BasketCard v-for="cart in carts" :key="cart.id" :cart="cart" />
        </div>
        <div class="basket__footer">
            <input id="basket"
               type="checkbox" 
               class="basket__input" 
               :value="value" 
               v-model="value"
               @change="onChange($event)"
               true-value="Да"
               false-value="Нет"
            />
            <label for="basket" class="basket__input-label"></label>
            <div class="basket__wrap-icon">
                <img class="basket__icon" src="images/fixing.svg" alt="fix icon">
            </div>
            <div class="basket__info">
                <h6 class="basket__info-title">Установка</h6>
                <p class="basket__info-text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
            </div>
        </div>
    </div>
</template>

<script> 
    import BasketCard from '../components/BasketCard.vue'
    import { mapState } from 'vuex'

    export default {
        name: "basketComponent",
        data(){
            return {
               value: false
            }
        },
        components: {
            BasketCard
        },
        computed: mapState({
           carts: state => state.carts,
           totalProductInCart: state => state.carts.reduce((acc, curr) => acc + curr.qty , 0),
        }),
        methods: {
           cleanCart() {
               this.$store.commit("CLEAN_CART")
           },

           onChange(event) {
              this.$store.commit("FIXING_TOGGLE", event.target.value)
           }
        },
        mounted(){
            this.$store.commit("FIXING_TOGGLE", "Нет")
        }
    }
</script>
