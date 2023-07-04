<template>
    <div class="overley" @click="closeWindow">
        <dialog open class="popup-wrapper" @click.stop>
            <div class="column">
                <h4 class="fourth-header">Оставьте заявку</h4>
                <p class="grey-font">Скоро с вами свяжется администратор</p>
                <p class="bottom">Нажимая на кнопку «Отправить», Вы соглашаетесь с <a href="">Политикой конфиденциальности</a></p>
            </div>
            <form v-if="!isClicked" class="form-wrapper">
                <label class="labels">Ваше имя</label>
                <br>
                <input placeholder="Иван" class="inputs">
                <br>
                <label class="labels">Ваш номер телефона</label>
                <br>
                <input placeholder="+7 (___) ___-__-__" class="inputs">
                <goldButton name="Забронировать" :onClick="onBookingButton"></goldButton>
            </form>
            <h4 v-if="isClicked" class="ready">Всё готово! Ожидайте звонка.</h4>
            <img alt="cross" src="../images/close.png" @click="closeWindow" class="cross">
        </dialog>
    </div>
    
</template>

<script>
import goldButton from './UI/goldButton.vue';
    export default {
        components: {
            goldButton
        },
        props: ['width'],
        data() {
            return {
                isClicked: false
            }
        },
        methods: {
            closeWindow() {
                this.$emit('close')
            },
            onBookingButton() {
                this.isClicked=true;
                setTimeout(()=> {
                    this.$emit('close');
                    this.isClicked=false;
                }, 2500)
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/variables-mixins.scss';
    @import '../assets/fonts.scss';

    .overley {
        background-color: rgba(24, 25, 27, .9);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 1;
        
        .popup-wrapper {
            @include w-h(842, 328);
            border-radius: 1rem;
            background-color: white;
            color: white;
            position: absolute;
            top: 10rem;
            left: 27rem;
            z-index: 300;
            display: flex;
            align-items: start;

            %gold {
                font-family: P052;
                @include font-size(32);
                color: $gold;
                @include margin-b(8);
            }
            .ready {
                @extend %gold;
                margin-top: 3rem;
                @include w-h(302, 64);
            }

            .column {
                @include w-h(400, 217);
                @include margin(40, 20, 0, 40);

                .fourth-header {
                    @extend %gold;
                    @include margin-b(8);
                }
                .grey-font {
                    color: $ver-203;
                    @include font-size(16);
                    font-family: Lato;
                    @include margin-b(119);
                }
                .bottom {
                    @include w-h(320, 30);
                    font-family: Roboto;
                    @include font-size(12);
                    color: $ver-203;

                    a {
                        text-decoration: none;
                        :active {
                            color: $ver-203;
                        }
                    }
                }
            }
            .form-wrapper {
                @include w-h(302, 228);
                @include margin-t(40);

                .labels {
                    font-family: Roboto;
                    @include font-size(12px);
                    line-height: 1rem;
                    color: $ver-203;
                    @include margin-b(8);
                }
                .inputs {
                    @include w-h(302, 52);
                    border-radius: 0.25rem;
                    background-color: $platinum;
                    @include margin-b(16);
                    padding-left: 1rem;

                    ::placeholder {
                        font-family: Roboto;
                        @include font-size(14);
                        color: $gold;
                    }
                    
                }
                .inputs::placeholder {
                    font-family: Roboto;
                    @include font-size(14);
                    color: $dark-text;
                }
                .inputs:first-of-type::placeholder {
                        color: $black2;
                    }
            }
            .cross {
                @include w-h(24, 24);
                @include margin(16, 16, 0, 40);
            }
        }
    }
    
    
</style>