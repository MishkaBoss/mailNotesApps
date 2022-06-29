// import { router } from './router.js'
// import appFooter from './cmps/app-footer.cmp.js'
import mailHeader from './cmps/mail-header.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'

export default {
    template: `
        <section>
            <mail-header />
            <!-- <user-msg/>
            <router-view/>
            <app-footer /> -->
        </section>

    `,
    components: {
        mailHeader,
        // appFooter,
        // userMsg
    }
};