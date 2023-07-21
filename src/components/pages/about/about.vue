<template>
    <main class="main-wrapper">
      <section class="price">
        <h2 class="second-title">Рассчитайте стоимость вашего банкета</h2>
        <div class="price-wrapper">
          <h3 class="quiz-title">Ответьте на 5 вопросов и получите горку из шампанского в подарок</h3>
          <Quiz v-if="width>600 || isquizStarted" 
            :question="questions[currentIndex]" 
            :index="currentIndex"
            :width="width" 
            @incr="increase" 
            @decr="decrease"
            @setIndexZero="setIndexZero"
          ></Quiz>
          <article v-if="!isquizStarted || width>600" class="promotion">
            <GoldButton v-if="width<=600" name="Начать &ensp;&ensp;&#10230;" :onClick="setQuizStart"></GoldButton>
            <img class="promotion-image" alt="Bottle of promotion" src="../../../images/bottle.png">
          </article>
        </div>
      </section>

      <section class="schemes">
        <h2 class="second-title">Схемы залов</h2>
        <div class="tabs-wrapper">
          <div class="tabs">
            <button :class="isFirstHall?'tab-active':'tab-inactive'" @click="setFirstHall">Зал Первый</button>
            <button :class="isFirstHall?'tab-inactive':'tab-active'" @click="setSecondHall">Зал Второй</button>
          </div>
          <Hall :hall="isFirstHall? halls[0]: halls[1]" :width="width"></Hall> 
        </div>
      </section>
    </main>
</template>

<script>
    import Quiz from './quiz.vue';
    import Hall from './hall.vue';
    import GoldButton from '../../ui/goldButton.vue';
    
    export default {
        components: {
            Quiz,
            Hall,
            GoldButton
        },
        props: ['width'],
        data: () => ({
            questions: [
                ['Количество гостей', '5-30', '30-60', '60-80', '80-100' , '100-120'],
                ['Вопрос 2', 'ответ1', 'ответ2', 'ответ3', 'ответ4' , 'ответ5'],
                ['Вопрос 3', 'ответ6', 'ответ7', 'ответ8', 'ответ9' , 'ответ10'],
                ['Вопрос 4', 'ответ11', 'ответ12', 'ответ13', 'ответ14' , 'ответ15'],
                ['Вопрос 5', 'ответ16', 'ответ17', 'ответ18', 'ответ19' , 'ответ20'],
                ['Спасибо за ваши ответы!']
            ], 
            halls: [
                {
                    description: 'Просторный зал с панорамным видом на город', 
                    square: '160 кв. метров', 
                    peopleAmount: 'до 100 человек', 
                    buffet: 'до 200 человек'
                },
                {
                    description: 'Уютный зал для небольшой компании', 
                    square: '90 кв. метров', 
                    peopleAmount: 'до 50 человек', 
                    buffet: 'до 80 человек'
                },
            ],
            currentIndex: 0,
            isFirstHall: true,
            isquizStarted: false
        }),
        methods: {
            increase() {
                this.currentIndex+=1
            },
            decrease() {
                this.currentIndex-=1
            },
            setFirstHall() {
                this.isFirstHall=true;
            },
            setSecondHall() {
                this.isFirstHall=false;
            },
            setQuizStart() {
                this.isquizStarted=true;
            },
            setIndexZero() {
                setTimeout(()=> {
                    this.currentIndex=0
                }, 3000)
            }
        },
    }
    
</script>

<style lang="scss">
    @import '../../../assets/variables-mixins.scss';
    @import '../../../assets/fonts.scss';
    
#app {


    main {
      flex-grow: 1;
    }

    .second-title {
      line-height: 100%;
      font-family: P052;
      @include font-size(40);
      font-weight: 700;
      @include margin(24, 0, 13, 0);
      padding: 0.2vw
    }
    
    .price {
      @include width(1588);
      @include margin-b(32);

      .price-wrapper {
        display: flex;
        justify-content: space-between;
        font-family: Lato;
        position: relative;

        .quiz-title {
          position: absolute;
          z-index: 1;
          font-family: Lato;
          @include width(500);
          height: fit-content;
          @include font-size(24);
          bottom: 1.6vw;
          left: 51vw;
          font-weight: 400;
        }

        .promotion {
          @include w-h(650, 369);
          background-image: url('../../../images/bottle-back.png');
          background-size: cover;
          border-radius: 1rem;
          position: relative;
          color: white;

          .promotion-image {
            @include w-h(292, 399);
            position: absolute;
            z-index: 1;
            top: -1.56vw;
            left: 18.64vw;
          }
        }
      }

    }

    .schemes {
      @include width(1588);
      @include margin-b(32);

      .tabs-wrapper {
        @include width(1588);

        .tabs {
          %tab {
            padding: 0.83vw 1.66vw;
            font-family: Roboto;
            @include font-size(15px);
            border-radius: 0.83vw 0.83vw 0 0;
            line-height: 100%;
            margin-right: 2px;
          }
          .tab-active {
            @extend %tab;
            color: $black;
            background-color: $light-grey;
          }
          .tab-inactive {
            @extend %tab;
            color: $dark-text;
            background-color: $platinum;
          }
        }
        

        .tab-content {
          @include w-h(1588, 492);
          background-color: $light-grey;
          border-radius: 0px 1rem 1rem 1rem;
          display: flex;
          align-items: center;
        }
      }
    }
  } 

  @media (min-width: 601px) and (max-width: 960px) {
    #app {
      .main-wrapper {
        width: 96vw;

        .price {
          width: 100%;

          .price-wrapper {
            width: 100%;

            .quiz-title {
              left: 59vw;
              bottom: 2vw;
            }

            .promotion {
              @include tablet-w-h(376, 213);
              
              .promotion-image {
                @include tablet-w-h(169, 231);
                top: -1.87vw;
                left: 21.56vw;
              }

            }
          }
        }

        .schemes {
          width: 100%;

          .tabs-wrapper {
            width: 100%;
          }
        }
      }
    }
  }

  

  @media (max-width: 600px) {
    #app {

    .second-title {
      font-size: 20px;
      width: 91%;
      height: fit-content;
      margin: 24px 0 0 4.4%;
      line-height: 28px;
    }
    main {
      width: 100%;

      .price {
        width: 100%;

      .price-wrapper {
        width: 100%;
        height: fit-content;

        .quiz-title {
            width: 91%;
            height: fit-content;
            top: 0;
            left: 0;
            font-size: 14px;
            margin-left: 4.4%;
            line-height: 20px;
          }

        .promotion {
          width: 100%;
          overflow: visible;
          @include height(280);
          margin-top: 60px;
          padding: 53vw 0 0 4.4%;

          .promotion-image {
            width: 59.7%;
            top: -15px;
            left: 40.2%;
            @include height(295);
          }
        }
      }

    }
    %flex-align-center {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .schemes {
      width: 100%;
      @include height(720);
      @extend %flex-align-center;

      .second-title {
        font-size: 5.55vw;
        line-height: 7.77vw;
        width: fit-content;
        margin-bottom: 4.44vw;
      }
      .tabs-wrapper {
        width: 100%;
        @include height(676);

        .tabs {
          display: flex;
          justify-content: center;

          %tab-m {
            width: 41.6vw;
            @include height(52);
            font-size: 4.16vw;
            border-radius:  4.44vw 4.44vw 0 0;
          }
          .tab-active, .tab-inactive {
            @extend %tab-m;
          }
        }
      }
    }
    }
  }
}
</style>