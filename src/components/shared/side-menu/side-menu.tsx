import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { MENU_ITEMS } from "./menu-items";
import {
  FooterToggle,
  MenuFooter,
  MenuHeader,
  MenuHeaderTitle,
  MenuItemButton,
  MenuWrapper,
  TabsTheme,
  TabTheme,
} from "./styles";
import Logo from "../icons/logo-icon";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import Logout from "../logout";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const SideMenu = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);

  const handleThemeChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <MenuWrapper>
      <Box>
        <MenuHeader>
          <Logo width={62} height={50} />
          <MenuHeaderTitle>Milhas da Mina</MenuHeaderTitle>
        </MenuHeader>
        <List>
          {MENU_ITEMS.map((item, index) => (
            <ListItem key={item.name} disablePadding>
              <MenuItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </MenuItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <MenuFooter>
        <FooterToggle>
          <TabsTheme
            value={tab}
            onChange={handleThemeChange}
            aria-label="icon position tabs example"
          >
            <TabTheme
              icon={<LightModeOutlined />}
              iconPosition="start"
              label="Light"
            />
            <TabTheme
              icon={<DarkModeOutlined />}
              iconPosition="start"
              label="Dark"
            />
          </TabsTheme>
        </FooterToggle>
        <Logout
          name="Marcus Mingoransi"
          email="marcus.mingoransi@outlook.com"
        />
      </MenuFooter>
    </MenuWrapper>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { sm: "none", xl: "flex" },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideMenu;
