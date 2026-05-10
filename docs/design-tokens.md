# Design tokens — Isometria

## 1. Philosophie du système

Le système repose sur **trois contraintes** qui en font la cohérence :

1. **Une seule couleur vive** — la famille _teal sauge_. Tout le reste est soit neutre (crème / ink), soit sémantique (réservé aux états système : succès, avertissement, erreur, info). Le vert sauge n'est jamais mélangé à une autre couleur d'accent, jamais décliné en dégradé, jamais doublé d'un secondary color brand.
2. **Trois familles typographiques, trois rôles stricts** — IBM Plex Sans pour les titres (signature), Nunito Sans pour le corps (lecture), JetBrains Mono pour le code (preuve technique). Aucune famille ne déborde de son rôle.
3. **Le texte accent est le seul ornement autorisé** — un mot, en sauge (`--color-accent-text`), en graisse 600. C'est la _signature éditoriale_. Jamais d'italique décoratif, jamais de couleur d'accent autre, jamais de souligné en titre.

Tout ce qui n'est pas dans ce document n'existe pas dans le système.

---

## 2. Couleurs

### 2.1 — Palette _Teal sauge_ (primaire)

La seule famille colorée de la marque. Évoque la projection isométrique du logo et le calme artisanal.

|Token|Hex|Usage principal|
|---|---|---|
|`--color-teal-50`|`#F0F5F4`|Fond ultra-discret (hover zone, section alternée)|
|`--color-teal-100`|`#DCE9E7`|Fond de badge, info-box, primary-soft|
|`--color-teal-200`|`#B9D3D0`|Bordure discrète sur fond teinté|
|`--color-teal-300`|`#8FB8B3`|État désactivé d'un bouton primaire|
|`--color-teal-400`|`#5A9792`|Hover du bouton primaire (`--color-primary-hover`)|
|`--color-teal-500`|`#3D807A`|Variante hover alternative|
|`--color-teal-600`|`#2E6F6A`|**Couleur primaire.** Boutons, liens, accent texte|
|`--color-teal-700`|`#265A56`|État actif / pressed d'un bouton|
|`--color-teal-800`|`#1B4441`|Texte sauge sur fond clair teinté|
|`--color-teal-900`|`#10302D`|Inutilisé par défaut, réserve|

### 2.2 — Palette _Crème_ (neutres + ink)

Une seule échelle neutre, qui sert à la fois aux surfaces claires (50 → 500) et au texte (700 → 900). Pas de gris froid, pas de noir pur — tout est légèrement chaud pour rester cohérent avec le teal sauge.

|Token|Hex|Usage principal|
|---|---|---|
|`--color-cream-50`|`#FFFFFF`|Surface élevée (carte raised, modale)|
|`--color-cream-100`|`#FFFFFE`|Surface standard (carte par défaut)|
|`--color-cream-200`|`#FEFDF9`|**Fond de page**|
|`--color-cream-300`|`#FAF7EE`|Surface enfoncée (bloc de code, aside)|
|`--color-cream-400`|`#F1EDE0`|Bordure hairline standard|
|`--color-cream-500`|`#DCD6C4`|Bordure appuyée (emphasis, focus visible)|
|`--color-cream-600`|`#ADA896`|Texte tertiaire (meta, timestamps, hints)|
|`--color-cream-700`|`#6B6B62`|Texte secondaire (sous-titres, labels)|
|`--color-cream-800`|`#45453F`|Texte alternatif (réservé spécial)|
|`--color-cream-900`|`#2B2D2B`|**Texte principal**|

### 2.3 — Tokens sémantiques (working tokens)

Ces tokens sont **ceux qu'on utilise dans le code des pages**. Jamais appeler directement `--color-cream-200` dans un composant — toujours `--color-background`. Ça permet de changer la valeur sous-jacente sans toucher les composants.

#### Surfaces

|Token|Valeur|Quand l'utiliser|
|---|---|---|
|`--color-background`|`cream-200`|Fond principal d'une page|
|`--color-surface`|`cream-100`|Carte standard posée sur le fond|
|`--color-surface-raised`|`cream-50`|Carte qui doit émerger (modale, hover prononcé)|
|`--color-surface-sunken`|`cream-300`|Zone enfoncée (bloc de code, aside discret)|

#### Bordures

|Token|Valeur|Quand l'utiliser|
|---|---|---|
|`--color-border`|`cream-400`|Bordure par défaut (hairline)|
|`--color-border-strong`|`cream-500`|Bordure appuyée (focus, état actif)|

#### Texte

|Token|Valeur|Quand l'utiliser|
|---|---|---|
|`--color-text`|`cream-900`|Texte principal (95% des cas)|
|`--color-text-soft`|`cream-700`|Sous-titres, labels de formulaire, meta-info importante|
|`--color-text-muted`|`cream-600`|Meta tertiaire, timestamps, placeholders|

#### Primaire

|Token|Valeur|Quand l'utiliser|
|---|---|---|
|`--color-primary`|`teal-600`|Couleur de base des boutons, des liens, des accents|
|`--color-primary-hover`|`teal-500`|État survol|
|`--color-primary-active`|`teal-700`|État pressed / actif|
|`--color-primary-soft`|`teal-100`|Fond de badge primary, info-box|
|`--color-accent-text`|`teal-600`|**L'accent éditorial (1 mot par titre).**|

### 2.4 — États système

**Règle stricte : ces couleurs ne sortent jamais du registre fonctionnel UI.** On ne les utilise ni pour une illustration, ni pour un bloc de contenu éditorial, ni pour un bouton marketing. Elles servent exclusivement à signaler un état : validation de formulaire, erreur de paiement, message d'info, alerte.

|Token|Hex|Contexte|
|---|---|---|
|`--color-success-bg`|`#EAF2E4`|Fond d'une alerte succès|
|`--color-success-text`|`#3B6D11`|Texte sur fond succès|
|`--color-warning-bg`|`#FAEEDA`|Fond d'une alerte attention|
|`--color-warning-text`|`#854F0B`|Texte sur fond attention|
|`--color-danger-bg`|`#FCEBEB`|Fond d'une alerte erreur|
|`--color-danger-text`|`#A32D2D`|Texte sur fond erreur|
|`--color-info-bg`|`teal-100`|Fond d'une alerte info (réutilise la palette sauge)|
|`--color-info-text`|`teal-700`|Texte sur fond info|

> **Note.** `--color-info-*` réutilise la palette sauge : c'est intentionnel. L'info neutre est cohérente avec la couleur de marque ; elle ne mérite pas sa propre teinte.

---

## 3. Typographie

### 3.1 — Familles et rôles

|Variable|Famille|Rôle|Justification|
|---|---|---|---|
|`--font-serif` _(nom à refactorer, voir 3.7)_|**IBM Plex Sans**|Titres h1, h2, h3, display|Dessinée par IBM pour son identité. Terminaisons légèrement carrées, signe une typographie d'outil sans crier. Tranche avec Nunito Sans tout en restant lisible.|
|`--font-sans`|**Nunito Sans**|Corps de texte, UI, labels|Humaniste arrondie, excellente lisibilité écran, chaleur sans niaiserie.|
|`--font-mono`|**JetBrains Mono**|Code inline, blocs de code|Dessinée pour le code (ligatures, lisibilité des caractères ambigus). Reste un clin d'œil à la preuve technique.|

### 3.2 — Fallbacks

```css
--font-serif: "IBM Plex Sans", system-ui, -apple-system, sans-serif;
--font-sans:  "Nunito Sans", system-ui, -apple-system, sans-serif;
--font-mono:  "JetBrains Mono", ui-monospace, Menlo, monospace;
```

### 3.3 — Échelle de tailles

Pensée pour un `--text-body` à 16px. Tout en dessous sert au chrome (labels, meta, code inline), tout au-dessus sert aux titres.

|Token|Taille|Usage|
|---|---|---|
|`--text-2xs`|11px|Badges uppercase, eyebrows|
|`--text-xs`|12px|Captions, meta-info, timestamps|
|`--text-sm`|13px|Inline code, labels de formulaire|
|`--text-base`|14px|UI compacte (boutons, nav)|
|`--text-body`|16px|**Corps de texte standard**|
|`--text-lead`|18px|Paragraphe d'accroche (lead)|
|`--text-h3`|20px|Sous-section|
|`--text-h2-sm`|24px|H2 version compacte (aside, sidebar)|
|`--text-h2`|28px|**H2 standard**|
|`--text-h2-lg`|32px|H2 page de service|
|`--text-h1-sm`|36px|H1 compact (page interne)|
|`--text-h1`|42px|**H1 standard**|
|`--text-display`|56px|Hero d'accueil, display éditorial|

### 3.4 — Line-heights

|Token|Valeur|Usage|
|---|---|---|
|`--lh-tight`|1.1|H1 display|
|`--lh-title`|1.25|H2|
|`--lh-snug`|1.3|H3, UI condensée|
|`--lh-normal`|1.55|Paragraphes compacts, code|
|`--lh-body`|1.7|**Corps de texte principal**|

### 3.5 — Graisses

**Seulement trois graisses dans tout le système.** La retenue typographique fait partie de la signature.

|Token|Valeur|Usage|
|---|---|---|
|`--fw-regular`|400|Corps de texte|
|`--fw-medium`|500|Titres h1/h2/h3, liens, nav actif|
|`--fw-accent`|600|**Le mot en accent sauge (signature)**|

### 3.6 — Letter-spacing

Les gros titres en sans-serif géométrique ont tendance à paraître trop aérés. On resserre légèrement à partir de h2. Les labels uppercase font l'inverse : on les aère pour éviter le tassement.

|Token|Valeur|Usage|
|---|---|---|
|`--ls-h3`|`-0.005em`|H3|
|`--ls-h2`|`-0.015em`|H2|
|`--ls-h1`|`-0.02em`|H1|
|`--ls-display`|`-0.025em`|Display 56px|
|`--ls-label`|`0.08em`|Badges, eyebrows uppercase|

### 3.7 — Note de refacto

Les variables de famille typographique historiques s'appellent `--font-serif`, `--font-sans`, `--font-mono`. Le nom `--font-serif` est désormais trompeur : IBM Plex Sans est une sans-serif, pas une serif. À refacter lors d'une prochaine passe :

```
--font-serif  →  --font-heading
```

Tant que le renommage n'est pas fait, le nom `--font-serif` reste autoritaire dans le code ; ce document le mentionne comme « famille de titres ».

---

## 4. Layout

### 4.1 — Rayons de bordure

|Token|Valeur|Usage|
|---|---|---|
|`--radius-sm`|4px|Code inline, petits tags|
|`--radius-md`|7px|Boutons, inputs, cartes standards|
|`--radius-lg`|10px|Cartes raised, modales, blocs de contenu|
|`--radius-pill`|999px|Badges, pastilles, avatars|

### 4.2 — Bordures réutilisables

|Token|Valeur|Usage|
|---|---|---|
|`--border-hair`|`0.5px solid var(--color-border)`|Séparateurs discrets entre sections|
|`--border-strong`|`0.5px solid var(--color-border-strong)`|Bordure de focus, carte mise en avant|
|`--border-btn`|`1px solid var(--color-primary)`|Bouton outline primaire|

### 4.3 — Ombres

Une seule ombre dans tout le système. Flat-first.

|Token|Valeur|Usage|
|---|---|---|
|`--shadow-card-hover`|`0 2px 8px rgba(43, 45, 43, 0.06)`|Hover sur carte cliquable uniquement|

### 4.4 — Largeurs de lecture

Le site a une **grille de lecture par largeur maximale**, pas par colonnes rigides. Chaque bloc de texte s'insère dans une de ces 4 largeurs.

|Token|Valeur|Usage|
|---|---|---|
|`--read-width-body`|600px|**Corps de paragraphe standard**|
|`--read-width-lead`|580px|Paragraphe d'accroche (lead)|
|`--read-width-hero`|760px|H1 + sous-titre en hero|
|`--read-width-wide`|940px|Grille de cartes, tableau, galerie|

### 4.5 — Rythme d'espacement

Échelle basée sur `rem` pour la verticalité, calée sur une base 4px.

|Token|Valeur|Équivalent|
|---|---|---|
|`--space-1`|`0.25rem`|4px|
|`--space-2`|`0.5rem`|8px|
|`--space-3`|`0.75rem`|12px|
|`--space-4`|`1rem`|16px|
|`--space-5`|`1.25rem`|20px|
|`--space-6`|`1.5rem`|24px|
|`--space-8`|`2rem`|32px|
|`--space-10`|`2.5rem`|40px|
|`--space-12`|`3rem`|48px|
|`--space-14`|`3.5rem`|56px|
|`--space-16`|`4rem`|64px|

---

## 5. Composants de base

### 5.1 — Titres

Tous les titres sont en IBM Plex Sans (`--font-serif`), graisse 500, couleur `--color-text`.

```css
h1 { font-size: 42px; line-height: 1.1;  letter-spacing: -0.02em; }
h2 { font-size: 28px; line-height: 1.25; letter-spacing: -0.015em;
     margin-top: 2.5rem; margin-bottom: 1rem; }
h3 { font-size: 20px; line-height: 1.3;  letter-spacing: -0.005em;
     margin-top: 1.75rem; margin-bottom: 0.75rem; }
```

**Règle éditoriale.** Un titre contient au maximum **un mot en accent sauge** (classe `.accent` ou `.text-accent`). Pas deux, pas une phrase entière. La retenue est la signature.

### 5.2 — Paragraphes

```css
p {
  margin-bottom: 1.15rem;
  max-width: var(--read-width-body);  /* 600px */
}
```

Le `max-width` n'est jamais dépassé pour du texte long. Un paragraphe qui excède 600px casse la lecture ; si un bloc doit être plus large (tableau, carte), utiliser `--read-width-wide`.

### 5.3 — Liens

**Deux styles, jamais mélangés.**

|Contexte|Style|Token|
|---|---|---|
|Inline dans un paragraphe|Sauge, weight 500, underline fine|`a` par défaut|
|Navigation / menu|Couleur texte normale, pas d'underline, sauge si actif|`.nav-link`|

```css
a {
  color: var(--color-primary);
  font-weight: var(--fw-medium);
  text-decoration: none;
  border-bottom: 1px solid rgba(46, 111, 106, 0.4);
  transition: border-color 120ms ease;
}
a:hover { border-bottom-color: var(--color-primary); }

.nav-link { color: var(--color-text); font-weight: 400; border-bottom: none; }
.nav-link.is-active { color: var(--color-primary); font-weight: 500; }
```

### 5.4 — Accent éditorial

```html
<h1>Des sites <span class="accent">sur mesure</span>, conçus pour votre métier.</h1>
```

```css
.text-accent,
.accent {
  color: var(--color-accent-text);   /* teal-600 */
  font-weight: var(--fw-accent);     /* 600 */
}
```

**Règles d'usage :**

- 1 mot (ou 2 courts) par titre. Jamais une phrase entière.
- Jamais dans un paragraphe de corps — c'est réservé aux titres.
- Jamais sur un bouton, un label ou une meta.
- Jamais en combinaison avec italique, underline, ou une autre couleur.

### 5.5 — Code inline et blocs

```css
code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);           /* 13px */
  background: var(--color-cream-50);
  border: 0.5px solid var(--color-cream-500);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--color-surface-sunken);
  border: 0.5px solid var(--color-border);
  padding: 14px 16px;
  border-radius: 8px;
  overflow-x: auto;
  line-height: 1.55;
}
```

**Tokens de coloration syntaxique :**

|Classe|Couleur|Usage|
|---|---|---|
|`.tok-kw`|`teal-600`|Mots-clés (return, const, function)|
|`.tok-str`|`#6B4B3C`|Chaînes de caractères|
|`.tok-com`|`cream-600` italique|Commentaires|

Les blocs de code ont deux rôles dans le contenu : **preuve** (montrer un extrait d'implémentation réelle dans un article) et **contrat** (montrer la forme exacte d'un JSON d'API dans une doc). Ils ne sont jamais décoratifs.

---

## 6. Règles d'usage transversales

### 6.1 — Ce qui est permis

- Varier les surfaces (`--color-surface`, `--color-surface-raised`, `--color-surface-sunken`) pour structurer une page longue.
- Utiliser `--color-primary-soft` (teal-100) pour un bloc d'info ou un badge discret.
- Combiner `.accent` avec un titre pour faire émerger un mot-clé.
- Utiliser JetBrains Mono en dehors du code pour une **métrique chiffrée mise en scène** (ex : `42 ms`, `95+`) — c'est l'unique exception au rôle strict de la famille mono.

### 6.2 — Ce qui ne se fait pas

- Introduire une couleur hors de la palette sauge / crème / sémantique système.
- Utiliser les couleurs d'état système (`success`, `warning`, `danger`) dans un contexte éditorial. Elles sont **exclusivement UI**.
- Utiliser une graisse autre que 400, 500 ou 600.
- Mettre plus d'un mot en accent sauge par titre.
- Utiliser IBM Plex Sans dans le corps de texte (casse la hiérarchie).
- Utiliser Nunito Sans dans un titre (casse la signature).
- Poser un `box-shadow` décoratif. L'ombre n'existe que pour `--shadow-card-hover` sur des éléments cliquables.
- Mettre un gradient. Jamais.

### 6.3 — Checklist avant de publier une page

- [ ] Un **seul** accent sauge dans chaque titre (maximum).
- [ ] Tous les paragraphes longs sont dans `--read-width-body` (600px max).
- [ ] Les couleurs sémantiques système ne sont utilisées que pour de vrais états UI.
- [ ] Les trois familles typographiques restent dans leurs rôles (Plex = titres, Nunito = corps, Mono = code).
- [ ] Aucun gradient, aucun shadow décoratif.
- [ ] Pas d'italique décoratif. L'italique sert à une citation ou un terme étranger — pas à l'emphase.
- [ ] Les liens inline ont la bordure sauge ; les nav links n'en ont pas.
- [ ] Le hover de carte utilise `--shadow-card-hover`, pas une autre ombre improvisée.

---

## 7. Changelog

|Version|Date|Changement|
|---|---|---|
|1.0|avril 2026|Création du système, Kreon en titres|
|1.1|avril 2026|IBM Plex Sans remplace Kreon en titres. Aucun autre token modifié.|
|**1.2**|**mai 2026**|**Pivot vers Isometria. Mention « feuille du logo » remplacée par « projection isométrique du logo » en 2.1. Aucun token de couleur, typographie, layout ou composant modifié. Le système typographique reste sur IBM Plex Sans / Nunito Sans / JetBrains Mono ; le logo utilise Space Grotesk Medium en figé SVG, indépendant du système.**|

---

_Document de design — Isometria · v1.2 · mai 2026._ _Ce document est la source de vérité. Toute divergence entre le CSS et ce document doit être tranchée par mise à jour du document, puis alignement du CSS._
