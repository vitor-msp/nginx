const processRequest = async (domain, method = "GET") => {
  try {
    let body = null,
      headers = {};
    if (method === "PUT") {
      body = JSON.stringify({ hello: "world" });
      headers = { "Content-Type": "application/json" };
    }
    const response = await fetch(`http://${domain}/`, {
      method,
      headers,
      body,
    });
    if (!response.ok) {
      throw new Error(`status code: ${response.status}`);
    }
    const { ip, color } = await response.json();
    document.getElementById("result").innerText = ip;
    document.getElementById("content").style.backgroundColor = color;
  } catch (error) {
    alert(`ERROR TO TEST API:\n ${error.message}`);
  }
};

const testGetApi = () => processRequest("api.nginx");

const testGetBlue = () => processRequest("blue.api.nginx");

const testGetGreen = () => processRequest("green.api.nginx");

const testPutApi = () => processRequest("api.nginx", "PUT");
