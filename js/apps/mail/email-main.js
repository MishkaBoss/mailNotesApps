import {mailService} from './service/mail-service.js'
import mailHeader from './cmps/mail-header.cmp.js'
import mailNav from './cmps/mail-nav.cmp.js'
import mailList from './cmps/mail-list.cmp.js'


export default {
    template: `
        <section class="mail-app">
            <Header>
                <mail-header />
            </Header>
            <body>
                <mail-nav />
                <mail-list :mails="this.mails" />
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
            filterBy: null
        }
    },
    created() {
        mailService.query().then(mails => this.mails = mails)
    },
};