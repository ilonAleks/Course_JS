import * as React from "react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

const drawerWidth = 240;
const SideBar = ({ routes, title }) => {
    const location = useLocation();

    const renderLinks = (routes) => {
        const links = [];
        let section = [];
        let list = [];
        routes.forEach((prop, key, arr) => {
            if (prop.path && prop.display !== false) {
                list.push(
                    <ListItem
                        button
                        key={key}
                        selected={location.pathname === prop.path}
                        component={NavLink}
                        to={prop.path}
                    >
                        <ListItemIcon>
                            <prop.icon />
                        </ListItemIcon>
                        <ListItemText primary={prop.name} />
                    </ListItem>
                );
            }
            if (prop.divider || key + 1 === arr.length) {
                section.push(<List key={key}>{list}</List>);
                if (prop.divider) section.push(<Divider key={key + 1} />);
                links.push(section);
                section = [];
                list = [];
            }
            if (prop.title) {
                section.push(
                    <Typography
                        key={key}
                        variant="h6"
                        component="h6"
                        style={{
                            marginLeft: 20,
                            marginTop: 20
                        }}
                    >
                        {prop.title}
                    </Typography>
                );
            }
        });
        return links;
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>{renderLinks(routes)}</Box>
            </Drawer>
        </>
    );
};
SideBar.propTypes = {
    routes: PropTypes.array,
    title: PropTypes.string
};

export default SideBar;
