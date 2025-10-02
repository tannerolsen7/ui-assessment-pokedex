import React from 'react';
import { createUseStyles } from 'react-jss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LayoutProvider, SearchProvider } from '../contexts';
import { Nav } from '../components';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './client';
import { ListPage, Home } from '../screens';
import { ModalRoutes } from '../components/Routes/ModalRoutes';

function App() {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <LayoutProvider>
        <SearchProvider>
          <div className={classes.root}>
            <BrowserRouter>
              <Nav />
              <div className={classes.content}>
                <div className={classes.scrollableArea}>
                  <AppRoutes />
                </div>
              </div>
            </BrowserRouter>
          </div>
        </SearchProvider>
      </LayoutProvider>
    </ApolloProvider>
  );
}

function AppRoutes() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<ListPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/pokemon/:id" element={<ModalRoutes />} />
        </Routes>
      )}
    </>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      background: '#171E2b',
      minHeight: '100vh',
      minWidth: '100vw',
      height: '100%',
      width: '100%',
      display: 'flex',
    },
    content: {
      flex: '1',
      overflow: 'hidden',
      position: 'relative',
    },
    scrollableArea: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
    },
  },
  { name: 'App' }
);

export default App;
