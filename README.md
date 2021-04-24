# About
drawer-navigation is a drawer navigation solution for react web apps.


## Getting Started

Install the pacakage : npm i drawer-navigation or yarn add drawer-navigation

## Include in your project
```javascript
import Drawer from 'drawer-navigation/ui/Drawer
```

```javascript
<Drawer
routes={[
  {url:"/",component:<h1>Home</h1>,label:"Home"},
  {url:"/about",component:<About/>,label:"About"}
]}
/>
```

## Props
Props | Details
-------------------- | -------------------------
routes | takes an array of objects:```{url:"/your-page",component<YourPage/>,label:"Your Page"}```
drawerStyles |  Styles the drawer element that holds the main view takes a styles object : ```{width:200,height:200}```
mainContainerStyles | Styles the containing element that holds the main view takes a styles object : ```{width:200,height:200}```



https://frontend.fsdev.studio- Examples

[Demo](https://frontend.fsdev.studio)
