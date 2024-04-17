import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link } from '@mui/material';

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const sidebarItems = [
    [
      { id: '0', title: 'Dashboard' , redirect: "dashboard" },
      { id: '1', title: 'Notes', redirect: "notes" },
      { id: '2', title: 'Chat' , redirect: "chat" },
      { id: '3', title: 'Contact' , redirect: "contact" },
    ],
    [
      { id: '4', title: 'Tasks' , redirect: "task" },
      { id: '5', title: 'Reports',redirect: "reports" },
      { id: '6', title: 'Settings' ,redirect: "settings"},
    ],
  ];
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      {sidebarItems[0].map((text) => (
          <ListItem key={text.id} disablePadding>
            <Link href={`/${text?.redirect}`} >
            <ListItemButton>
              <ListItemIcon>
               {text.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
           </Link>  
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sidebarItems[1].map((text) => (
          <ListItem key={text.id} disablePadding>
             <Link href={`/${text?.redirect}`} >
            <ListItemButton>
              <ListItemIcon>
                {text.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
         <IconButton
            size="large"
            edge="start"
            color="#fff"
            aria-label="open drawer"
            sx={{ mr: 2 }} style={{ color:"#fff" }}
          >
            <MenuIcon />
          </IconButton>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
