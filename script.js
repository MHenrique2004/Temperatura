const ChaveAPI = "3d0d1f3815865e4cd64ee0ef17523320";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const iconedostempos = document.querySelector(".iconedotempo");

const caixapesquisa = document.querySelector(".search input");
const caixabotao = document.querySelector(".search button");

async function checartempo(Cidade){
    const responde = await fetch(apiurl + Cidade + `&appid=${ChaveAPI}`);
    var data = await responde.json();
    if (responde.status == 404){
        document.querySelector(".errodepesquisa").style.display = "block"
        document.querySelector(".tempo").style.display = "none"
    }else{

        document.querySelector(".nomecidade").innerHTML = data.name;
    document.querySelector(".Temperatura").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidade").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + " Km /h";

    if(data.weather[0].main == "Clouds"){
        iconedostempos.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        iconedostempos.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        iconedostempos.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        iconedostempos.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Clear"){
        iconedostempos.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        iconedostempos.src = "images/drizzle.png"
    }


    document.querySelector(".tempo").style.display = "block";
    document.querySelector(".errodepesquisa").style.display = "none"
    }


    

}

caixabotao.addEventListener("click", ()=> {
    checartempo(caixapesquisa.value);
})

checartempo();