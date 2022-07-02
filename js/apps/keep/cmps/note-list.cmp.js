
export default {
    props: ['note',],
    template: `
<section class="note-preview-container">
<div class="note-preview">
    <p>{{note.info.txt}}</p>
    <img :src="imgUrl" alt="">
    <ul>
        <li v-for="todo in todos">
            <div>
                <h5 :class="'todo-list-item'" :class="{line: isActive}">{{todo}}</h5>
                <button class="done-btn" @click="lineThrough"> V </button>
            </div>
        </li>
    </ul>
    <div class="actions">
                <button class="delete-btn" @click="remove(note.id)">X</button>
    </div>
    <div class="note-actions">
    </div>
</div>
</section>

`,
    data() {
        return {
            imgUrl: this.note.info.url,
            todos: this.note.info.todos,
            isActive: false,
            num: 0,
            bgColor: 'rgb(255, 152, 235);',

        }
    },
    methods: {
        lineThrough() {
            this.isActive = !this.isActive
        },
        remove(id) {
            console.log(this.note.id);
            this.$emit('remove', id);
        },
        changeBgColor(id) {
            console.log(this.note.id);
        }

    },
    computed: {
    },
    components: {

    },
    created() {

        // console.log(`hi`);
    }
}