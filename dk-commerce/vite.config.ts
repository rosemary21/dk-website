import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
interface viteConfigInputs {
  mode: string;
  command: string;
}
export default (args: viteConfigInputs) => {
  const generateScopedName =
    args.mode === "production"
      ? "[name]_[local]_[hash:base64:5]"
      : "[name]_[hash:base64:5]";
  return defineConfig({
    plugins: [react()],
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
        generateScopedName,
      },
    },
  });
};
