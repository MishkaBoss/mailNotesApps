import { noteService } from "/js/apps/keep/service/note-service.js"

export default {
    template: `
    <form @submit.prevent="save">
    <input type="text" placeholder="insert comma separated todos" v-model="noteToAdd.info.todos" :todos="todos">
    <button class="add-note-btn save">save</button>
    </form>
`,
    props: ['notes', 'todos'],
    data() {
        return {
            noteToAdd: noteService.getEmptyNote(),
            todos: null,
            noteType: 'todos-note'

        }
    },
    methods: {
        save() {
            console.log(`hi`);
            let splitStr = this.noteToAdd.info.todos.split(',')
            console.log(splitStr);
            this.todos = splitStr
            console.log(this.todos);
            this.noteToAdd.info.todos = this.todos
            console.log(this.noteToAdd.info.todos);
            if (!this.noteToAdd.info.todos) return
            const note = noteService.save(this.noteToAdd)
            console.log(note);
            this.noteToAdd.type = this.noteType
            this.$emit("saved", note)
            this.noteToAdd = noteService.getEmptyNote()
            console.log(`emit: saved`);
        },
        splitString() {

        }
    },
    computed: {
    },

}