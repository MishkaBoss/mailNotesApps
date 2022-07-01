import {mailService} from '../service/mail-service.js'
import mailHeader from '../cmps/mail-header.cmp.js'
import mailNav from '../cmps/mail-nav.cmp.js'


export default {
    template: `
    <section class="mail-app">
            <header>
                <mail-header />
            </header>
            <body>
                <mail-nav />
                <section v-if="mail" class="mail-details">
                    <h3>from: {{this.mail.fullName}}</h3><br>
                    <h4>at: {{this.mail.sentAt}}</h4><br>
                    <h4>subject: {{this.mail.subject}}</h4><br>
                    <p>{{this.mail.body}}</p><br>
                    <router-link :to="'/email/' + previousMailId">previous Mail</router-link>
                    <hr />
                    <router-link :to="'/email/' + nextMailId">Next Mail</router-link>
                    <hr />
                    <router-link to="/email">Back to List</router-link>
                </section>
            </body>
        </section>
`,
components: {
    mailHeader,
    mailNav,
    mailService,
},
    data() {
        return {
            mail: null,
            nextMailId: null,
            previousMailId: null
        };
    },
    created() {},
    watch: {
        '$route.params.mailId':{
            handler() {
                const id = this.$route.params.mailId
                if(!id) return
                mailService.get(id).then(mail => {
                    this.mail = mail
                    mailService.getPreviousMailId(mail.id)
                        .then(previousMailId => this.previousMailId = previousMailId)
                    mailService.getNextMailId(mail.id)
                        .then(nextMailId => this.nextMailId = nextMailId)
                })
            },
            immediate: true
        }

    }
};