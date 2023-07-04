<template>
    <header v-if="width>=600" class="head-wrapper">
        <section class="logo-and-info">
            <a  href='' class="logo"></a>
            <address class="info">
                <p class="address">г. Ставрополь <br>ул. Пушкина 272</p>
                <a href='' class="telegram-icon"></a>
                <a href='' class="whatsapp-icon"></a>
                <div class="call">
                    <a href="tel: +7123456789">+7 (123) 45-67-89</a>
                    <p>Перезвоните мне</p>
                </div>    
            </address>
        </section>

        <nav class="navigation">
            <a class="menu-item">Рассчёт стоимости</a>
            <a class="menu-item-active">О нас</a>
            <a class="menu-item">Выездная регистрация</a>
            <a class="menu-item">Схемы залов</a>
            <a class="menu-item">Меню</a>
            <a class="menu-item">Галерея</a>
            <a class="menu-item">Отзывы</a>
            <a class="menu-item">Контакты</a>
        </nav>
    </header> 
    
    <header v-if="width<600" class="mobile-header">
        <div class="img-wrapper">
            <button type="button" class="menu"></button>
            <a  href='' class="mobile-logo"></a>
        </div>
        <GoldButton name="Позвонить" height="36"></GoldButton>
    </header>   
</template>

<script>
import GoldButton from '../components/UI/goldButton.vue'
    export default {
        props: ['width'],
        components: {
            GoldButton
        },
        data() {
            return {
            }
        }
    }

</script>

<style lang="scss">
@import '../assets/variables-mixins.scss';
@import '../assets/fonts.scss';

.head-wrapper {
    @include w-h(1900, 144);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid $light-grey;
    border-radius: 0 0 1rem 1rem;
    font-family: Lato;

    .logo-and-info {
        @include width(1567);
        @extend %price-wrapper;
        @include margin(12, 0, 32, 0);

        .logo {
        @include w-h(108.62, 56);
        background-image: url(../images/header_logo.png);
        background-size: cover;
        }
        .info {
            @include font-size(20);
            @include width(604);
            display: flex;
            align-items: center;
            font-style: normal;

            
            .address {
                @include width(200);
                @include margin-r(48);
                position: relative;
            }
            .address::before {
                content:'';
                @include w-h(24, 24);
                background-image: url('../images/Map_Pin.png');
                background-size: cover;
                position: absolute;
                top: 1.3rem;
                left: -2.5rem;
            }
            
            .telegram-icon, .whatsapp-icon {
                display: block;
                @include w-h(48, 48);
                @include margin-r(8);
                background-size: cover;
            }
            .telegram-icon {
                background-image: url('../images/telegram.png');
            }
            .whatsapp-icon {
                background-image: url('../images/whatsapp.png');
            }
            .call {
                @include width(174);
                @include margin-l(30);
                p {
                    @include font-size(15);
                    color: $gold;
                    font-family: Roboto;
                }
                a {
                    color: $grey;
                    text-decoration: none;
                }
            }

        }
    }
        
    .navigation {
        @include w-h(1318, 44);
        display: flex;
        justify-content: space-between;

        %menu-item {
            display: block;
            color: $black;
            @include font-size(16);
            font-weight: 400;
            padding: 0 10px;
        }
        .menu-item-active {
            @extend %menu-item;
            color: $gold;
            border-bottom: 1px solid $gold;
        }
    }
}

.mobile-header {
    width: 100%;
    height: fit-content;
    border: 1px solid $light-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.4%;
    color: white;

    .img-wrapper {
        width: 33.88vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .menu {
            width: 6.66vw;
            @include height(24);
            background-image: url('../images/menu.png');
            background-size: cover;
            margin-right: 5.27vw;
        }
        .mobile-logo {
            display: block;
            width: 21vw;
            @include height(40);
            background-image: url('../images/header_logo.png');
            background-size: cover;
        }
    }
}
</style>