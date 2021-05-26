<template>
  <div class="panel">
    <div class="result" style="grid-area: result">
      {{ equation }}
    </div>

    <button style="grid-area: ac" @click="clear">AC</button>
    <button style="grid-area: plus-minus" @click="calToggle">±</button>
    <button style="grid-area: percent" @click="calPercentage">%</button>
    <button style="grid-area: add" @click="append('+')">+</button>
    <button style="grid-area: subtract" @click="append('-')">-</button>
    <button style="grid-area: multiply" @click="append('×')">×</button>
    <button style="grid-area: divide" @click="append('÷')">÷</button>
    <button style="grid-area: equal" @click="calculate">=</button>

    <button style="grid-area: number-1" @click="append('1')">1</button>
    <button style="grid-area: number-2" @click="append('2')">2</button>
    <button style="grid-area: number-3" @click="append('3')">3</button>
    <button style="grid-area: number-4" @click="append('4')">4</button>
    <button style="grid-area: number-5" @click="append('5')">5</button>
    <button style="grid-area: number-6" @click="append('6')">6</button>
    <button style="grid-area: number-7" @click="append('7')">7</button>
    <button style="grid-area: number-8" @click="append('8')">8</button>
    <button style="grid-area: number-9" @click="append('9')">9</button>
    <button style="grid-area: number-0" @click="append('0')">0</button>
    <button style="grid-area: dot" @click="append('.')">.</button>
  </div>
</template>

<script>
  import { defineComponent, reactive, computed, toRefs } from "vue";

  export default defineComponent({
    name: "calculator",
    setup() {
      const state = reactive({
        equation: 0,
        history: "",
        isDecimalAdded: false,
        isOperatorAdded: false,
        isStarted: false,
      });

      const append = (character) => {};
      const clear = () => {
        state.equation = 0;
        state.history = "";
        state.isDecimalAdded = false;
        state.isOperatorAdded = false;
        state.isStarted = false;
      };
      const calToggle = () => {};
      const calPercentage = () => {};
      const calculate = () => {};

      return {
        ...toRefs(state),
        clear,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .panel {
    --button-width: 80px;
    --button-height: 80px;

    display: grid;
    grid-template-areas:
      "result result result result"
      "ac plus-minus percent divide"
      "number-7 number-8 number-9 multiply"
      "number-4 number-5 number-6 subtract"
      "number-1 number-2 number-3 add"
      "number-0 number-0 dot equal";
    grid-template-columns: repeat(4, var(--button-width));
    grid-template-rows: repeat(6, var(--button-height));

    padding: 24px;
    box-sizing: border-box;
    border-radius: calc(var(--button-height) / 2);
    box-shadow: -3px -3px 7px -2px rgba(255, 255, 255, 1),
      2px 2px 10px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .result {
      text-align: right;
      line-height: var(--button-height);
      font-size: 48px;
      font-family: Helvetica;
      padding: 0 20px;
      color: #666;
    }

    button {
      display: block;
      margin: 8px;
      padding: 0;
      border: 0;
      outline: none;
      border-radius: calc(var(--button-height) / 2);
      font-size: 24px;
      font-family: Helvetica;
      font-weight: normal;
      color: #999;
      background-color: unset;
      box-shadow: -1px -1px 5px 1px rgba(255, 255, 255, 1),
        1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    }

    button:hover {
      cursor: pointer;
      background: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.4)
      );
    }

    button:active {
      cursor: pointer;
      background: linear-gradient(
        145deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.4)
      );
      box-shadow: -1px -1px 5px 1px rgba(255, 255, 255, 1),
        1px 1px 5px 1px rgba(0, 0, 0, 0.1),
        inset 4px 4px 15px 5px rgba(0, 0, 0, 0.04),
        inset -4px -4px 15px 2px rgba(255, 255, 255, 0.2);
    }
  }
</style>