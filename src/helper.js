
module.exports = {

    ConsultarAPI = async (url) => {
        const respuesta= fetch(url);
        const datos = respuesta.json();
        return datos;
    }

}