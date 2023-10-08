const http = require('http');
const fs = require('fs');
var requests = require('requests');
const homeFile = fs.readFileSync("index.html",'utf-8');
const city = "Pune";

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}",(orgVal.main.temp-273.15).toFixed(2));
    temperature = temperature.replace("{%tempmin%}",(orgVal.main.temp_min-273.15).toFixed(2));
    temperature = temperature.replace("{%tempmax%}",(orgVal.main.temp_max-273.15).toFixed(2));
    temperature = temperature.replace("{%location%}",orgVal.name);
    temperature = temperature.replace("{%country%}",orgVal.sys.country);
    temperature = temperature.replace("{%tempStatus%}",orgVal.weather[0].main);
    
    return temperature;
}
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        requests(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce93cdcef61c908d3831755b4ebb42db`)
        .on("data",(chunk)=>{
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
           
            const realTimeData = arrData
            .map((val)=>replaceVal(homeFile, val))
            .join("");
            res.write(realTimeData);
        })
        .on("end",(err)=>{
            if(err) return console.log("Connection closed due to error",err);
            console.log("end");
            res.end();
        })
    }else{
        res.end("File not found");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log(`Connection established`);
})