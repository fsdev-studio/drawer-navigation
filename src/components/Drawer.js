
import React, { useState } from 'react';
import Navigation, {navigate,navigation} from './Navigation'
import './Drawer.css';
import FourZeroFour from './FourZeroFour';


function Drawer({
  routes,
  mainContainerStyles,
  hamburgerIconColor,
  drawerCloseColor,
  drawerBackgroundColor,
  drawerLabelsStyle
}) {

const r = routes;
const [route , setRoute] = useState(navigation())
const [drawerWidth, setDrawerWidth] = useState(0);
const [goto, setGoto] = useState(r);

let compo =  goto.filter((g,i)=>{
      return navigation() === g.url
    });

  return (
    <div style={{display:'block',width:'100%',height:'100%',margin:0}}>

    <span
        style={{color:hamburgerIconColor}}
        className="openbtn"
        onClick={() => setDrawerWidth(250)}>
        &#9776;
    </span>

      <div
          className="drawer"
          style={{
            background:drawerBackgroundColor,
            height:'auto',
            paddingBottom:20,
            width:drawerWidth
          }}
      >
            <span
            className="closebtn"
            style={{color:drawerCloseColor}}
            onClick={() => setDrawerWidth(0)}>
            &times;
            </span>
            {
              goto.map((g,i)=>{
                return (
                <span
                className="labels"
                style={drawerLabelsStyle}
                onClick={()=> setRoute(navigate(g.url))}>
                {g.label}
                </span>
              )
              })
            }
      </div>

      <div style={mainContainerStyles}>
        {compo[0] !== undefined ? compo[0].component : <FourZeroFour/>}

      </div>
  </div>
  );
}

export default Drawer;
