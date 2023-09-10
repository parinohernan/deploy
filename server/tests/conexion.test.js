const { conn } = require("../src/db");

describe("Conexión a la base de datos", () => {
  test("Debe establecerse correctamente la conexión", async () => {
    try {
      await conn.authenticate();
      expect(true).toBe(true);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  test("Debe ser posible realizar operaciones en la base de datos", async () => {
    try {
      await conn.query("SELECT 1 + 1");
      expect(true).toBe(true);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });
});