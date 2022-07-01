export default {
    template: `
        <header class="mail-header">
            <div class="logo">
                <h3>Email M</h3>
            </div>
            <input type="text" @input="filter" v-model="txt" placeholder="search by mail fullName" /> 
        </header>
    `,
     data() {
        return {
            txt: '',
        }
    },
    methods: {
        filter(){
            this.$emit('filtered', 'txt' ,this.txt)
        }
    },
}