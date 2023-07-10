import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Tabs, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate= useNavigate();
  const [value, setValue] = useState();
  return (
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MNS
        </Typography>
        <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
        <Tab component={Link} label="Dashboard" to="/" />
        <Tab component={Link} label="PDF Generate" to="/pdfgenerate" />
        <Tab component={Link} label="Banner Generate" to="/bannergenerate" />
        <Tab component={Link} label="Excelsheet" to="/excelsheet" />
        <Tab component={Link} label="User Management" to="/usermanagement" />
        <button type="button" onClick={(e)=>{navigate("/login")}}>Logout</button>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
export default Header;