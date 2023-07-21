<template>
    <section class="quiz">
        <p class="question-number" v-if="index!==5">Вопрос {{ index+1 }} из 5</p>
        <v-progress-linear v-if="index!==5"
            class="w-90"
            :model-value="(index+1)*20" 
            bg-color="white" 
            color="#C6AF66"
        ></v-progress-linear>
        
        <p class="question">{{ question[0] }}</p>

        <div class="radio-wrapper">
            <div class="radio" v-for="(answer, ind) in question.slice(1,6)">
                <input  
                    class="custom-radio" 
                    type="radio" 
                    :id="ind"
                    name="answers"
                    :value="answer"   
                >
                <label :for="ind">{{ answer }}</label>
                
            </div>
        </div>
        <div class="splitter" v-if="index<5"> </div>
        <div class="buttons">
            <GoldButton v-if="index>0 & index<5" @click="decrease" name="&#10229; &ensp;&ensp;Назад"></GoldButton>
            <GoldButton v-if="index<4 && width>600"  :onClick="increase" name='Следующий вопрос &ensp;&ensp;&#10230;'></GoldButton>
            <GoldButton v-if="index<4 && width<=600"  :onClick="increase" name='Далее &ensp;&ensp;&#10230;'></GoldButton>
            <GoldButton v-if="index==4" @click="submit" name="Отправить"></GoldButton>
        </div>
    </section>   

</template>

<script>
import GoldButton from '../../ui/goldButton.vue'
export default {
    props: ['question', 'index', 'width'],
    components: {
        GoldButton
    },
    data() {
        return {
        }
    },
    methods: {
        decrease: function() {
            this.$emit('decr')
        },
        increase: function() {
            this.$emit('incr')
        },
        submit: function() {
            this.$emit('incr')
            this.$emit('setIndexZero')
        }

    }
}

</script>

<style lang="scss">
    @import '../../../assets/variables-mixins.scss';
    @import '../../../assets/fonts.scss';

    .quiz {
        @include w-h(918, 369);
        background-color: $light-grey;
        border-radius: 1rem;
        font-family: Lato;
        padding: 1.66vw 2vw;

        .question-number {
            @include font-size(16);
            padding: 0.31vw 0;
            line-height: 100%;
            @include margin-b(8);
        }
        
        .question {
            padding: 0.2vw 0;
            @include font-size(24);
            @include margin(30, 0, 22, 0);
        }

        .radio-wrapper {
            display: flex;
            justify-content: space-between;

            .radio {
                border-radius: 0.25rem;
                background-color: white;
                padding: 0.62vw 1.66vw 0.62vw 0.62vw;

                .custom-radio {
                    position: absolute;
                    z-index: -1;
                    opacity: 0;
                }
                .custom-radio+label {
                    display: inline-flex;
                    align-items: center;
                    user-select: none;
                    @include font-size(16);
                }
                .custom-radio+label::before {
                    content: '';
                    display: inline-block;
                    width: 1rem;
                    height: 1rem;
                    flex-shrink: 0;
                    flex-grow: 0;
                    border: 1px solid $radio;
                    border-radius: 50%;
                    margin-right: 0.5em;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: 50% 50%;
                    margin-right: 1rem;
                }
                .custom-radio:not(:disabled):not(:checked)+label:hover::before {
                    border-color: $ver-203;
                }
                .custom-radio:checked+label::before {
                    background-image: url("../../../images/radio-checked.png");
                    background-size: cover;
                    border: none;
                }
            }
            .radio:has(.custom-radio:checked) {
                border: 1px solid $gold;
                box-shadow: 0px 8px 16px 0px #2223241A;
            }
        }
        .splitter {
            @include width(918);
            height: 2px;
            background: linear-gradient(white, $platinum);
            @include margin(35, 0, 25, -40);
        }
        .answers-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0;
            margin: 0;


            .answer {
                padding: 0.75rem 2rem 0.75rem 0.75rem;
                background-color: white;
                @include font-size(16);
                border-radius: 0.25rem;
                color: $dark-text;
            }
            .answer:checked {
                border: 1px solid $gold;
            }
        }
        
        .buttons button:first-of-type {
            margin-right: 1vw;
        }
        
    }

    @media (min-width: 601px) and (max-width: 960px) {
        .quiz{
            width: 55vw;
            height: 22vw;
        }
        
    }

    @media (max-width: 600px) {
        .quiz {
            margin-top: 16.66vw;
            width: 100%;
            height: 106vw;
            border-radius: 4.4vw;
            padding: 8.05vw 4.4vw;

            .question-number {
                font-size: 3.88vw;
                width: fit-content;
                margin-bottom: 4.4vw;
                line-height: 5.55vw;
                height: fit-content;
            }

            .question {
                font-size: 4.4vw;
                line-height: 7.77vw;
                margin: 6.66vw 0 4.4vw 0;
                height: fit-content;
                width: 90vw;
            }

            .radio-wrapper {
                height: 31.12vw;
                flex-wrap: wrap;
                justify-content: start;
                width: 90vw;
                align-content: space-between;

                .radio {
                    height: 13.33vw;
                    padding: 0 4.44vw 0 2.22vw;
                    margin-right: 2.22vw;
                    border-radius: 1.11vw;

                    .custom-radio+label {
                        font-size: 3.88vw;
                        height: 100%;
                    }
                    .custom-radio+label::before {
                        width: 4.44vw;
                        height: 4.44vw;
                        margin-right: 3.33vw;
                    }
                }
            }

            .splitter {
                width: 102vw;
                margin: 6.66vw 0  6.66vw -5vw;
            }
            .buttons {
                display: flex;

                .next  {
                    @include next-template();
                    width: 59vw;
                    margin: 0 2.22vw;
                }
                .next::after {
                    @include next-template-after();
                }
                .prev {
                    @include next-template;
                    width: 30vw;
                    padding: 0 4vw 0 12vw;
                }
                .prev::before {
                    width: 6vw;
                    height: 6vw;
                    top: 3.8vw;
                    left: 4vw;
                }
                .submit {
                    @include next-template;
                    width: 33vw;
                    margin: 0 2.22vw;
                }
            }
            
        }
    }

</style>