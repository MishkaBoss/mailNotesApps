import {mailService} from '../service/mail-service.js'
import mailHeader from '../cmps/mail-header.cmp.js'
import mailNav from '../cmps/mail-nav.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'


export default {
    template: `
        <section class="mail-app">
            <Header>
                <mail-header @filtered="setFilter"/>
            </Header>
            <body>
                <mail-nav />
                <mail-list :mails="mailsToShow" />
                <router-view />
            </body>
        </section>

    `,
    components: {
        mailHeader,
        mailNav,
        mailList,
        mailService,
    },
    data() {
        return {
            mails: null,
            txt: null
        }
    },
    created() {
        mailService.query().then(mails => this.mails = mails)
    },
    methods: {
        setFilter(filter) {
            this.txt = filter
        }
    },
    computed: {
        mailsToShow() {
            let mails = this.mails
            if (!this.txt) return mails
                const regex = new RegExp(this.txt, "i")
                mails = mails.filter((mail) => regex.test(mail.fullName))
            return mails
        },
    }
};