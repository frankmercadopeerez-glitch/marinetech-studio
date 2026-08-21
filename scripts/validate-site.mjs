import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".html")) htmlFiles.push(full);
  }
}

function localTarget(file, value) {
  const clean = value.split("#")[0].split("?")[0];
  if (!clean || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(clean)) return null;
  const candidate = clean.startsWith("/")
    ? path.join(root, clean.replace(/^\/+/, ""))
    : path.resolve(path.dirname(file), clean);
  if (fs.existsSync(candidate)) return candidate;
  if (fs.existsSync(path.join(candidate, "index.html"))) return path.join(candidate, "index.html");
  return candidate;
}

walk(root);

for (const file of htmlFiles) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, "utf8");
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${rel}: falta title`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/i.test(html)) errors.push(`${rel}: falta meta description`);
  if ((html.match(/<h1\b/gi) || []).length !== 1) errors.push(`${rel}: debe tener un solo h1`);
  if (/cdn\.tailwindcss\.com|YOUR_ID_HERE|tech\.frankmercado\.com/i.test(html)) errors.push(`${rel}: contiene integración obsoleta`);

  for (const match of html.matchAll(/<(?:a|link|script|img)\b[^>]*\b(?:href|src)="([^"]+)"/gi)) {
    const target = localTarget(file, match[1]);
    if (target && !fs.existsSync(target)) errors.push(`${rel}: recurso local inexistente ${match[1]}`);
  }

  for (const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch { errors.push(`${rel}: JSON-LD inválido`); }
  }
}

const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
if (!home.includes('action="https://formspree.io/f/mkgdblll"')) errors.push("index.html: endpoint de Formspree incorrecto");
if (/10\s*(?:a|-)?\s*15\s+clientes/i.test(home)) errors.push("index.html: conserva promesa de 10 a 15 clientes");
if (/\+573000000000|streetAddress|openingHoursSpecification/i.test(home)) errors.push("index.html: conserva datos comerciales no confirmados");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`OK: ${htmlFiles.length} páginas HTML validadas.`);
