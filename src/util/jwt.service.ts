import {USER_TOKEN} from "./constants";
// import Cookies from "js-cookie";




export const getToken = () => {
  let jsonToken = window.localStorage.getItem(USER_TOKEN)
  if (jsonToken===null){
    console.log("```````````````````>> no token found ")
    return null
  }
  return JSON.parse(jsonToken)
};

export const saveTokenToLocalStorage = (user:any) => {
  // document.cookie = `token=${res.data.token};${expires};path=/`;
  let tokn=JSON.stringify({
    user,
  })
  // Cookies.set(
  //     "AUTH",
  //     token
  // );
  window.localStorage.setItem(USER_TOKEN, tokn);
};

export const destroyToken = () => {
  window.localStorage.removeItem(USER_TOKEN);
};


export default { getToken, saveToken: saveTokenToLocalStorage, destroyToken };
