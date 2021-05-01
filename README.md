# About
drawer-navigation is a drawer navigation solution for react web apps.


## Getting Started

Install the pacakage :

```javascript
npm i drawer-navigation
```
```javascript
yarn add drawer-navigation
```

## Include in your project
```javascript
import Drawer from 'drawer-navigation/Drawer
```

```javascript
<Drawer
routes={[{url:"/",component:<Home/>,label:"Home"},{url:"/shop",component:<h1>About</h1>,label:"Shop"}]}
mainContainerStyles={{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  width:"100%",
  height:"100%"
}}
hamburgerIconColor="red"
drawerCloseColor="orange"
drawerBackgroundColor="blue"
drawerLabelsStyle={{border:"2.5px solid orange",width:"auto",color:"orange",fontFamily:"monospace",padding:12,margin:2}}
/>
```

## Props
Props | Details | Example
-------------------- | ------------------------- | -------------------------------
routes | takes an array of objects:```{url:"/your-page",component<YourPage/>,label:"Your Page"}```
mainContainerStyles | Styles the containing element that holds the main view takes a styles object : ```{width:200,height:200}```
drawerLabelsStyle | Styles the drawer element that holds the main view takes a styles object : ```{width:200,height:200}```
hamburgerIconColor | color for the hamburger icon that opens teh drawer , takes a string  | "red"
drawerCloseColor | color for the close drawer icon that closes the drawer , takes a string  | "orange"
drawerBackgroundColor | drawer background color , takes a string  | "green"




[Examples](https://fsdev.studio/frontend/drawer-navigation)
