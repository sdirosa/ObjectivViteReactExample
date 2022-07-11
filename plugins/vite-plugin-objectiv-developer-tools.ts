/*
 * Copyright 2022 Objectiv B.V.
 */

import { PluginOption } from "vite";

export default function objectivDeveloperTools(): PluginOption {
  const virtualModuleId = 'virtual:objectiv-developer-tools'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  let command: string;
  let mode: string;

  return {
    name: `objectiv-developer-tools`,
    configResolved: (config) => {
      command = config.command;
      mode = config.mode;
    },
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return (command ==='serve' && mode === 'development') ? `import "@objectiv/developer-tools";` : '';
      }
    }
  }
}