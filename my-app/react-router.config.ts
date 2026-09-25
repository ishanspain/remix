import type { Config } from "@react-router/dev/config";

export default {
  // Build as a client-rendered single-page application.
  ssr: false,

  async prerender() {
    return ["/about"];
  },
} satisfies Config;
