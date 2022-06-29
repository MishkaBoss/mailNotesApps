import { noteService } from "/js/apps/keep/service/note-service.js";
import noteTxt from "/js/apps/keep/cmps/note-txt.cmp.js"
import noteImg from "/js/apps/keep/cmps/note-img.cmp.js"
import noteVideo from "/js/apps/keep/cmps/note-video.cmp.js"
import noteTodos from "/js/apps/keep/cmps/note-todos.cmp.js"

export default {
    template: `
<h1>hello</h1>
<form @submit.prevent="save">
    <!-- <input v-model="" type="text" name="" id=""> -->
    
    <div v-for="note in notes">
    <component :is="component">

    </component>
{{note.type}}
</div>
</form>
<!-- <component :is="cmp.type"  
                        :info="cmp.info" 
                        @setVal="setAns($event, idx)">
                    </component> -->
`,
    data() {
        return {
            notes: null,
        }
    },
    methods: {
        save() {
            console.log(`saving...`);
        },
    },
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    created() {
        noteService.getById()
            .then(notes => this.notes = notes)
        console.log(`hi`);
    }
}