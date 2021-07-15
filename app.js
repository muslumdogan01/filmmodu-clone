const myApp = async (myComponents) => {
  let myApp = document.querySelector("#app");
  myApp.innerHTML = myComponents;
  return myApp;
};


export default myApp;
