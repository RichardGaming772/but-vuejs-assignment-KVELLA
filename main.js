const { createApp } = Vue

createApp({
    data() {
        return {
            memes: [],
            message: 'Hello Vue!'
        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {
        fetch("resources/light/data.json")
        .then(res => res.json())
        .then(data => {
          this.memes = data
        })
    }
}).mount('#app')