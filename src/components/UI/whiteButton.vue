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
        height: 3.25rem;
        padding: 0 1.5rem 0 2rem;
        color: $gold;
        font-family: Roboto;
        @include font-size(15);
        border-radius: 0.25rem;
        margin-right: 10px;
        position: relative;
        border: 2px solid $gold;
    }

    @media (max-width: 600px) {
        .white-button {
            font-size: 15px;
            height: 36px;
            border-radius: 4px;
            padding: 0 16px;
            margin-right: 0;
        }
    }
</style>