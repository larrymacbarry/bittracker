import TableCard from ".././components/table-card.vue"
import TableCardEdit from ".././components/table-card-edit.vue"

export default [
    {
        path: "/",
        component: TableCard,
        props: true,
    },
    {
        path: "/edit",
        component: TableCardEdit,
        name: "Settings"
    },
]