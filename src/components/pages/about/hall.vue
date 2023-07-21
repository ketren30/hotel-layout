<template>
    <form class="tab-content">
        <Popup v-if="isPopup" @close="closePopup" :width="width"></Popup>
        <img src="../../../images/seats-plan.png" alt="Plan of seats" class="plan">

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
import GoldButton from '../../ui/goldButton.vue';
import WhiteButton from '../../ui/whiteButton.vue';
import Popup from './popup.vue';
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
    @import '../../../assets//variables-mixins.scss';
    @import '../../../assets/fonts.scss';

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
            @include margin-r(56);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            color: white;
            padding: 2.08vw;

            .description-title {
                font-family: P052;
                @include font-size(32);
                line-height: 1.66vw;
                font-weight: 700;
                color: $black2;
                @include margin-b(24);
            }
            .info {
                @include w-h(456, 120);
                display: grid;
                grid-template-rows: repeat(3, 2.08vw);
                grid-template-columns: 10.4vw 13.3vw;
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
                border-radius: 4.44vw;
                display: flex;
                justify-content: space-between;
                @include margin-t(32);
                align-self: flex-start;
            }
            .buttons button:first-of-type {
                margin-right: 10px;
            }
        }
    }

    @media (min-width: 601px) and (max-width: 960px) {
        #app {
            .main-wrapper {
                .schemes {
                    .tabs-wrapper {
                        .tab-content {
                            width: 100%;
                            @include tablet-h(285);

                            .plan {
                                @include tablet-w-h(154, 270);
                                margin-left: 14vw;
                            }
                            .description {
                                @include tablet-w-h(400, 240);

                                .description-title {
                                    margin-bottom: 1.4vw;
                                    line-height: 2.5vw;
                                    @include font-size(30);
                                }

                                .info {
                                    @include tablet-w-h(340, 89);
                                    grid-template-columns: 15vw 20.4vw;
                                    grid-template-rows: repeat(3, 3.1vw);
                                }

                                .buttons {
                                    margin-top: 1.8vw;
                                    @include tablet-w(340);
                                    justify-content: space-around;
                                    align-self: center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        #app {
            .main-wrapper {
                .schemes {
                    .tabs-wrapper {
                        .tab-content {
                            width: 100%;
                            @include height(624);
                            flex-direction: column;
                            align-items: center;
                            justify-content: start;
                            margin-bottom: 6.66vw;
                            border-radius: 4.44vw;

                            .plan {
                                width: 32.7%;
                                @include height(208);
                                margin: 4.44vw 0;
                            }
                            .description {
                                width: 91%;
                                height: 100vw;
                                border-radius: 4.44vw;
                                box-shadow: 0px 2.22vw 4.44vw 0px #2223241A;
                                background-color: white;

                                .description-title {
                                    font-size: 5.55vw;
                                    line-height: 7.7vw;
                                    width: 82.2vw;
                                    height: fit-content;
                                    margin-top: 6.66vw;
                                }

                                .info {
                                    width: 82.2vw;
                                    height: 26.6vw;
                                    grid-template-columns: 38.88vw 43.33vw;
                                    grid-template-rows: 8.33vw 10.55vw 8.33vw;
                                    margin-top: 4.44vw;

                                    .criterias, .values {
                                        font-size: 3.88vw;
                                    }
                                    .criterias:nth-child(1), .values:nth-child(2) {
                                        align-items: start;
                                    }
                                    .criterias:nth-child(5), :nth-child(6) {
                                        align-items: end;
                                    }
                                }

                                .buttons {
                                    flex-direction: column;
                                    margin: 6.66vw 0 0 0;
                                    @include height(120);
                                    width: 82vw;
                                    align-self: center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>