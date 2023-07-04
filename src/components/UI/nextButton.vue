<template>
    <button class="next" @click="onClick" type="button">{{ name }}</button>
</template>

<script>

export default {
  props: ['name', 'onClick'],  
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/variables-mixins.scss';
    @import '../../assets/fonts.scss';

    .next {
        background-color: $gold;
        height: 3.25rem;
        padding: 0 1.5rem 0 2rem;
        color: white;
        font-family: Roboto;
        @include font-size(15);
        border-radius: 0.25rem;
        margin-right: 10px;
        position: relative;
    }
    .next::after {
        content: '';
        @include w-h(24, 26);
        position: absolute;
        background-image: url('../../images/arrow-r.png');
        background-size: cover;
        z-index: 1;
        top: 0.8rem;
        left: 11.3rem;
    }

    @media (max-width: 600px) {
            .next {
                @include next-template();
            }
            
            .next::after {
                @include next-template-after();
            }
    }
</style>