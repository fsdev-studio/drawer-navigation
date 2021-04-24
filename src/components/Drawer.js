
import React, { useState } from 'react';
import Navigation, {navigate,navigation} from './Navigation'

import './Drawer.css';


function Drawer({routes,mainContainerStyles}) {

const r = routes !== null && routes !== undefined ? routes : [{url:"/",component:<h1>Home</h1>,label:"Dash"},{url:"/shop",component:<h1>About</h1>,label:"Shop"}];
const cStyles = mainContainerStyles !== null && mainContainerStyles !== undefined ? mainContainerStyles : {marginTop:100};

const [route , setRoute] = useState(navigation())
const [drawerWidth, setDrawerWidth] = useState(0);
const [goto, setGoto] = useState(r);

let compo =   goto.filter((g,i)=>{
      return navigation() === g.url
    });

  return (
    <div className="App">


    <span className="openbtn" onClick={() => setDrawerWidth(250)}>&#9776;</span>

    <div id="mySidenav" class="sidenav" style={{width:drawerWidth}}>
      <span class="closebtn" onClick={() => setDrawerWidth(0)}>&times;</span>
      {
        goto.map((g,i)=>{
          return <span onClick={()=> setRoute(navigate(g.url))}>{g.label}</span>
        })
      }

    </div>
<div style={cStyles}>
{compo[0].component}
</div>



</div>
  );
}

export default Drawer;
