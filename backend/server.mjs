import { data } from "./data.mjs";
import { port } from "./config.mjs";
import http from "http";

// console.log(data);
function getRouteData(request) {
  if (request.url === "/") {
    return JSON.stringify({
      data: data,
      status: 200,
      message: "All data",
    });
  } else {
    return JSON.stringify({
      data: null,
      status: 400,
      message: "Page not found",
    });
  }
}

const server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*"); // to avoid cors error
  //   response.end(JSON.stringify(data));
  response.end(getRouteData(request));
});

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
