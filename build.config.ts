/**
 * build.config.ts — BUILD 012 · Real-Time Freight Pipelines
 * ─────────────────────────────────────────────────────────────
 * Repo: ias-build-012-freight-pipeline
 * URL:  freight-pipeline.elwoodberry.com
 * Sector: Supply Chain, Logistics & Construction
 *
 * THE ONLY FILE EDITED FOR THIS BUILD.
 *
 * Governance (Article IX): no fabricated data. Every unknown
 * value stays as an explicit "TODO:" string — the page renders
 * TODO values in a visible warning style so they cannot ship
 * silently.
 * ─────────────────────────────────────────────────────────────
 */

import type { BuildConfig } from "./lib/types";

export const buildConfig: BuildConfig = {
  // ── Identity ─────────────────────────────────────────────
  buildNumber: "012",
  name: "Real-Time Freight Pipelines",
  sector: "Supply Chain, Logistics & Construction",

  // Verbatim from projects.csv (primary_description) —
  // site + CSV + repo never drift.
  tagline:
    "Moves shipping data from third-party carrier APIs into corporate data warehouses with built-in error handling for seamless tracking.",

  // ── Status (honest, always) ──────────────────────────────
  // Upgrade path: "planned" → "preview" → "prototype" → "live"
  // as the deep-build ships. One word, push to main, auto-deploys.
  status: "planned",

  // ── What it does ─────────────────────────────────────────
  // One string per paragraph — the page renders each as its
  // own <p>. Problem / pipeline / traceability.
  whatItDoes: [
    "Carrier tracking data lives behind third-party APIs, and getting it into the corporate warehouse means brittle scripts and silent failures.",
    "This pipeline polls carrier APIs on a cron schedule, normalizes shipping event payloads, and pushes clean tracking records into the data warehouse with built-in retry logic and error alerting.",
    "Failures alert instead of vanishing — every dropped event is visible and replayable.",
  ],

  // ── Stack ────────────────────────────────────────────────
  stack: ["n8n", "Next.js", "Vercel"],

  // ── Architecture ─────────────────────────────────────────
  architecture: {
    // Real diagrams only. Stays null until one is drawn —
    // the page renders the system-map table alone.
    diagramSrc: null,
    diagramAlt: "TODO: describe the diagram for screen readers",

    layers: [
      {
        layer: "Presentation",
        technology: "Next.js on Vercel",
        responsibility:
          "Build page, pipeline run view, tracking event and payload rendering",
      },
      {
        layer: "Orchestration",
        // Demos run on n8n Cloud. The identical workflows deploy
        // self-hosted or in a client's VPC for regulated
        // production — the /workflows export is the portable
        // artifact. Never state "self-hosted" as current fact.
        technology: "n8n (cloud-hosted)",
        responsibility:
          "Cron-scheduled carrier API polling, payload normalization, retry logic, error alerting, warehouse push",
      },
      {
        layer: "Data",
        // Storage + queue selection pending deep-build.
        // Stated uncertainty beats invented detail.
        technology: "TODO: carrier API set + data warehouse target pending deep-build",
        responsibility:
          "TODO: raw carrier events, normalized tracking records, retry/error log",
      },
      {
        layer: "AI",
        technology: "None — deterministic pipeline",
        responsibility:
          "Deliberately no LLM in the loop — normalization and retry logic are deterministic",
      },
    ],

    // One string per step — numbered on render because order
    // carries meaning: this is the sequence a record travels.
    flow: [
      "Cron trigger polls carrier APIs",
      "shipping event payloads received",
      "normalized to shared tracking schema",
      "pushed to corporate data warehouse",
      "failed pushes retried with backoff",
      "persistent failures alert",
      "every event logged and replayable",
    ],
  },

  // ── Sample payload ───────────────────────────────────────
  // Real production schema, mock values, labeled as mock.
  payload: {
    caption: "// mock data — representative of production schema",
    input: {
      event: "carrier.event.received",
      submitted_at: "2026-07-05T15:30:00Z",
      source: "freight-pipeline.elwoodberry.com",
      fields: {
        carrier: "mock-carrier-a", tracking_ref: "MOCK-TRK-99120", event: "out_for_delivery", origin: "GRR", destination: "AZO"
      },
    },
    output: {
      status: "warehoused",
      confidence: null,
      routed_to: "warehouse:shipping-events",
      audit_id: "ias-demo-012-0001",
    },
  },

  // ── Live demo slot ───────────────────────────────────────
  // Renders only when a real demo exists. Demo Mode (cached
  // representative responses) is the default for public
  // traffic — protects demo reliability and n8n Cloud
  // execution quota.
  demo: {
    embedUrl: null,
    videoUrl: null,
    note: "Demo Mode serves cached representative responses to public traffic; live mode is enabled per session.",
  },

  // ── Links ────────────────────────────────────────────────
  links: {
    github: "https://github.com/elwoodberry3/ias-build-012-freight-pipeline",
    // Decision pending: master CSV stores the build's own deploy
    // URL here; the page needs a route BACK to the portfolio
    // index. Root used until the portfolio index URL is final.
    portfolio: "https://elwoodberry.com", // TODO: confirm portfolio index URL
    // TODO: confirm /contact is the persona-routed booking page,
    // not a generic contact form, before deep-build ships.
    booking: "https://elwoodberry.com/contact",
  },
};
