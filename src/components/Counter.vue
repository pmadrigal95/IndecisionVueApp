<template>
  <h2>{{ customTitle }}</h2>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
    name: 'Counter',

    props: {
        title:{
            type: String,
        },

        start: {
            type: Number,
            // required: true,
            default: 1,
            validator( value ) {
                return value > 0;
            },
        },
    },

    data() {
        return {
            counter: this.start
        }
    },

    computed: {
        squareCounter() {
            return this.getSquareValue();
        },

        customTitle() {
            return this.title || 'Counter';
        }
    },

    methods: {

        getSquareValue() {
            return this.counter * this.counter;
        },

        increase() {

            this.counter++;
        },

        decrease() {
            this.counter--;
        }
    },
}
</script>

<style scoped>
    button {
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        background-color: #5AA67B;
        transition: 0.3 ease-in-out;
    }
</style>