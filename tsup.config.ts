import { defineConfig } from "tsup";

export default defineConfig({
  minify: true,
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  target: "es2022",
});
