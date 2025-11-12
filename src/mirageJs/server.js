import { createServer, Model } from "miragejs";
import menus from "./fixtures/menus.json";
import contents from "./fixtures/contents.json";
import footers from "./fixtures/footers.json";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      menu: Model,
      content: Model,
      footer: Model,
    },

    fixtures: {
      menus,
      contents,
      footers,
    },

    routes() {
      this.namespace = "api";

      this.get("/menus", (schema) => schema.db.menus);
      this.get("/contents", (schema) => schema.db.contents);
      this.get("/footers", (schema) => schema.db.footers);
    },
  });
}
