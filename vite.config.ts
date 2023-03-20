import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        includeSource: ['**/*.(j|t)s']
    },
})