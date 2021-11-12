import React, { useState } from 'react';
import './css/site.css'

import Users from "./components/Users"
import Repositories from "./components/Repositories"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function App() {

  const [userGithubSearch,setUserGithubSearch] = useState("fabiorcorrea");

  function handleOnKeyPress(e: any) {
    if (e.charCode === 13) {
      setUserGithubSearch(e.target.value);
    }
  }

  function handleOnClick(e: any) {
    setUserGithubSearch(e.target.value);
  }
  
  return (
    <div id="site">
      <>
        <div id="header">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  GitHub - Pesquisa de Usuários
                </Typography>
                <Search >
                  <SearchIconWrapper >
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    type="search"
                    onKeyPress={(e) => handleOnKeyPress(e)}
                    onClick={(e) => handleOnClick(e)}
                  />
                </Search>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div id="conteudo">
          <div id="conteudo-left"><Users data={userGithubSearch} /></div>
          <div id="conteudo-right"><Repositories data={userGithubSearch}/></div>
        </div>
        <div id="footer"></div>
      </>
    </div>
  );

}