import { noteService } from "/js/apps/keep/service/note-service.js";
import noteList from "./note-list.cmp.js";
import noteTxt from "/js/apps/keep/cmps/note-txt.cmp.js"
import addTxtNote from "/js/apps/keep/cmps/add-txt-note.cmp.js"
import noteImg from "/js/apps/keep/cmps/note-img.cmp.js"
import noteVideo from "/js/apps/keep/cmps/note-video.cmp.js"
import noteTodos from "/js/apps/keep/cmps/note-todos.cmp.js"


export default {
    prop: ['notes'],
    template: `

<!-- <pre>{{notes}}</pre> -->
<section class="note-list">
    <!-- <pre>{{notes}}</pre> -->
    <ul>
        <li v-for="note in notes" :key="note.id">
            <note-list :note="note"/>
            
        </li>
    </ul>
</section>
<add-txt-note @saved="addTxtNote" :notes="notes"/>
<!-- <button v-on:click="changeToImgNote">change to img</button>
<button v-on:click="changeToTodoNote">change to todos</button>
    <component :is="noteType"  
    :note="note" >
</component> -->
`,

    data() {
        return {
            notes: null,
            noteType: 'note-txt',
            heading: 'h2',
            // note: this.notes

        }
    },
    methods: {

        // changeToImgNote() {
        //     this.noteType = 'note-img'
        //     console.log(`button`);
        //     console.log(this.noteType);
        //     this.note = this.notes.find(note => note.type === this.noteType)
        // },
        // changeToTodoNote() {
        //     this.noteType = 'note-todos'
        //     console.log(`button`);
        //     console.log(this.noteType);
        //     this.note = this.notes.find(note => note.type === this.noteType)
        // },
        addTxtNote(note) {
            this.notes.push(note)

            console.log(`addTxtNote happened`);
        },
    },
    components: {

        noteTxt,
        addTxtNote,
        noteImg,
        noteVideo,
        noteTodos,
        noteList,
    },
    created() {
        // noteService.getById()
        //     .then(notes => {
        //         this.notes = notes
        //         this.note = notes
        //     }),
        noteService.query()
            .then(notes => this.notes = notes)
        console.log(`hello from note-app`);

        console.log(`hi`);



    }
}