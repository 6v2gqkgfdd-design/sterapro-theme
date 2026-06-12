# sterapro-theme — werkafspraken

## Harde regels

1. **Raak NOOIT iets aan dat met stera.be te maken heeft.** Deze repo is
   uitsluitend het thema van **sterapro.be** (Shopify-winkel 0ancs7-zs,
   "Stera Pro"). De winkel/het thema van stera.be is verboden terrein.
2. **`main` staat live gekoppeld** aan de webshop via de Shopify
   GitHub-integratie. Nooit rechtstreeks naar `main` pushen: werk in een
   feature-branch en test via een preview-thema in Shopify vóór de merge.
3. Volg de bestaande thema-architectuur (sections/blocks/JSON-templates);
   geen frameworks of build-stappen introduceren.

## Huisstijl Stera Pro

- Crème (achtergrond): `#FFFDF7` · crème-diep: `#F1EFE8`
- Donkergroen (accent/knoppen/logo): `#426F52` · soft `#608A6E` · diep `#2F5840`
- Tekst: zwart `#000`, secundair `#3F3F3F`
- Fonts: Instrument Sans (body/UI), Instrument Serif (display; wordmark
  in italic uppercase)
- Fotostijl: producten op warme beige achtergrond `#F3E1C6` met zachte
  schaduw (geautomatiseerde pipeline in de SteraPro-app-repo:
  `stera-style-photos.py`)
- Logo: groene blob "STERA" met verticale "PRO" rechts
  (assets-bestand `Zonder_titel_320_x_112_px_-3.png` in Shopify Files)

## Context

- B2B-webshop: prijzen pas zichtbaar na inloggen (Shopify B2B,
  wachtwoordloos). Klantenportaal: app.sterapro.be ("Mijn Stera Pro",
  bereikbaar via de blaadje-knop in de header, sectie in de Header-groep).
- Producten + voorraad worden gesynct vanuit Nieuwkoop via de
  SteraPro-app-repo (Supabase als bron van prijzen/marges). Productdata
  hier dus nooit hardcoden.
- Situatie-tags op producten: "Veel licht" / "Gemiddeld licht",
  hoogteklassen, "Hydrocultuur", "Ook voor buiten" — bruikbaar voor
  filters en secties.
