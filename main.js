const { createApp } = Vue

createApp({
    data() {
        return {
            memes: [],
            searchTerm: ""
        }
    },
    computed: {
        filteredMemes() {
            return this.memes.filter(m => m.name.toLowerCase().includes(this.searchTerm.toLowerCase()) )
        }
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