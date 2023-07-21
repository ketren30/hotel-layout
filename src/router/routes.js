import Contacts from '../components/pages/contacts.vue';
import CountPrice from '../components/pages/countPrice.vue';
import Gallery from '../components/pages/gallery.vue';
import Menu from '../components/pages/menu.vue';
import Registration from '../components/pages/registration.vue';
import Reviews from '../components/pages/reviews.vue';
import Schemes from '../components/pages/schemes.vue';
import About from '../components/pages/about/about.vue'


export const routes = [
        {
            path: '/hotel-layout/',
            component: About
        },
        {
            path: '/hotel-layout/contacts',
            component: Contacts 
        },
        {
            path: '/hotel-layout/count-price',
            component: CountPrice 
        },
        {
            path: '/hotel-layout/gallery',
            component: Gallery 
        },
        {
            path: '/hotel-layout/menu',
            component: Menu 
        },
        {
            path: '/hotel-layout/registration',
            component: Registration 
        },
        {
            path: '/hotel-layout/reviews',
            component: Reviews 
        },
        {
            path: '/hotel-layout/schemes',
            component: Schemes 
        }
    ]

    
