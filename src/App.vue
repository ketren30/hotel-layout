<template>
    <Header :width="width"></Header>
    <main>
      <section class="price">
        <h2 class="second-header">Рассчитайте стоимость вашего банкета</h2>
        <div class="flex-space-between">
          <h3 class="moving-text">Ответьте на 5 вопросов и получите горку из шампанского в подарок</h3>
          <Quiz v-if="width>=600 || isquizStarted" 
            :question="questions[currentIndex]" 
            :index="currentIndex" 
            @incr="increase" 
            @decr="decrease"
          ></Quiz>
          <article v-if="!isquizStarted || width>=600" class="сhampagne">
            <NextButton v-if="width<600" name="Начать" :onClick="setQuizStart"></NextButton>
            <img class="absolute" alt="Bottle of сhampagne" src="./images/bottle.png">
          </article>
        </div>
      </section>

      <section class="schemes">
        <h2 class="second-header">Схемы залов</h2>
        <div class="tabs-wrapper">
          <div class="tabs">
            <button :class="isFirstHall?'tab-active':'tab-inactive'" @click="setFirstHall">Зал Первый</button>
            <button :class="isFirstHall?'tab-inactive':'tab-active'" @click="setSecondHall">Зал Второй</button>
          </div>
          <Hall :hall="isFirstHall? halls[0]: halls[1]" :width="width"></Hall> 
        </div>
      </section>
    </main>
    <Footer :width="width"></Footer>
  
</template>

<script>
import Header from './components/header.vue';
import Quiz from './components/quiz.vue';
import Hall from './components/hall.vue';
import NextButton from './components/UI/nextButton.vue';
import Footer from './components/footer.vue';
const elem=document.getElementById('html');

export default {
  name: 'App',
  components: {
    Header,
    Quiz,
    Hall,
    Footer,
    NextButton
  },
  data: () => ({
    width: 0,
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
    onResize() {
      this.width=window.innerWidth
      elem.style.fontSize=`${this.width/1920*16}px`;
    },
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
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize();
  },
  onUpdated() {
    window.addEventListener('resize', this.onResize)
  }
  
}
</script>

<style lang="scss">
  @import "./assets/variables-mixins.scss";
  @import './assets/fonts.scss';

  #app {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    main {
      flex-grow: 1;
    }

    .second-header {
      @include w-h(784, 48);
      line-height: 100%;
      font-family: P052;
      @include font-size(40);
      font-weight: 700;
      @include margin(24, 0, 13, 0)
    }
    
    .price {
      @include w-h(1588, 430);
      @include margin-b(32);

      .flex-space-between {
        @extend %flex-space-between;
        @include w-h(1588, 430);
        font-family: Lato;
        position: relative;

        .moving-text {
          position: absolute;
          z-index: 1;
          font-family: Lato;
          @include w-h(476, 64);
          @include font-size(24);
          top: 17rem;
          left: 61.12rem;
          font-weight: 400;
        }

      
        .сhampagne {
          @include w-h(650, 369);
          background-image: url('./images/bottle-back.png');
          background-size: cover;
          border-radius: 1rem;
          position: relative;
          color: white;

          .absolute {
            @include w-h(292, 399);
            position: absolute;
            z-index: 1;
            top: -1.875rem;
            left: 22.375rem;
          }
        }
      }

    }

    .schemes {
      @include w-h(1588, 608);
      @include margin-b(32);

      .tabs-wrapper {
        @include w-h(1588, 544);

        .tabs {
          %tab {
            @include w-h(150, 52);
            font-family: Roboto;
            @include font-size(15px);
            border-radius: 1rem 1rem 0px 0px;
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
        }
      }
    }
  }

  @media (max-width: 600px) {
    #app {

    .second-header {
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
      @include height(404);

      .flex-space-between {
        width: 100%;
        height: fit-content;

        .moving-text {
            width: 91%;
            height: fit-content;
            top: 0;
            left: 0;
            font-size: 14px;
            margin-left: 4.4%;
            line-height: 20px;
          }

        .сhampagne {
          width: 100%;
          overflow: visible;
          @include height(280);
          margin-top: 60px;
          padding: 53vw 0 0 4.4%;

          .absolute {
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

      .second-header {
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

        

        .tab-content {
            width: 100%;
            @include height(624);
            flex-direction: column;
            align-items: center;
            justify-content: start;
            margin-bottom: 6.66vw;
            border-radius: 4.44vw;

            .plan {
              width: 32.7%;
              @include height(208);
              margin: 4.44vw 0;
            }
            .description {
              width: 91%;
              height: 100vw;
              border-radius: 4.44vw;
              box-shadow: 0px 2.22vw 4.44vw 0px #2223241A;
              background-color: white;

              .third-header {
                font-size: 5.55vw;
                line-height: 7.7vw;
                width: 82.2vw;
                height: fit-content;
                margin-top: 6.66vw;
              }

              .info {
                width: 82.2vw;
                height: 26.6vw;
                grid-template-columns: 38.88vw 43.33vw;
                grid-template-rows: 8.33vw 10.55vw 8.33vw;
                margin-top: 4.44vw;

                .criterias, .values {
                  font-size: 3.88vw;
                }
                .criterias:nth-child(1), .values:nth-child(2) {
                  align-items: start;
                }
                .criterias:nth-child(5), :nth-child(6) {
                  align-items: end;
                }
              }

              .buttons {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin: 6.66vw 0 0 0;
                @include height(120);
                width: 82vw;
                align-self: center;

                .gold-button, .white-button {
                  height: 14.44vw;
                  width: 100%;
                }
              }
            }
        }
      }
      }
    }
  }
}
    
  
</style>
