import { noteService } from "/js/apps/keep/service/note-service.js"

export default {
    template: `
    <form @submit.prevent="save">
    <input type="text" placeholder="insert image address" v-model="noteToAdd.info.url">
    <button class="add-note-btn save">save</button>
    </form>
`,
    props: ['notes'],
    data() {
        return {
            noteToAdd: noteService.getEmptyNote(),
            noteType: 'img-note',
        }
    },

    methods: {
        save() {
            console.log(`hi`);
            if (!this.noteToAdd.info.url) return
            const note = noteService.save(this.noteToAdd)
            console.log(note);
            this.noteToAdd.type = this.noteType
            this.$emit("saved", note)
            this.noteToAdd = noteService.getEmptyNote()
            console.log(`emit: saved`);
        },
    },
    computed: {
    },
}