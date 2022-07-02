import { noteService } from "/js/apps/keep/service/note-service.js";
import noteList from "./note-list.cmp.js";
import noteTxt from "/js/apps/keep/cmps/note-txt.cmp.js"
import addTxtNote from "/js/apps/keep/cmps/add-txt-note.cmp.js"
import noteImg from "/js/apps/keep/cmps/note-img.cmp.js"
import noteTodos from "/js/apps/keep/cmps/note-todos.cmp.js"
import addImgNote from "/js/apps/keep/cmps/add-img-note.cmp.js"
import addTodosNote from "/js/apps/keep/cmps/add-todos-note.cmp.js"
import searchCmp from "/js/apps/keep/cmps/search.cmp.js";


export default {
    prop: ['notes'],
    template: `

<!-- <add-img-note @saved="addTxtNote" :notes="notes"/>
<add-todos-note @saved="addTxtNote" :notes="notes"/> -->
<search-cmp :note="note"></search-cmp>
<section class="note-list">
        <div v-for="note in notes" :key="note.id" class="note-item">
            <note-list :note="note" @remove="removeNote"/>
        </div>
</section>
`,
    emits: ['saved'],
    data() {
        return {
            notes: null,
            // note: this.notes

        }
    },
    methods: {
        // addTxtNote(note) {
        //     this.notes.push(note)
        //     console.log(`addTxtNote happened`);
        // },
        removeNote(id) {
            noteService.remove(id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === id)
                    this.notes.splice(idx, 1)
                })
        }
    },
    components: {

        noteTxt,
        addTxtNote,
        noteImg,
        addImgNote,
        addTodosNote,
        noteTodos,
        noteList,
        searchCmp
    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
        console.log(`hello from note-app`);
        console.log(`hi`);
    }
}