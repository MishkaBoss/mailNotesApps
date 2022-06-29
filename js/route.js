import noteApp from "/js/apps/keep/pages/note-app.cmp.js"
import emailMain from "./apps/mail/pages/email-main.cmp.js"
import homePage from "/js/home-page.cmp.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailMain
    },
    {
        path: '/keep',
        component: noteApp
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})
