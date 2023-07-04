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
            <button v-if="index>0 & index<5" @click="decrease" class="prev">Назад</button>
            <NextButton v-if="index<4" :onClick="increase" name='Следующий вопрос'></NextButton>
            <button v-if="index==4" @click="submit" class="submit">Отправить</button>
        </div>
    </section>   

</template>

<script>
import NextButton from './UI/nextButton.vue'
export default {
    props: ['question', 'index'],
    components: {
        NextButton
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
    @import '../assets/variables-mixins.scss';
    @import '../assets/fonts.scss';

    .quiz {
        @include w-h(918, 369);
        background-color: $light-grey;
        border-radius: 1rem;
        font-family: Lato;
        padding:0 2.5rem 0 2.5rem;

        .question-number {
            @include font-size(16);
            @include w-h(102, 28);
            line-height: 100%;
            @include margin(32, 0, 8, 0);
        }
        
        .question {
            @include w-h(324, 32);
            @include font-size(24);
            @include margin(32, 0, 24, 0);
        }

        .radio-wrapper {
            @include w-h(721, 52);
            display: flex;
            justify-content: space-between;

            .radio {
                height: 3.25rem;
                border-radius: 0.25rem;
                background-color: white;
                padding: 0.75rem 2rem 0.75rem 0.75rem;

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
                    background-image: url("../images/radio-checked.png");
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
            @include margin(41, 0, 31, -40);
        }
        .answers-wrapper {
            display: flex;
            justify-content: space-between;
            @include w-h(721, 52);
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
        
        .prev, .next, .submit {
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
        .prev {
            padding-left: 3rem;
        }
        .next {
            padding-right: 3rem;
        }
        .prev::before {
            content: '';
            @include w-h(24, 26);
            position: absolute;
            background-image: url('../images/arrow-l.png');
            background-size: cover;
            z-index: 1;
            top: 0.8rem;
            left: 0.5rem;
        }
        .next::after {
            content: '';
            @include w-h(24, 26);
            position: absolute;
            background-image: url('../images/arrow-r.png');
            background-size: cover;
            z-index: 1;
            top: 0.8rem;
            left: 11.3rem;
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