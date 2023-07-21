<template>
    <button class="gold-btn" @click="onClick" type="button">{{ name }}</button>
</template>

<script>
export default {
  props: ['name', 'onClick', 'height'],  
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
    @import '../../assets/variables-mixins.scss';
    @import '../../assets/fonts.scss';

    .gold-btn {
        background-color: $gold;
        color: white;
        padding: 0.8vw 1.6vw;
        font-family: Roboto;
        @include font-size(15);
        border-radius: 0.25rem;
        position: relative;
    }
    @media (min-width: 601px) and (max-width: 960px) {
        .gold-btn {
            padding: 1vw 2vw;
        }
    }
    @media (max-width: 600px) {
        .gold-btn {
            font-size: 15px;
            border-radius: 4px;
            padding: 4.44vw 8.88vw;
        }
    }
</style>