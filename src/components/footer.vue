<template>
    <footer class="footer-wrapper">
        <div class="logo-and-copyright">
            <a  href='' class="footer-logo"></a>
            <p v-if="width>=600" class="copyright">© Hotel Stavropol, 2020</p>
        </div>
        <div class="socials">
            <p>Мы в соц. сетях</p>
            <div class="inline-icons">
                <a href='' class="footer-icon">
                    <img src="../images/fb.svg">
                </a>
                <a href='' class="footer-icon">
                    <img src="../images/wa.svg">
                </a>
                <a href='' class="footer-icon">
                    <img src="../images/vk.svg">
                </a>
            </div>
        </div>
        <p v-if="width<600" class="copyright">© Hotel Stavropol, 2020</p>
    </footer>
</template>

<script>
export default {
    props: ['width'],
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    @import '../assets/variables-mixins.scss';
    @import '../assets/fonts.scss';

    .footer-wrapper {
        flex: 0 0 auto;
        width: 100%;
        height: 11vw;
        background-color: $grey;
        border-radius: 1.25rem 1.25rem 0 0;
        display: flex;
        justify-content: space-between;
        font-family: Lato;
        color: white;

        .logo-and-copyright {
            @include w-h(200, 137);
            @include margin(64, 0, 0, 66);
            @include font-size(14);

            .footer-logo {
                display: block;
                @include w-h(109, 56);
                @include margin-b(61);
                background-image: url('../images/footer-logo.png');
                background-size: cover;
            }
            .copyright {
                width: fit-content;
                word-wrap: none;
            }
        }

        .socials {
            @include w-h(216, 92);
            @include margin(48, 198, 0, 0);
            @include font-size(20);
            font-family: Lato;

            .inline-icons {
                @include w-h(216, 52);
                @include margin-t(16);
                display: flex;

                .footer-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    @include w-h(48, 48);
                    @include margin-r(20);
                    background-color: $ver-203;
                    border-radius: 0.8vw;

                    img {
                        @include w-h(24,24);
                    }
                }
            }
            
        }
    }

    @media (max-width: 600px) {
        #app {
            .footer-wrapper {
                width: 100%;
                @include height(328);
                flex-direction: column;
                padding: 11.11vw 0 0 10vw;
                align-items: start;
                justify-content: start;
                margin-top: 10vw;
                border-radius: 5.55vw 5.55vw 0 0;

                .logo-and-copyright {
                    @include width-height(30vw, 15.5vw);
                    margin: 0 0 11.11vw 0;

                    .footer-logo {
                        @include width-height(30vw, 15.5vw);
                    }
                }
                .socials {
                    @include width-height(54.4vw, 25.55vw);
                    font-size: 5.55vw;
                    font-family: Lato;
                    margin: 0 0 16.66vw 0;

                    .inline-icons {
                        @include width-height(54.44vw, 14.44vw);
                        margin: 4.44vw 0 0 0;

                        .footer-icon {
                            @include width-height(14.44vw, 14.44vw);
                            margin-right: 5.55vw;

                            img {
                                @include width-height(5.5vw, 5.5vw)
                            }
                        }
                    }
                }
                .copyright {
                    @include width-height(42vw, 5.55vw);
                    font-size: 3.88vw;
                    font-family: Lato;
                }
            }
        }
    }

</style>