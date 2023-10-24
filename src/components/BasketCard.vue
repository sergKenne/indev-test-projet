<template>
    <div class="in-basket__card">
        <img :src="cart.image" alt="picture" class="in-basket__img">
        <div class="in-basket__body">
            <div class="in-basket__info">
                <h6 class="in-basket__title">{{cart.title}}</h6>
                <p class="in-basket__description">{{cart.info}}</p>
                <p class="in-basket__shu">Артикул: {{cart.shu}}</p>
            </div>
            <div class="in-basket__buttons">
                <div class="in-basket__btn-group">
                    <span @click="removeProductFromCart(cart)" class="in-basket__btn in-basket__btn--action">
                        <img class="in-basket__btn-icon" src="images/minus.svg" alt="">
                    </span>
                    <span class="in-basket__btn">{{cart.qty}}</span>
                    <span @click="addProductToCart(cart)" class="in-basket__btn in-basket__btn--action">
                        <img class="in-basket__btn-icon" src="images/plus.svg" alt="">
                    </span>
                </div>
                <div v-if="cart.qty > 1" class="in-basket__unit-price">{{price}} ₽/шт.</div>
            </div>
            <div class="in-basket__price">{{totalPrice}} ₽</div>
            <span class="in-basket__close-btn" @click="deleteProduct(cart)">
                <img src="images/close.svg" alt="" class="in-basket__close-icon">
            </span>
        </div>
    </div>
</template>

<script>
    import {formatPrice} from "../utils/formatPrice"
    export default {
        name: "BasketCard",
        props:["cart"],
        
        methods: {
            addProductToCart(cart) {
                cart.qty+=1
                this.$store.commit("ADD_TO_CART", cart);
            },

            removeProductFromCart(cart) {
                if(cart.qty > 1) {
                    cart.qty-=1
                    this.$store.commit("REMOVE_FROM_CART", cart);
                }
                return;
            },

            deleteProduct(cart){
                console.log(typeof cart.id);
                this.$store.commit("DELETE_PRODUCT", cart.id);
            }

        },
        computed: {
            price() {
                return formatPrice(this.cart.price)
            },
            totalPrice() {
                const priceToArr = (this.cart.price*this.cart.qty)
                return formatPrice(priceToArr)
            }
        }

    }
</script>