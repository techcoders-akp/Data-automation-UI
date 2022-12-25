import SideNavbar from '../sideNav/SideNavbar'
import HeaderIndex from '../Header/HeaderIndex'

const UIRenderer = (props) => {
  const {handleMode , mode} = props ;
  return (
  <>
  <SideNavbar/>
  <HeaderIndex handleMode={handleMode} mode={mode}/>
  </>
    
  )
}

export default UIRenderer;
