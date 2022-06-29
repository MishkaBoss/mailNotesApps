import notesList from "./apps/keep/cmps/notes-list.cmp.js"
import notesFilter from "./apps/keep/cmps/notes-filter.cmp.js"
import notesPreview from "./apps/keep/cmps/notes-preview.cmp.js"

const options = {
    template: `
<notes-list/>
<notes-filter></notes-filter>
<notes-preview></notes-preview>
      `,
    components: {
        notesList,
        notesFilter,
        notesPreview
    },
}

const app = Vue.createApp(options)
// app.use(router)

app.mount("#app")