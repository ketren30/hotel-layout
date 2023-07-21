<template>
    <button class="white-button" @click="onClick">{{ name }}</button>
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
    .white-button {
        background-color: white;
        padding: 0.8vw 1.6vw;
        color: $gold;
        font-family: Roboto;
        @include font-size(15);
        border-radius: 0.25rem;
        position: relative;
        border: 2px solid $gold;
    }
    @media (min-width: 601px) and (max-width: 960px) {
        .white-button {
            padding: 1vw 2vw;
        }
    }
    @media (max-width: 600px) {
        .white-button {
            font-size: 15px;
            border-radius: 4px;
            padding: 4.44vw 8.88vw;
        }
    }
</style>