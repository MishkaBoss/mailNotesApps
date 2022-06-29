
import emailMain from "./apps/mail/email-main.js"

const options = {
    template: `
        <email-Main/>
      `,
    components: {
        emailMain,
    },
}

const app = Vue.createApp(options)
// app.use(router)
app.mount("#app")