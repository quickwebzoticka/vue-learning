export default {
    data() {
        return {
            searchName: '',
            names: ['Andrey', 'Valeriia', 'Grisha', 'Liza']
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    },
}