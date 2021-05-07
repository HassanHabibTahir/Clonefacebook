import React from 'react'
import './css/sidebar.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarRow from './SidebarRow';
import { useStateValue } from '../Stateprovider';
function Sidebar() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        // src='https://scontent.flyp4-1.fna.fbcdn.net/v/t31.18172-8/23215745_1907346462916601_1229817814679968838_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFazGPE9tvhRHaody46cMSmPS-vQjjA2Yk9L69COMDZiR9e65XP6fFTBo8LKPOy3xzqoVlkwi1NF3Z2gNfeleGs&_nc_ohc=IUfTkCCVfbMAX8HhXHC&_nc_ht=scontent.flyp4-1.fna&oh=f458f3acecca4e2b45ca29b06cce3ad0&oe=60BA6C8B'
        title={user.displayName}
      />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Infromation Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />

      <SidebarRow Icon={ExpandMoreIcon} title="Market" />

    </div>
  )
}

export default Sidebar
