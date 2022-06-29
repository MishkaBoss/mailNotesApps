//This component renders the <note-preview> component
//that allow viewing the
//notes preview, and also changing color, pin, etc.
import notePreview from "/js/apps/keep/cmps/note-preview.cmp.js"
import { noteService } from '../service/note-service.js'

export default {
    template: `
<note-preview/>
      `,
    data() {
        return {
            notes: null,
        }
    },
    components: {
        notePreview,
    },
    // created() {
    //     noteService.query()
    //         .then(notes => this.notes = notes)
    //     console.log(this.notes);
    //     console.log(`hello from note-app`);
    // }
}