<template>
    <img  v-if="img" :src="img" alt="bg">
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input type="text" placeholder="Hazme una pregunta" v-model="question">
        <p>Recuerda terminar con un signo de interrogacion (?)</p>
        <div v-if="isValidQuestion">
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Indecision',

    data() {
        return {
            question: undefined,
            answer: undefined,
            img: undefined,
            isValidQuestion: false,
        }
    },

    watch: {
        question(value) {

            this.isValidQuestion = false;

            console.log({value});

            if ( !value.includes('?')) return;

            this.getAnswer();
        }
    },

    methods: {
        async getAnswer() {
            try {
                this.answer = 'Pensando...'
                const { answer, image } = await fetch('https://yesno.wtf/api').then( r => r.json() )
    
                this.answer = answer === 'yes' ? 'Si!' : 'No!'
                this.img = image

                this.isValidQuestion = true;
                
            } catch (error) {
                console.log('IndecisionComponent: ', error )
                this.answer = 'No se pudo cargar del API'
                this.img    = null
            }        
        },
    },
}
</script>

<style scoped>
img,
.bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 10px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}

img {
    height: 100vh;
    left: 0;
    object-fit: cover;
    position: fixed;
    top: 0;
    width: 100vw;
}
</style>