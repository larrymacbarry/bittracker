import Home from ".././pages/Home.vue"
import Settings from ".././pages/Settings.vue"
import About from ".././pages/About.vue"

export default [
    {
        path: "/",
        component: Home,
        name: "Home",
        props: true,
        beforeEnter: (to, from, next) => {
            if (!to.params.visibility || ['all', 'active', 'completed'].includes(to.params.visibility)) {
                next();
            }
            else {
                next('/');
            }
        }
    },
    {
        path: "/settings",
        component: Settings,
        name: "Settings"
    },
    {
        path: "/about",
        component: About,
        name: "About"
    },
]