import React , { useState , useContext} from "react";
import sublinks from './data'
export const AppContext= React.createContext();


export const AppProvider = ({children})=>{

    const [ isSidebarOpen , setSidebarOpen] = useState(false)
    const [ isSubmenuOpen , setSubmenuOpen] = useState(false)
    const [location , setLocation] = useState({})
    const [page, setPage] =useState({page:'', links:[]});
    

    const openSidebar=()=>{
        setSidebarOpen(true)
    }
    
    const closeSidebar=()=>{
        setSidebarOpen(false)
    }
    const openSummenu=(text , coordinates)=>{
      
       const page= sublinks.find((item)=>{
           return(
            item.page === text
           )
       })
        console.log(page)
        setPage(page)
        setLocation(coordinates)
        setSubmenuOpen(true)
    }
    
    const closeSubmenu=()=>{
        setSubmenuOpen(false)
    }


    return <AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSummenu,
        closeSubmenu,
        location,
        page,
        }}>
           {children}
    </AppContext.Provider>
}
export const useGlobalContext =()=>{
   return useContext(AppContext)
}