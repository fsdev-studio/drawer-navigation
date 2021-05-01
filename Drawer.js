import React, { useState } from 'react';
import Navigation, { navigate, navigation } from './Navigation';
import './Drawer.css';

function Drawer({
  routes,
  mainContainerStyles
}) {
  const r = routes !== null && routes !== undefined ? routes : [{
    url: "/",
    component: /*#__PURE__*/React.createElement("h1", null, "Home"),
    label: "Dash"
  }, {
    url: "/shop",
    component: /*#__PURE__*/React.createElement("h1", null, "About"),
    label: "Shop"
  }];
  const cStyles = mainContainerStyles !== null && mainContainerStyles !== undefined ? mainContainerStyles : {
    marginTop: 100
  };
  const [route, setRoute] = useState(navigation());
  const [drawerWidth, setDrawerWidth] = useState(0);
  const [goto, setGoto] = useState(r);
  let compo = goto.filter((g, i) => {
    return navigation() === g.url;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("span", {
    className: "openbtn",
    onClick: () => setDrawerWidth(250)
  }, "\u2630"), /*#__PURE__*/React.createElement("div", {
    id: "mySidenav",
    class: "sidenav",
    style: {
      width: drawerWidth
    }
  }, /*#__PURE__*/React.createElement("span", {
    class: "closebtn",
    onClick: () => setDrawerWidth(0)
  }, "\xD7"), goto.map((g, i) => {
    return /*#__PURE__*/React.createElement("span", {
      onClick: () => setRoute(navigate(g.url))
    }, g.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: cStyles
  }, compo[0].component));
}

export default Drawer;