<template>
    <input class="gold-button" @click="onClick" type="button" :value="name" :style="styleObj">
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

    .gold-button {
        background-color: $gold;
        color: white;
        height: 3.25rem;
        padding: 0 1.5rem 0 2rem;
        font-family: Roboto;
        @include font-size(15);
        border-radius: 0.25rem;
        margin-right: 10px;
        position: relative;
    }

    @media (max-width: 600px) {
        .gold-button {
            font-size: 15px;
            border-radius: 4px;
            padding: 0 16px;
            margin-right: 0;
            height: 10vw;
        }
    }
</style>