// import mailNavCmp from "./mail-nav.cmp"

export default {
    props:['mail'],
    template:`
        <section class="mail-preview">
            <div class="start-line">
                <p>⭐</p>
                <p>{{mail.fullName}}</p>
            </div>
            <div class="middle-line">
                {{mail.subject}}
            </div class="end-line">
            <div class="date">
                {{this.date}}
            </div>
        </section>
    `,
    data(){
        return{
            date: this.mail.sentAt,
        }
    },
    created(){},
    methods:{},
    computed:{}
}