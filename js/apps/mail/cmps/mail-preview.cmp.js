// import mailNavCmp from "./mail-nav.cmp"

export default {
    props:['mail'],
    template:`
        <section class="mail-preview">
            <p class="star" @click="setMailFavor()">{{star}}</p>
            <router-link class="mail-line" @click="setMailRead()" :to="'/email/'+mail.id">
                    <div class="start-line">
                        <p>{{mail.fullName}}</p>
                    </div>
                    <div class="middle-line">
                        {{mail.subject}}
                    </div>
                </router-link>
                <div class="date end-line">
                    {{mail.sentAt}}
                </div>
        </section>
    `,
    data(){
        return{
            star: (this.mail.isFavored)? '\u2605' : '\u2606'
        }
    },
    created(){},
    methods: {
        setMailFavor(){
            this.mail.isFavored = !this.mail.isFavored
            this.setMail()
        },
        setMailRead(){
            this.mail.isRead = true
            this.setMail()
        },
        setMail() {
            this.$emit('setMail', this.mail);
        },
    },
    computed:{}
}