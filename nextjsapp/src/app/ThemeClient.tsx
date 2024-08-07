"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

function ThemeClient({ children }: any) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export default ThemeClient;
