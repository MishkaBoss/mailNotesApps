import noteApp from "/js/apps/keep/pages/note-app.cmp.js"

const options = {
    template: `
<note-app></note-app>
      `,
    components: {
        noteApp
    },
}

const app = Vue.createApp(options)
// app.use(router)

app.mount("#app")