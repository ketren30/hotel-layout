<template>
    <form class="tab-content">
        <Popup v-if="isPopup" @close="closePopup" :width="width"></Popup>
        <img src="../images/seats-plan.png" alt="Plan of seats" class="plan">

        <article class="description">
            <h3 class="description-title">{{ hall.description }}</h3>
            <div class="info">
                <p class="criterias">площадь</p>
                <p class="values">{{ hall.square }}</p>
                <p class="criterias">вместимость</p>
                <p class="values">{{ hall.peopleAmount }}</p>
                <p class="criterias">фуршет</p>
                <p class="values">{{ hall.buffet }}</p>
            </div>

            <div class="buttons">
                <GoldButton name="Забронировать" :onClick="openPopup" height="52" ></GoldButton>
                <WhiteButton name="Посмотреть галерею"></WhiteButton>
            </div>
        </article>

    </form>
    <Popup v-if="isPopup" @close="closePopup"></Popup>
</template>

<script>
import GoldButton from '../components/UI/goldButton.vue';
import WhiteButton from '../components/UI/whiteButton.vue';
import Popup from '../components/popup.vue';
const body=document.getElementById('body');
    export default {
        props: ['hall', 'width'],
        components: {
            GoldButton,
            WhiteButton,
            Popup
        },
        data() {
            return {
                isPopup: false
            }
        },
        methods: {
            closePopup() {
                this.isPopup=false;
                body.style='';
            },
            openPopup() {
                this.isPopup=true;
                body.style.maxHeight = '100vh';
                body.style.overflow = 'hidden';
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets//variables-mixins.scss';
    @import '../assets/fonts.scss';

    .tab-content {
        @include w-h(1588, 492);
        background-color: $light-grey;
        display: flex;
        justify-content: space-between;

        .plan {
            @include w-h(267, 469);
            @include margin-l(231);
        }

        .description {
            @include w-h(536, 380);
            border-radius: 1rem;
            box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.10);
            @include margin-all(56);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            color: white;

            .description-title {
                @include w-h(456, 64);
                font-family: P052;
                @include font-size(32);
                line-height: 2rem;
                font-weight: 700;
                @include margin-y(40, 24);
                color: $black2;
            }
            .info {
                @include w-h(456, 120);
                display: grid;
                grid-template-rows: repeat(3, 2.5rem);
                grid-template-columns: 12.5rem 16rem;
                font-family: Lato;
                @include font-size(16);
                %text {
                    border-bottom: 2px solid $platinum;
                    display: flex;
                    align-items: center;
                }
                .criterias {
                    @extend %text;
                    color: $ver-203;
                    
                }
                .values {
                    color: $black;
                    @extend %text;
                }
            }
            .buttons {
                align-self: flex-start;
                @include margin(32, 0, 0, 40);
                border-radius: 4.44vw;
            }
        }
    }
</style>