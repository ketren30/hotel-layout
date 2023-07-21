<template>
    <header v-if="width>600" class="head-wrapper">
        <section class="logo-and-info">
            <a  href='' class="logo"></a>
            <address class="info">
                <p class="address">г. Ставрополь <br>ул. Пушкина 272</p>
                <a href='' class="header-icon">
                    <img src="../images/tg.svg">
                </a>
                <a href='' class="header-icon" >
                    <img src="../images/wa.svg" >
                </a>
                <div class="call">
                    <a href="tel: +7123456789">+7 (123) 45-67-89</a>
                    <p>Перезвоните мне</p>
                </div>    
            </address>
        </section>

        <nav class="navigation">
            <router-link to='/hotel-layout/count-price' class="menu-item">Рассчёт стоимости</router-link>
            <router-link to='/hotel-layout/' class="menu-item">О нас</router-link>
            <router-link to='/hotel-layout/registration' class="menu-item">Выездная регистрация</router-link>
            <router-link to='/hotel-layout/schemes' class="menu-item">Схемы залов</router-link>
            <router-link to='/hotel-layout/menu' class="menu-item">Меню</router-link>
            <router-link to='/hotel-layout/gallery' class="menu-item">Галерея</router-link>
            <router-link to='/hotel-layout/reviews' class="menu-item">Отзывы</router-link>
            <router-link to='/hotel-layout/contacts' class="menu-item">Контакты</router-link>
        </nav>
    </header> 
    
    <header v-if="width<=600" class="mobile-header">
        <div v-if="isMobileMenu && width<600" @click="closeMobileMenu" class="overley">
            <nav class="mobile-menu" @click.stop>
                <button @click="closeMobileMenu" class="close"></button>
                <router-link to='/hotel-layout/count-price' class="menu-item" @click="closeMobileMenu">Рассчёт стоимости</router-link>
                <router-link to='/hotel-layout/' class="menu-item" @click="closeMobileMenu">О нас</router-link>
                <router-link to='/hotel-layout/registration' class="menu-item" @click="closeMobileMenu">Выездная регистрация</router-link>
                <router-link to='/hotel-layout/schemes' class="menu-item" @click="closeMobileMenu">Схемы залов</router-link>
                <router-link to='/hotel-layout/menu' class="menu-item" @click="closeMobileMenu">Меню</router-link>
                <router-link to='/hotel-layout/gallery' class="menu-item" @click="closeMobileMenu">Галерея</router-link>
                <router-link to='/hotel-layout/reviews' class="menu-item" @click="closeMobileMenu">Отзывы</router-link>
                <router-link to='/hotel-layout/contacts' class="menu-item" @click="closeMobileMenu">Контакты</router-link>
                
            </nav>
        </div>
        <div class="img-wrapper">
            <button type="button" @click="openMobileMenu" class="menu">&equiv;</button>
            <a  href='' class="mobile-logo"></a>
        </div>
        <GoldButton name="Позвонить" height="36"></GoldButton>
    </header>   
</template>

<script>
import GoldButton from '../components/ui/goldButton.vue'
    export default {
        props: ['width'],
        components: {
            GoldButton
        },
        data() {
            return {
                isMobileMenu: false
            }
        },
        methods: {
            openMobileMenu() {
                this.isMobileMenu=true
            },
            closeMobileMenu() {
                this.isMobileMenu=false
            }
        }
    }

</script>

<style lang="scss">
@import '../assets/variables-mixins.scss';
@import '../assets/fonts.scss';

.head-wrapper {
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid $light-grey;
    border-radius: 0 0 1rem 1rem;
    font-family: Lato;
    padding: 0 8.5vw;

    .logo-and-info {
        width: 100%;
        @include margin(12, 0, 32, 0);
        display: flex;
        justify-content: space-between;

        .logo {
            @include w-h(108.62, 56);
            background-image: url(../images/header_logo.png);
            background-size: cover;
        }
        .info {
            @include font-size(20);
            display: flex;
            align-items: center;
            font-style: normal;

            
            .address {
                @include margin-r(48);
                position: relative;
                padding-right: 3vw;
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
            
            .header-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                @include w-h(48, 48);
                @include margin-r(8);
                background-color: $gold;
                border-radius: 0.3vw;

                img {
                    @include w-h(24,24);
                }
            }
            .call {
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
        @include width(1318);
        display: flex;
        justify-content: space-between;

        %menu {
            text-decoration: none;
            display: block;
            color: $black;
            @include font-size(16);
            font-weight: 400;
            padding: 0.31vw 10px;
        }
        .menu-item {
            @extend %menu;
        }
        .menu-item-active {
            @extend %menu;
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

    .gold-btn {
        padding: 2.22vw 4.44vw;
    }

    .overley {
        .mobile-menu {
            width: fit-content;
            height: fit-content;
            background-color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            border-radius: 0 10px 10px 10px;

            %menu {
                @include font-size(20);
                text-decoration: none;
                display: block;
                color: $black;
                padding: 0 10px;
            }
            .menu-item {
                @extend %menu;
            }
            .menu-item:hover {
                color: $gold;
            }
            .close {
                background-image: url('../images/close.png');
                background-size: cover;
                width: 20px;
                height: 20px;
                margin-left: calc(100% - 20px);
            }
        }
    }

    .img-wrapper {
        width: 33.88vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .menu {
            width: 6.66vw;
            padding-bottom: 14;
            color: $gold;
            background-size: cover;
            margin-right: 5.27vw;
            font-size: 24px;
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

@media (min-width: 601px) and (max-width: 960px) {
    .head-wrapper {
        padding: 0 2vw;

        .navigation {
            width: 95%;

            .menu-item, .menu-item-active {
                @include font-size(18);
                padding: 0.31vw 5px 7px 5px;
            }
        }
    }
    
}
</style>