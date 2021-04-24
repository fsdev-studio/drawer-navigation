

// class Navigation{
// constructor(props){
  const navigation = () =>{
  var url = window.location.pathname;
  return url
  //alert(url.split("/")[url.split("/").length -1])
}

const navigate = (url) =>{
  document.location.pathname = url;
//  alert(url)
}
//}


//}

module.exports ={
navigate: navigate,
navigation:navigation

}

// export default Navigation
