import { createServer, Model } from "miragejs";
import menus from "./fixtures/sidebar/menus.json";
import contents from "./fixtures/sidebar/contents.json";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      menu: Model,
      content: Model,
    },

    fixtures: {
      menus,
      contents,
    },

    routes() {
      this.namespace = "api";

      this.get("/menus", (schema) => schema.db.menus);
      this.get("/contents", (schema) => schema.db.contents);
    },
  });
}
