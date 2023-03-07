const { createApp } = Vue

createApp({
    data() {
        return {
            memes: [],
            searchTerm: "",
            resultCount: 0
        }
    },
    computed: {
        filteredMemes() {
            filtered = this.memes.filter(m => m.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
            this.resultCount = filtered.length;
            return filtered;
        }
    },
    methods: {

    },
    mounted() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                this.memes = data.data.memes;
                this.resultCount = data.data.memes.length;
            })
    }
}).mount('#app')