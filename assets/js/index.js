console.log("Sesion JS09 NPM y Axios");

const apiFetch = document.getElementById("apiFetch");
const apiAxios = document.getElementById("apiAxios");

apiFetch.onclick = async () => {
    console.log("boton apiFetch");
    const responseJson = await fetch("https://fakestoreapi.com/products"); 
    const response = await responseJson.json();
    console.log(response);
}


apiAxios.onclick = async () => {
    console.log("boton apiFetch");
    const responseJson = await axios.get("https://fakestoreapi.com/products"); 
    console.log(response);
}
