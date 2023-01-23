<template>
    <div class="card main__slider-item">
        <div class="card__header">
            <img :src="product.image" :alt="product.code" class="card__img">
        </div>
        <div class="card__body">
            <h5 class="card__title">{{product.code}}</h5>
            <p class="card__description">{{product.description}}</p>
            <div class="card__price">
                <img src="images/cart-price.png" alt="">
            </div>
            <button class="btn card__btn">
                Подробнее
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardComponent",
        props:["product"],
    }
</script>