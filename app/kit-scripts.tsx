"use client";

import { useEffect } from "react";

/* The design kit in public/assets is plain DOM script (nav sheet, hovers, the hero's entrance,
   the dealt moment). It is loaded once React has hydrated, so the two never touch the same
   nodes at the same time. */
const SCRIPTS = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

let loaded = false;

export default function KitScripts() {
  useEffect(() => {
    if (loaded) return;
    loaded = true;
    for (const src of SCRIPTS) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
