# Handoff: Stera Pro — Homepage "Shop eerst" + Plantconfigurator

## Overzicht
Twee deliverables voor de Stera Pro B2B-webshop (Shopify, repo `sterapro-theme`, branch `main`):

1. **Homepage "Shop eerst"** — herontwerp van de homepage: zoeken + categorieën + bestsellers bovenaan, diensten als compacte band, daarna doelgroepen, realisaties, Mijn Stera Pro-portaal, advies-CTA en footer.
2. **Plantconfigurator** — interactieve wizard in 4 stappen: ruimte-vereisten → geschikte planten → potkeuze → overzicht met offerte-aanvraag.

**HARDE REGEL: enkel werken aan `sterapro-theme` (sterapro.be). NOOIT aan de webshop stera.be komen.**

## Over de designbestanden
De bestanden in dit pakket zijn **designreferenties in HTML/React (Babel)** — prototypes die de bedoelde look en werking tonen, géén productiecode. De opdracht is deze designs te **herbouwen in het bestaande Shopify-thema** (Liquid sections/blocks volgens de Horizon-architectuur die al in de repo zit), met de bestaande snippets, color schemes en settings. De configurator kan als custom section + vanilla JS web component, of als app-blok richting de SteraPro-app — zie onder.

## Fidelity
**High-fidelity.** Kleuren, typografie, spacing en copy zijn definitief bedoeld. Pixel-perfect herbouwen met de bestaande thema-patterns. De foto's zijn Unsplash-placeholders — vervangen door eigen beeldmateriaal via de Shopify-editor (image_picker settings).

## Design tokens
| Token | Waarde |
|---|---|
| Crème (achtergrond) | `#FFFDF7` |
| Zand (sectie-afwisseling) | `#EEE9DC` |
| Donkergroen (knoppen, donkere secties) | `#2F5840` |
| Groen (accenten, links, kickers) | `#426F52` |
| Inkt (bodytekst op licht) | `#23322B` |
| Gedempte tekst op licht | `rgba(35,50,43,.62)` |
| Gedempte tekst op donker | `rgba(255,253,247,.72)` |
| Lijnen/borders | `rgba(47,88,64,.16)` |
| Accent licht-groen (badges) | `#C3CCA6` |
| Font UI/body | Instrument Sans (400/500/600/700) |
| Font accenten | Instrument Serif, vaak *italic* |
| Knoppen | pill (`border-radius: 999px`), primair donkergroen/crème |
| Kaarten | `border-radius: 12–18px`, 1–2px border, geen schaduw |
| Sectiepadding | 76–96px verticaal, content max-width 1320px |

Typografische schaal: h1 56px serif italic · h2 42px serif · kicker 12.5px caps `letter-spacing .22em` 700 · body 14.5–16.5px · klein 12.5–13.5px.

## Homepage — secties in volgorde
Referentie: `Homepage Verkenning.html` → artboard "Homepage · Shop eerst (v2)" (`stera-homepage-v2.jsx`).

1. **Announcement-bar** (44px, donkergroen): "Levering & installatie door eigen team — gratis vanaf € 750" met truck-icoon.
2. **Header** (88px, crème, 1px borderlijn): origineel logo (`assets/sterapro-logo.png`, hoogte 44px) · zoekveld pill ("Zoek op plant, pot of ruimte…") · nav: Assortiment / Diensten / Realisaties / Contact · ghost-knop "Mijn Stera Pro" met user-icoon · cart-icoon.
3. **Hero** (zand, 540px): links kicker "B2B · BESTEL MET JOUW PRIJZEN", h1 serif italic "Groene ruimtes die ademen", intro-paragraaf, knoppen "Shop het assortiment" (primair) + "Vraag jouw B2B-prijzen aan" (ghost), micro-regel met slot-icoon "Al klant? Log in en zie meteen jouw prijzen." Rechts foto (radius 18px).
4. **Categorieën** (crème): kop "Shop per categorie" + ghost-knop "Alles bekijken". 5 tegels (foto 250px h, radius 14): Kamerplanten · Potten & keramiek · Mosmuren · Hydrocultuur · Giftsets, elk met subregel en pijl-icoon. → koppelen aan echte collecties.
5. **USP-band** (donkergroen, 100px): 3 items met icoon — adviesmeting / levering eigen team / onderhoudscontract met digitale werkbon.
6. **Bestsellers** (crème): kop "Bewezen werkers voor elke ruimte", 4 productkaarten (wit, border, radius 14, foto 290px): naam, meta "↕ 160 cm · Ø 24 cm", en i.p.v. prijs: "Log in voor jouw prijzen" met slot-icoon (B2B: prijzen achter login). → featured collection.
7. **Voor wie** (zand): links kop "Oplossingen per ruimte" + 4 pill-chips (Kantoren & co-workings / Winkels & showrooms / Praktijken & wachtkamers / Relatiegeschenken & teams), rechts 2 foto's waarvan de tweede 36px verticaal verspringt.
8. **Realisaties** (crème): kop "Groen dat al ademt" + 3 stats (serif italic 52px, waarden nog "XX" — echte cijfers invullen) + rij van 4 foto's (170px h).
9. **Mijn Stera Pro** (donkergroen): kop "Alles in *Mijn Stera Pro*", 3 feature-chips (QR-plantpaspoort / werkbonnen / offertes tekenen), knop "Naar Mijn Stera Pro" → app.sterapro.be. Rechts browser-mockup met app-screenshot.
10. **Advies-CTA** (donkergroene kaart radius 22 op crème): "Twijfel je wat past bij jouw ruimte?" + uitleg lichtmeting/vochtmeting + checkregel "Het adviesbezoek wordt volledig verrekend bij je eerste bestelling." Knoppen: "Plan een adviesbezoek" (crème) + ghost mail-variant.
11. **Footer** (donkergroen, 300px): logo in lichte versie (logo-PNG met CSS-filter of apart wit logobestand), tagline, 3 kolommen (Aanbod / Diensten / Contact), onderbalk met © en policies.

### Shopify-implementatie homepage
- Herbruik bestaande sections waar mogelijk (hero, collection-links, featured-collection, marquee → USP-band kan custom).
- Secties 3/7 (zand) en 5/9/10/11 (donkergroen) als color schemes — leg crème/zand/donkergroen vast als schemes in `settings_data.json` en ruim de Tinker-restkleuren op (zie "Thema-fixes" artboard in `Homepage Verkenning.html`: grijze/zwarte secondary buttons, zwart-op-zwart inputs in scheme-2, dubbele h1, basistekst 14→16px).
- Alle teksten/foto's als section/block settings zodat alles in de editor bewerkbaar blijft.

## Plantconfigurator
Referentie: `Plant Configurator.html` + `stera-configurator.jsx`.

### Flow & state
State: `{ step: 0-3, ans: {light, humid, care, size}, picked: plantIds[], pot: {lijn, kleur} }` — persistent in `localStorage` (`stera-configurator-v1`), "Opnieuw beginnen" rechtsboven reset alles.

**Stap 1 — Jouw ruimte.** 4 vragen, elk 3 optiekaarten (wit, border 1.5px, radius 14; actief = donkergroen met crème tekst):
- Licht: veel direct (`hoog`) / gefilterd (`medium`) / eerder donker (`laag`)
- Lucht: droog (airco/verwarming) / normaal / vochtig
- Zorg: zo makkelijk mogelijk (1) / beetje zorg mag (2) / onderhoud door Stera (3, badge "Aangeraden" in #C3CCA6)
- Grootte: S tot ±80cm / M 80–150 / L 150+
"Toon geschikte planten" pas actief als alle vier beantwoord.

**Stap 2 — Planten.** Filterlogica: exacte matches (licht ∈ plant.light && lucht ∈ plant.humid && care ≤ keuze && size == keuze) krijgen badge "Beste match"; daarnaast near-matches (zelfde zonder size-eis). Kaarten 4-koloms, multi-select met checkmark rechtsboven, zorgniveau als ●●○. **Lege-resultaten-state**: nooit een dode muur — zandkleurige kaart "Een uitdagende combinatie — net iets voor ons." + CTA adviesbezoek met lichtmeting.

**Stap 3 — Potten.** 3 lijnen: Mat keramiek (Crème #F2EDDF, Salie #B8C4AC, Terracotta #C97F5E, Antraciet #3A3D3B) · Structuur & ribbel (Zand #E3D7BF, Mos #7E8B6F, Roest #A85E3F) · Metaal-look (Tin #9DA3A6, Brons #7A6A55, Zwart staal #2B2D2E). Kleurswatches 44px rond; één lijn+kleur geldt voor de hele selectie. Potmaat = plantpot-Ø + 6cm, automatisch.

**Stap 4 — Overzicht.** Lijst geselecteerde planten (thumbnail, naam + latijnse naam, "in mat keramiek 'Salie' Ø 30 cm", "Jouw prijs na login"). Rechts donkergroene kaart "Klaar om te groeien?" met "Vraag offerte aan" (primair) en "Liever eerst een adviesbezoek?" (ghost) + verrekenregel.

Stepper in de header: 4 stappen met nummer-bolletjes, afgewerkte stappen krijgen ✓ in groen.

### Plantendata (referentieset — vervangen door echte Nieuwkoop-data)
Zie `CFG_PLANTS` in `stera-configurator.jsx`: 12 soorten met velden `{name, latin, h(cm), pot(Ø cm), light[], humid[], care 1-3, size S/M/L}`. Dekking is zo gekozen dat vrijwel elke antwoordcombinatie ≥1 resultaat geeft. **Aanrader:** deze attributen als metafields op producten zetten (bv. namespace `configurator`: `light`, `humidity`, `care_level`, `size_class`) en de filtering daarop laten lopen — dan blijft de data beheerbaar vanuit Shopify/de SteraPro-app-sync.

### Implementatie-opties
1. **Shopify-page + custom section** (`page.configurator.json` + section met vanilla JS web component, patroon zoals bestaande `*-custom.js` assets) — producten via metafields-query of een JSON-config in section settings.
2. **In de SteraPro-app (Next.js)** en embedden/linken vanuit de shop — handig omdat de Nieuwkoop-sync daar al leeft.
Keuze afstemmen op waar de productdata het rijkst is; de UI-spec hierboven blijft identiek.

## Interacties & detail
- Hover/active: kaarten krijgen enkel border-kleurwissel (geen schaduwen), transitie `.15s ease`.
- Knoppen: geen uppercase, pill-vorm, icoon 15–17px naast label met 10px gap.
- Iconen: 24px-grid lijniconen, stroke 1.6, `stroke-linecap: round` (zie `SIcon*` in `stera-shared.jsx`).
- Geen emoji, geen gradients, geen schaduw-zware kaarten.

## Assets
- `assets/sterapro-logo.png` — origineel logo (donkergroen op transparant). Lichte versie voor footer: CSS `filter: brightness(0) invert(0.96)` of een echt wit logobestand.
- Alle foto's zijn Unsplash-placeholders → vervangen door eigen fotografie/Nieuwkoop-beelden.
- App-screenshot voor de portaalsectie: aanleveren uit app.sterapro.be.

## Bestanden in dit pakket
- `Homepage Verkenning.html` — canvas met de uitgewerkte homepage (artboard "Homepage · Shop eerst (v2)"), het archief van beide richtingen, de productkaart en het bord "Thema-fixes".
- `stera-homepage-v2.jsx` — de uitgewerkte homepage (hoofdreferentie).
- `stera-shared.jsx` — design tokens (`SC`), iconen, knoppen, kaarten, footer, advies-CTA.
- `Plant Configurator.html` + `stera-configurator.jsx` — de werkende configurator.
- `stera-variant-a.jsx` / `stera-variant-b.jsx` — archief van de twee verkende richtingen.
- `design-canvas.jsx`, `image-slot.js` — canvas-hulpbestanden, géén implementatiedoel.
- `assets/sterapro-logo.png` — logo.
