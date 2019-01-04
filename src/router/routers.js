import Android from './android'
import New from './new'

const routers=[
    {
        path:'/',
        component:Android
    },
    {
        path:'/android',
        component:Android
    },
    {
        path:'/new',
        component:New
    },
]

export default routers 