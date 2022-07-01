import { eventBus } from "../../../services/eventBus-service.js";

export default {
    props: ['text'],
    template: `
    <section v-if="msg" class="add-mail">
        <section class="add-header">
            <p>New Message</p>
            <button @click="closeAdd">x</button>
        </section>
        <section class="add-tittels">
            <section class="add-to">
                <p>to:</p>
                <input type="text">
            <section class="add-to-addres">
                <p>mail Addres:</p>
                <input type="text">
            </section>
            <section class="add-subject">
            <p>subject:</p>
                <input type="text">
            </section>
        </section>
        <section class="add-body">
        <input type="text">
        </section>
        <section class="add-foter">
            <button>send</button>
        </section>
    </section>
`,
    data() {
        return {
            unSubscribe: null,
            msg: null,
        };
    },
    created() { 
        this.unSubscribe = eventBus.on('test', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
        },
        closeAdd(){
            this.msg = null
        }
    },
    computed: {},
    destroyed() {
        this.unsubscribe()
     },
};