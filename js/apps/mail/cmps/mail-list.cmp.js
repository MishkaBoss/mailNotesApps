import mailPreview from './mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
        <ul>
            <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">
                <router-link to="/email">
                    <mail-preview :mail="mail" />
                </router-link>
            </li>
        </ul>
    </section>
`,
components: {
    mailPreview
},
};