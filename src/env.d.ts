/// <reference path="../.astro/types.d.ts" />

// Accès aux bindings Cloudflare :
//   import { env } from 'cloudflare:workers';
//   env.DB, env.CACHE, env.STORAGE, etc.

declare namespace App {
  interface Locals {
    cfContext: ExecutionContext;
    user?: { id: string; email: string };
  }
}
