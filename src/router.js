import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue"
import Product from "./components/Product.vue"

const routes = [
{path :'/Harmoonica/', name: 'home', component:Home},
/* {path :'/Harmoonica/product/:id', name: 'product', component:Product} */

{path: "/Harmoonica/product", name: "products", component: Product, children: [
    { path: ":id", name: "product", component: Product },
]
}
]
const router =createRouter({ history: createWebHistory(), routes}) 

export default router;
