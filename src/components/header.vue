<template>
    <header v-if="width>=600" class="head-wrapper">
        <section class="logo-and-info">
            <img class="logo" alt="Hotel Stavropol" src='../images/header_logo.png'>
            <address class="info">
                <img src="../images/Map_Pin.png" alt="map-pin" class="pin">
                <p class="addres">г. Ставрополь <br>ул. Пушкина 272</p>
                <img class="messenger-icon" alt="telegram icon" src="../images/telegram.png">
                <img class="messenger-icon" alt="whatsapp icon" src="../images/whatsapp.png">
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
            <img alt="Open Menu" src="../images/menu.png" class="menu">
            <img alt="Site logo" src="../images/header_logo.png" class="mobile-logo">
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
        @extend %flex-space-between;
        @include margin(12, 0, 32, 0);

        .logo {
        @include w-h(108.62, 56);
        }
        .info {
            @include font-size(20);
            @include width(604);
            display: flex;
            align-items: center;
            font-style: normal;

            .pin {
                @include width(24);
                @include margin-r(20);
            }
            .addres {
                @include width(200);
                @include margin-r(48);
            }
            
            .messenger-icon {
                @include width(48);
                @include margin-r(8);
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
        width: 32%;
        display: flex;
        justify-content: space-between;
        
        .menu {
            width: 15.5%;
            object-fit: contain;
        }
        .mobile-logo {
            width: 68.6%;
            object-fit: contain;
        }
    }
}
</style>