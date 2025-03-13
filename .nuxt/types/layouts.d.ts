import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../node_modules/.pnpm/nuxt@3.16.0_@types+node@18.19.80_eslint@9.22.0_rollup@4.35.0_sass-embedded@1.85.1_typescript@5.8.2_vite@6.2.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}