//This component renders the <note-preview> component
//that allow viewing the
//notes preview, and also changing color, pin, etc.
import notePreview from "/js/apps/keep/cmps/note-preview.cmp.js"
import noteList from "/js/apps/keep/cmps/note-list.cmp.js"
import { noteService } from '../service/note-service.js'

export default {
    template: `
  <h1>from note-preview</h1>
<note-preview :notes="notes"/>
<h1>from note-app</h1>
<pre>{{notes}}</pre>
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