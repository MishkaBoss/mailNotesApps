import { router } from '/js/route.js'

const options = {
    template: `
    <router-view/>

<!-- <note-app></note-app>
<email-Main/> -->
      `,
    components: {
    }
}

const app = Vue.createApp(options)
app.use(router)
app.mount("#app")