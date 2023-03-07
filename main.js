const { createApp } = Vue

createApp({
    data() {
        return {
            memes: [],
            searchTerm: "",
            loaded: false,
            loadedImgs: 0,
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
        loadcounter() {
            console.log(this.loadedImgs);
            this.loadedImgs += 1;
            if (this.loadedImgs >= this.memes.length){
                this.loaded = true;
            }
        }
    },
    mounted() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                this.memes = data.data.memes;
                this.resultCount = data.data.memes.length;
            }
            )
    }
}).mount('#app')