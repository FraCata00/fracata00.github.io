import { mdiLanguagePython, mdiGithub } from "@mdi/js";

// All page content lives here so copy edits never require touching components.

export const profile = {
  name: "Francesco",
  surname: "Cataldo",
  role: "Full-stack developer",
  location: "Turin, Italy",
  github: "https://github.com/FraCata00",
  githubHandle: "@FraCata00",
  pypi: "https://pypi.org/user/FraCata00/",
};

export const heroMeta = [
  { label: "Now", value: "Spinforward S.R.L." },
  { label: "Focus", value: "Django · DRF · Celery · PostgreSQL" },
  { label: "Frontend", value: "Vue 3 · Nuxt 3" },
];

export const caseStudies = [
  {
    no: "01",
    title: "A billing engine you can reason about",
    ctx: "Mediation & interpreting management platform · Django",
    rows: [
      {
        k: "Problem",
        v: "The fee calculation on a core model had grown into deeply nested conditionals. Adding a rule meant reading the whole branch tree, and edge cases were leaking: an <code>AttributeError</code> on null contracts and a silent overwrite where one branch quietly clobbered another's result.",
      },
      {
        k: "Constraints",
        v: "Billing is money — behaviour had to stay identical for existing contracts while the structure changed underneath. No regressions, full coverage with <code>pytest</code> + <code>factory_boy</code>.",
      },
      {
        k: "Approach",
        v: "Replaced the conditional tree with a lookup-dict dispatch keyed on the contract's billing type, raised an explicit <code>MissingContractFeeError</code> instead of failing implicitly, and added guards for every nullable field on the path.",
      },
      {
        k: "Outcome",
        v: "Adding a billing rule is now one dictionary entry plus one test. The null-contract crash and the silent-overwrite bug are gone, and the method reads top to bottom.",
      },
    ],
    caption: "mediations/models.py — Mediation.get_billing_value",
    code: [
      '<span class="tc"># before — a branch tree nobody wanted to touch</span>',
      '<span class="tk">def</span> <span class="tf">get_billing_value</span>(self):',
      '    <span class="tk">if</span> self.contract:',
      '        <span class="tk">if</span> self.contract.kind == <span class="ts">"A"</span>:',
      '            <span class="tk">if</span> self.service: ...   <span class="tc"># and on, and on</span>',
      "",
      '<span class="tc"># after — explicit dispatch + a real error</span>',
      '<span class="tk">def</span> <span class="tf">get_billing_value</span>(self):',
      '    <span class="tk">if</span> self.contract <span class="tk">is</span> <span class="tn">None</span>:',
      '        <span class="tk">raise</span> <span class="tf">MissingContractFeeError</span>(self)',
      "    handler = self._FEE_BY_KIND.get(self.contract.kind)",
      '    <span class="tk">return</span> handler(self) <span class="tk">if</span> handler <span class="tk">else</span> self._default_fee()',
    ].join("\n"),
  },
  {
    no: "02",
    title: "Serving million-row time series without melting the worker",
    ctx: "Industrial IoT telemetry platform · Django + PostgreSQL",
    rows: [
      {
        k: "Problem",
        v: "A chart endpoint backed an Apache ECharts dashboard over large time windows. Building one Python object per data point and serialising with the default JSON encoder dominated both request time and memory.",
      },
      {
        k: "Approach",
        v: "Pushed aggregation into PostgreSQL with <code>json_agg</code> so the database returns chart-ready JSON, swapped the encoder for <code>orjson</code>, and streamed the payload with <code>StreamingHttpResponse</code> instead of buffering it. Profiled with <code>EXPLAIN ANALYZE</code> and added partial + covering indexes for the hot access pattern.",
      },
      {
        k: "Outcome",
        v: "The endpoint stopped allocating per-point objects, peak memory dropped, and wide windows that previously timed out now return comfortably.",
      },
    ],
    chips: [
      "<b>json_agg</b> · aggregation in PG",
      "<b>orjson</b> · faster encode",
      "<b>StreamingHttpResponse</b> · no buffering",
      "<b>partial + covering indexes</b>",
    ],
  },
  {
    no: "03",
    title: "Rebuilding corrected readings, consistently, in batches",
    ctx: "Telemetry corrections (zeroing / offset) · Celery + PostgreSQL",
    rows: [
      {
        k: "Problem",
        v: "Applying an offset to a sensor means recomputing a large set of adjusted readings — a slow, write-heavy job that must not corrupt data if it runs twice or overlaps with live ingestion.",
      },
      {
        k: "Approach",
        v: "Built a Celery task chain that recomputes adjusted readings in bounded batches, takes <code>select_for_update</code> locks on the affected rows, and routes writes through custom managers. Bulk deletions run as batched raw SQL rather than one unbounded statement.",
      },
      {
        k: "Outcome",
        v: "Offset changes apply reliably under concurrent load, with predictable batch sizes instead of one giant transaction.",
      },
    ],
  },
  {
    no: "04",
    title: "A local LLM that proposes sensor configuration",
    ctx: "Assisted offset configuration · Ollama + Qwen 2.5",
    rows: [
      {
        k: "Idea",
        v: "Operators were setting offset parameters by hand. I wired up a small agent running Qwen 2.5 locally through Ollama's OpenAI-compatible endpoint to read recent telemetry and propose offset values — keeping data on-prem and inference private.",
      },
      {
        k: "Outcome",
        v: "A faster first-pass configuration with no third-party API and no data leaving the network.",
      },
    ],
  },
];

export const toolbox = [
  {
    h: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "Celery",
      "Redis",
      "django-filter",
    ],
  },
  {
    h: "Data",
    items: [
      "PostgreSQL",
      "TimescaleDB",
      "Partial / covering indexes",
      "EXPLAIN ANALYZE",
      "json_agg / orjson",
    ],
  },
  { h: "Frontend", items: ["Vue 3", "Vuetify", "Nuxt 3", "vue-i18n"] },
  {
    h: "Test & ship",
    items: [
      "pytest",
      "factory_boy",
      "GitLab CI/CD",
      "Docker / Swarm",
      "Traefik · Gunicorn",
    ],
  },
];

export const openSource = [
  {
    title: "django-istat-italian-places",
    tagline: "Django app · published on PyPI · MIT",
    text: "Ships official ISTAT data for Italian regions, provinces and municipalities as ready-to-use Django models, fixtures and admin — so you don't re-import the same reference data on every project.",
    install: "pip install django-istat-italian-places",
    actions: [
      {
        label: "PyPI",
        href: "https://pypi.org/project/django-istat-italian-places/",
        icon: mdiLanguagePython,
      },
      {
        label: "GitHub",
        href: "https://github.com/FraCata00",
        icon: mdiGithub,
      },
    ],
  },
  {
    title: "django-istat-deploy",
    tagline: "Live REST API · deployed on Koyeb",
    text: "The package above, wrapped as a public REST API and deployed — the full loop, from a library on PyPI to a running, reachable service.",
    actions: [
      {
        label: "api",
        href: "https://djangoistat.koyeb.app/",
        icon: mdiLanguagePython,
      },
    ],
  },
];

export const contacts = [
  { kind: "github", label: "@FraCata00", href: "https://github.com/FraCata00" },
  {
    kind: "pypi",
    label: "FraCata00",
    href: "https://pypi.org/user/FraCata00/",
  },
  {
    kind: "email",
    label: "francy111200@gmail.com",
    href: "mailto:francy111200@gmail.com",
  },
  {
    kind: "linkedin",
    label: "/in/francesco-cataldo",
    href: "https://www.linkedin.com/in/francesco-cataldo/",
  },
];
