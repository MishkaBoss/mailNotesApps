import notesList from "./apps/keep/cmps/notes-list.cmp.js"
import notesFilter from "./apps/keep/cmps/notes-filter.cmp.js"
import notesPreview from "./apps/keep/cmps/notes-preview.cmp.js"
import emailMain from "./apps/mail/email-main.js"

const options = {
    template: `
        <notes-list/>
        <notes-filter></notes-filter>
        <notes-preview></notes-preview>
        <email-Main/>
      `,
    components: {
        notesList,
        notesFilter,
        notesPreview,
        emailMain,
    },
}

const app = Vue.createApp(options)
// app.use(router)
app.mount("#app")