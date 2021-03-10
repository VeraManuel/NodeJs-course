const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });
    // const user = {
    //   id: "17",
    //   name: "Manuel",
    // };

    // res.write(JSON.stringify(user));

    res.setHeader("Content-Disposition", "attachment; filename=usuarios.csv");
    res.writeHead(200, { "Content-Type": "application/csv" });
    res.write("id,name\n");
    res.write("12,manuel\n");
    res.write("2,jode\n");

    res.end();
  })
  .listen(3000);
