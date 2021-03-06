import React, { useState } from "react";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";

import "./SideMenu.css";
import { Box } from "@mui/system";
import CustomSwitch from "./Switch";
import BackgroundSelector from "./BackgroundSelector";

const SideMenu = ({ isOpen, menuToggle, timeToggle, degrees, bgClick }) => {
  
  
  return (
    <>
      <div
        className={
          isOpen ? "side-menu side-menu-open" : "side-menu side-menu-closed"
        }
      >
        <div className="menu-button" onClick={menuToggle}>
          <MenuIcon style={{fill: '#FFF'}}/>
        </div>
        <Container
          sx={{
            bgcolor: "background.paper",
            height: "100%",
            margin: "0px",
            color: "primary",
          }}
        >
          <Box
            sx={{
              color: "text.primary",
              fontWeight: "medium",
              fontSize: "1rem",
              padding: "10px",
              paddingTop: "25px",
            }}
          >
            <div className="menu-item">
              <ViewCompactIcon
                sx={{
                  height: "15px",
                  width: "15px",
                  pr: "10px",
                }}
              />
              <span className='menu-option'>Dock</span>
            </div>

            <div className="menu-item">
              <ViewCompactIcon
                sx={{
                  height: "15px",
                  width: "15px",
                  pr: "10px",
                }}
              />
              <span className='menu-option'>Toggle Degrees</span>
              <CustomSwitch
                toggle={degrees}
                textBefore={'??F'}
                textAfter={'??C'}

              />
            </div>

            {/* <div className='menu-item'>
          <AccessTimeIcon sx={{
            height: '15px',
            width: '15px',
            pr: '10px',
            
          }}/>
          <span>Clock 12H | 24H</span>
          <button onClick={timeToggle}>toggle time</button>
        </div> */}

            <div className="menu-item">
              <DashboardCustomizeIcon
                sx={{
                  height: "15px",
                  width: "15px",
                  pr: "10px",
                }}
              />
              <span className='menu-option'>Customization</span>
              <ul>
                <li></li>
              </ul>
            </div>

            <div className="menu-item">
              <NewspaperIcon
                sx={{
                  height: "15px",
                  width: "15px",
                  pr: "10px",
                }}
              />
              <span className='menu-option'>News</span>
            </div>

            <div className="menu-item">
              <InsertPhotoIcon
                sx={{
                  height: "15px",
                  width: "15px",
                  pr: "10px",
                }}
              />
              <span className='menu-option'>
                <BackgroundSelector
                  bgSelect={bgClick}
                 />
              </span>
              <ul>
                <li></li>
              </ul>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default SideMenu;
