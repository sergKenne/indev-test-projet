<template>
  <div class="coupon main__coupon">
    <div class="coupon__inner">
        <div class="coupon__title">Итого</div>
        <div class="coupon__row">
            <span class="coupon__text">Сумма заказа</span>
            <span class="coupon__value">{{totalPrice}} ₽</span>
        </div>
        <div class="coupon__row">
            <span class="coupon__text">Количество</span>
            <span class="coupon__value">{{totalProductInCart}} шт</span>
        </div>
        <div class="coupon__row">
            <span class="coupon__text">Установка</span>
            <span class="coupon__value">{{checked}}</span>
        </div>
        <div class="coupon__row coupon__row--subtitle">
            <span class="coupon__text coupon__text--total">Стоимость товаров</span>
            <span class="coupon__value coupon__value--total">{{totalPrice}} ₽</span>
        </div>
        <div class="coupon__buttons">
            <button class="btn coupon__btn" @click="sendData">Оформить заказ</button>
            <button class="btn btn--white coupon__btn">Купить в 1 клик</button>
        </div>
    </div>
</div>
</template>

<script>
    import { mapState } from 'vuex';
    import {formatPrice} from "../utils/formatPrice"
    
    export default {
        name: "CouponComponent",
         computed: mapState({
           checked: state => state.checked ,
           totalProductInCart: state => state.carts.reduce((acc, curr) => acc + curr.qty , 0),
           totalCartCategory: state => state.carts.length,
           totalPrice: state => {
              const total =  state.carts.reduce((acc, curr) => {
                return acc + curr.qty*curr.price
              },0)

              return formatPrice(total);
           },
        }),
        methods: {
            sendData(){
                alert("Send data")
            }
        }
    }
</script>
