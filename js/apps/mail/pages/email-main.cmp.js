import {mailService} from '../service/mail-service.js'
import mailHeader from '../cmps/mail-header.cmp.js'
import mailNav from '../cmps/mail-nav.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
import addMail from '../pages/add-mail.cmp.js'


export default {
    template: `
        <section class="mail-app">
            <header>
                <mail-header @filtered="setFilter"/>
            </header>
            <body>
                <add-mail />
                <mail-nav @filtered="setFilter" />
                <mail-list :mails="mailsToShow" @setMail="setMail"/>
            </body>
        </section>

    `,
    components: {
        mailHeader,
        mailNav,
        mailList,
        mailService,
        addMail,
    },
    data() {
        return {
            mails: null,
            txt: null,
            filterBy: null,
        }
    },
    created() {
        mailService.query().then(mails => this.mails = mails)
    },
    methods: {
        setFilter(filter, txt) {
            if(filter === 'txt'){
                this.txt = txt
            }
            this.filterBy = filter
            console.log('this.filterBy',this.filterBy)
        },
        setMail(mail) {
            console.log('mail',mail);
            mailService.save(mail)
        },
    },
    computed: {
        mailsToShow() {
            console.log('mails',this.mails)
            console.log('mails',this.filterBy)
            let mails = this.mails
            if (!this.txt) return mails
            if (this.txt) {
                const regex = new RegExp(this.txt, "i")
                mails = mails.filter((mail) => regex.test(mail.fullName))
            }
            switch (this.filterBy) {
                case 'favored':
                    mails = mails.filter((mail) => (mail.isFavored))
                    break;
                case 'read':
                    mails = mails.filter((mail) => (!mail.isRead))
                    break;
            
                default:
                    break;
            }
            console.log('mails',mails)
            return mails
        },
    }
};