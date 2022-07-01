import { eventBus } from "../../../services/eventBus-service.js"

export default {
    props: ['text'],
    template: `
    <section class="mail-nav">
        <button class="add" @click="callBus"><span>&#43</span> New Email</button>
        <section class="buttons">
            <button @click="filter('')"><span>&#9744 </span>  All Emails</button>
            <button @click="filter('accepted')"><span>&#11166   </span>  Accepted</button>
            <button @click="filter('sent')"><span>&#11164   </span>  Sent</button>
            <button @click="filter('favored')"><span>&#9733   </span>  Favorites</button>
            <button @click="filter('read')"><span>&#9993   </span>  Not Read</button>
            <button @click="filter('Trash')"><span>&#x1F5D1   </span>  Trash</button>
        </section>
        <router-link to="/">Back Home Page</router-link>
    </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {
        callBus() {
            console.log('colling buss')
            eventBus.emit('test', 'test data')
        },
        filter(filter){
            this.$emit('filtered', filter)
        }
    },
    computed: {},
    destroyed() { },
};