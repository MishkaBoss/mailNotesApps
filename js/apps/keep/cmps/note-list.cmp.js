
export default {
    props: ['note'],
    template: `
<section class="note-preview-container">
<div class="note-preview">
    <h1>{{note.id}}</h1>
    <p>{{note.info.txt}}</p>
    <div class="actions">
                <button @click="remove(note.id)">X</button>
            </div>
</div>
</section>

`,
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    components: {

    },
    created() {
        console.log(`hi`);
    }
}