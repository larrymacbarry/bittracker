import Home from ".././pages/Home.vue"
import Settings from ".././pages/Settings.vue"
import About from ".././pages/About.vue"

export default [
    {
        path: "/",
        component: Home,
        name: "Home",
        props: true,
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