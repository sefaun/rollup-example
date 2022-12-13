import { Routes } from "./routes/routes";

class Server {

  constructor() {
    const routes = new Routes()

    routes.first()
  }

}

new Server()