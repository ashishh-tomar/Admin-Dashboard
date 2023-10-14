import { FcBusinesswoman, FcEnteringHeavenAlive, FcFilmReel, FcLeftUp, FcManager, FcPositiveDynamic } from "react-icons/fc";


export const SIDEBAR_LINKS = [
    {
        key : 'dashboard',
        lable : 'Dashboard',
        path :'/',
        icon : <FcEnteringHeavenAlive/>
    },
    
    {
        key : 'products',
        lable : 'Products',
        path :'/products',
        icon : <FcFilmReel/>
        
    },


    {
        key : 'customers',
        lable : 'Customers',
        path :'/customers',
        icon : <FcBusinesswoman/>
    },


    {
        key : 'income',
        lable : 'Income',
        path :'/income',
        icon : <FcPositiveDynamic/>
    },


    {
        key : 'promote',
        lable : 'Promote',
        path :'/promote',
        icon : <FcLeftUp/>
    },


    {
        key : 'help',
        lable : 'Help',
        path :'/help',
        icon : <FcManager/>
    },
];