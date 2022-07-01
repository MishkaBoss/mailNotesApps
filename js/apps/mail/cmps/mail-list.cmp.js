import mailPreview from './mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container" :class="{read: mail.isRead}">
                    <mail-preview :mail="mail" @setMail="setMail"/>
            </li>
        </ul>
    </section>
`,
components: {
    mailPreview
},
methods: {
    setMail(id) {
        this.$emit('setMail', id);
    },
},
};