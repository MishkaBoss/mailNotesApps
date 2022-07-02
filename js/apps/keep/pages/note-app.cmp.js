//This component renders the <note-preview> component
//that allow viewing the
//notes preview, and also changing color, pin, etc.
import notePreview from "/js/apps/keep/cmps/note-preview.cmp.js"
import noteList from "/js/apps/keep/cmps/note-list.cmp.js"
import { noteService } from '../service/note-service.js'

export default {
    template: `
<note-preview :notes="notes"/>
      `,
    data() {
        return {
            notes: null,
        }
    },
    components: {
        notePreview,
        noteList,
    },
    created() {
        noteService.query()
            .then(notes => this.notes = notes)
        console.log(`hello from note-app`);
    }
}