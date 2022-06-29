import noteApp from "/js/apps/keep/pages/note-app.cmp.js"
import emailMain from "./apps/mail/email-main.js"

const options = {
    template: `
<note-app></note-app>
<email-Main/>
      `,
    components: {
        noteApp,
        emailMain

    }
}

const app = Vue.createApp(options)
// app.use(router)
app.mount("#app")