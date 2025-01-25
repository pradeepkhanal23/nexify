import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disabling specific rules
      "react/no-unescaped-entities": "off", // Disabling unescaped entities rule
      "jsx-a11y/alt-text": "off", // Disabling alt-text enforcement
    },
  },
];

export default eslintConfig;
