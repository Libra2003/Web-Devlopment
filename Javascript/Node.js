const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World');
  
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date, Time</title>
</head>
<style>
    .container{
        font-size: 23px;
        background-color: blanchedalmond;
        border: 2px solid gray;
        padding: 34px;
        margin: 4px;
        text-align: center;
    }

    #time{
        font-weight: bold;
    }
</style>
<body>
    <div class="container">
        current Time is <span id="time"></span>
    </div>

    <script>
        // let now = new Date();
        // console.log(now);
        // let dt = new Date(0);
        // console.log(dt);

        // let newDate1 = new Date("2029-12-6");
        // console.log(newDate1);

        //let newDate = new Date(year, month,date,hours,minute,seconds,milliseconds);
        let newDate = new Date(3033,4,22,12,3,44);
        console.log(newDate);

        let yr = newDate.getFullYear();
        console.log("The year is ", yr);

        let dat = newDate.getDate();
        console.log("The date is ", dat);

        let month = newDate.getMonth();
        console.log("The month is ", month);

        let hours = newDate.getHours();
        console.log("The hours is ", hours);

        newDate.setDate(8);
        newDate.setMinutes(29);
        console.log(newDate)
        setInterval(updateTime,1000);

        function updateTime(){
            time.innerHTML = new Date();
        }
    </script>
    
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});