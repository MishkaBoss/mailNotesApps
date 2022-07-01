import { noteService } from "/js/apps/keep/service/note-service.js"
export default {
    template: `
    <h1>add note txt</h1>
    <pre>{{noteToAdd}}</pre>
    <form @submit.prevent="save">
    <input type="text" placeholder="" v-model="noteToAdd.info.txt">
    <button>save</button>
    </form>
`,
    props: ['notes'],
    data() {
        return {
            noteToAdd: noteService.getEmptyNote(),
            noteType: 'note-txt',
        }
    },
    methods: {
        save() {
            console.log(`hi`);
            if (!this.noteToAdd.info.txt) return
            const note = noteService.save(this.noteToAdd)
            console.log(note);
            this.$emit("saved", note)
            this.noteToAdd = noteService.getEmptyNote()
            console.log(`emit: saved`);
        },
    },
    computed: {
    },

}