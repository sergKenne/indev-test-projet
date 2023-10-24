<template>
    <div class="header">
        <div class="container">
            <ul class="header__navbar">
                <li class="nav-basket header__navbar-item">
                    <img src="images/cart.svg" alt="shopping cart" class="nav-basket__icon">
                    <div class="nav-basket__info">
                        <p class="nav-basket__title">Ваша корзина</p>
                        <p class="nav-basket__qty">{{totalCartCategory}} товара</p>
                        <p class="nav-basket__price">{{totalPrice}} ₽</p>
                    </div>
                </li>
            </ul>
            <ul class="breadcrumb header__breadcrumb">
                <li class="breadcrumb__item">Главная</li>
                <li class="breadcrumb__item">Корзина</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {formatPrice} from "../utils/formatPrice"
    import { mapState } from 'vuex'
    export default {
        name: 'HeaderComponent',
        computed: mapState({
           totalCartCategory: state => state.carts.length,
           totalPrice: state => {
              const total = state.carts.reduce((acc, curr) => {
                return acc + curr.qty*curr.price
              },0);

              return formatPrice(total);
           },
           totalProductInCart: state => state.carts.reduce((acc, curr) => acc + curr.qty , 0),
        }),
    }
</script>