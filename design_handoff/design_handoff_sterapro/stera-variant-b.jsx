// Stera Pro — Homepage Variant B · "Shop eerst"
// Volgorde: header+zoek → compacte hero → categorieën → USP-band → bestsellers
//           → voor wie → bewijs → portaal → CTA → footer
// Totale hoogte: 96+500+660+120+720+460+460+520+380+300 = 4216

function VBHeader() {
  const link = { fontFamily: SC.sans, fontSize: 14.5, fontWeight: 500, color: SC.deep, cursor: 'pointer', whiteSpace: 'nowrap' };
  return (
    <header style={{ height: 96, background: SC.creme, borderBottom: `1px solid ${SC.line}`, display: 'flex', alignItems: 'center' }}>
      <div style={{ width: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 36 }}>
        <Wordmark />
        <div style={{
          flex: 1, maxWidth: 460, display: 'flex', alignItems: 'center', gap: 12,
          border: `1.5px solid ${SC.line}`, borderRadius: 999, padding: '12px 20px', color: SC.mut,
          fontFamily: SC.sans, fontSize: 14.5, background: '#fff',
        }}>
          <SIconSearch size={17} /> Zoek op plant, pot of ruimte…
        </div>
        <nav style={{ display: 'flex', gap: 26 }}>
          <span style={link}>Assortiment</span>
          <span style={link}>Diensten</span>
          <span style={link}>Realisaties</span>
          <span style={link}>Contact</span>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <BtnGhost small><SIconUser size={16} /> Mijn Stera Pro</BtnGhost>
          <span style={{ color: SC.deep }}><SIconCart size={20} /></span>
        </div>
      </div>
    </header>
  );
}

function VBHero() {
  return (
    <section style={{ height: 500, background: SC.sand, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', height: '100%', display: 'flex', alignItems: 'center', gap: 64 }}>
        <div style={{ flex: '0 0 560px' }}>
          <div style={{ fontFamily: SC.sans, fontWeight: 700, fontSize: 12.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: SC.green }}>
            B2B · Bestel met jouw prijzen
          </div>
          <h1 style={{ margin: '16px 0 0', fontFamily: SC.serif, fontWeight: 400, fontStyle: 'italic', fontSize: 56, lineHeight: 1.08, color: SC.deep, letterSpacing: '-0.01em', textWrap: 'pretty' }}>
            Groene ruimtes die ademen
          </h1>
          <p style={{ margin: '18px 0 0', fontFamily: SC.sans, fontSize: 16.5, lineHeight: 1.6, color: SC.mut, maxWidth: 480, textWrap: 'pretty' }}>
            Sierbeplanting, mosmuren en onderhoud voor kantoren, winkels en praktijken.
            Bestel rechtstreeks, of laat je begeleiden met advies op locatie.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
            <BtnPrimary>Shop het assortiment <SIconArrow size={16} /></BtnPrimary>
            <BtnGhost>Vraag jouw B2B-prijzen aan</BtnGhost>
          </div>
        </div>
        <image-slot id="b-hero" shape="rounded" radius="18" placeholder="Sleep hier je hero-foto"
          style={{ flex: 1, height: 380 }}></image-slot>
      </div>
    </section>
  );
}

function VBCategorieen() {
  return (
    <section style={{ height: 660, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', paddingTop: 80 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <SectionHead kicker="Categorieën" title="Shop per categorie" />
          <BtnGhost small>Alles bekijken <SIconArrow size={15} /></BtnGhost>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 44 }}>
          <CategoryTile slotId="b-cat-planten" name="Kamerplanten" note="180+ soorten" imgH={250} />
          <CategoryTile slotId="b-cat-potten" name="Potten & keramiek" note="In je interieurstijl" imgH={250} />
          <CategoryTile slotId="b-cat-mos" name="Mosmuren" note="Op maat" imgH={250} />
          <CategoryTile slotId="b-cat-hydro" name="Hydrocultuur" note="Onderhoudsarm" imgH={250} />
          <CategoryTile slotId="b-cat-gift" name="Giftsets" note="Voor klanten & teams" imgH={250} />
        </div>
      </div>
    </section>
  );
}

function VBUspBand() {
  const item = { display: 'flex', alignItems: 'center', gap: 12, fontFamily: SC.sans, fontSize: 15, fontWeight: 500, color: SC.creme };
  return (
    <section style={{ height: 120, background: SC.deep, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <div style={item}><SIconRuler size={20} /> Advies met licht- &amp; vochtmeting — verrekend bij bestelling</div>
        <div style={item}><SIconTruck size={20} /> Geleverd én geïnstalleerd door eigen team</div>
        <div style={item}><SIconDrop size={20} /> Onderhoudscontracten met digitale werkbon</div>
      </div>
    </section>
  );
}

function VBBestsellers() {
  return (
    <section style={{ height: 720, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', paddingTop: 88 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <SectionHead kicker="Meest gekozen" title="Bewezen werkers voor elke ruimte"
            sub="Soorten die het goed doen op kantoor: sterk, luchtzuiverend en mooi om naar te kijken." />
          <BtnGhost small>Naar het assortiment <SIconArrow size={15} /></BtnGhost>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 44 }}>
          <ProductCard slotId="b-prod-1" name="Ficus lyrata" meta="↕ 160 cm · Ø 24 cm" imgH={290} />
          <ProductCard slotId="b-prod-2" name="Kentia — Howea forsteriana" meta="↕ 180 cm · Ø 27 cm" imgH={290} />
          <ProductCard slotId="b-prod-3" name="Strelitzia nicolai" meta="↕ 170 cm · Ø 26 cm" imgH={290} />
          <ProductCard slotId="b-prod-4" name="Monstera deliciosa" meta="↕ 120 cm · Ø 24 cm" imgH={290} />
        </div>
      </div>
    </section>
  );
}

function VBVoorWie() {
  const chip = (label) => (
    <span style={{
      fontFamily: SC.sans, fontWeight: 600, fontSize: 14.5, color: SC.deep,
      border: `1.5px solid ${SC.line}`, borderRadius: 999, padding: '12px 22px', background: '#fff',
      display: 'inline-flex', alignItems: 'center', gap: 9, cursor: 'pointer',
    }}>{label} <SIconArrow size={14} /></span>
  );
  return (
    <section style={{ height: 460, background: SC.sand, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', paddingTop: 76, display: 'flex', gap: 80 }}>
        <div style={{ flex: '0 0 480px' }}>
          <SectionHead kicker="Voor wie" title="Oplossingen per ruimte"
            sub="Liever inspiratie dan een catalogus? Start vanuit jouw type ruimte en ontdek wat er werkt." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 30, maxWidth: 460 }}>
            {chip('Kantoren & co-workings')}
            {chip('Winkels & showrooms')}
            {chip('Praktijken & wachtkamers')}
            {chip('Relatiegeschenken & teams')}
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', gap: 20 }}>
          <image-slot id="b-wie-1" shape="rounded" radius="14" placeholder="Sfeerbeeld — kantoor" style={{ flex: 1, height: 300 }}></image-slot>
          <image-slot id="b-wie-2" shape="rounded" radius="14" placeholder="Sfeerbeeld — winkel of praktijk" style={{ flex: 1, height: 300, marginTop: 36 }}></image-slot>
        </div>
      </div>
    </section>
  );
}

function VBBewijs() {
  return (
    <section style={{ height: 460, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', paddingTop: 80 }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 420px' }}>
            <SectionHead kicker="Realisaties" title="Groen dat al ademt"
              sub="Een greep uit de ruimtes die we inrichtten en onderhouden — van kantoor tot mosmuur." />
            <div style={{ marginTop: 28 }}><BtnGhost small>Bekijk realisaties <SIconArrow size={15} /></BtnGhost></div>
          </div>
          <div style={{ flex: 1, display: 'flex', gap: 48, justifyContent: 'flex-end', paddingTop: 8 }}>
            <StatItem value="XX" label="locaties in onderhoud" />
            <StatItem value="XX" label="jaar groene ervaring" />
            <StatItem value="XX m²" label="mosmuur geplaatst" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20, marginTop: 40 }}>
          <image-slot id="b-real-1" shape="rounded" radius="12" placeholder="Realisatie 1" style={{ flex: 1, height: 150 }}></image-slot>
          <image-slot id="b-real-2" shape="rounded" radius="12" placeholder="Realisatie 2" style={{ flex: 1, height: 150 }}></image-slot>
          <image-slot id="b-real-3" shape="rounded" radius="12" placeholder="Realisatie 3" style={{ flex: 1, height: 150 }}></image-slot>
          <image-slot id="b-real-4" shape="rounded" radius="12" placeholder="Realisatie 4" style={{ flex: 1, height: 150 }}></image-slot>
        </div>
      </div>
    </section>
  );
}

function VBPortal() {
  return (
    <section style={{ height: 520, background: SC.deep, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', paddingTop: 84, display: 'flex', gap: 80, alignItems: 'flex-start' }}>
        <div style={{ flex: '0 0 480px' }}>
          <SectionHead light kicker="Voor klanten" title={<span>Alles in <em style={{ fontStyle: 'italic' }}>Mijn Stera Pro</em></span>}
            sub="Eenmaal klant volg je planten, onderhoudsbezoeken, werkbonnen en offertes op één plek — app.sterapro.be." />
          <div style={{ display: 'flex', gap: 28, marginTop: 32, fontFamily: SC.sans, fontSize: 14, color: SC.mutLight }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><SIconQR size={16} /> Plantpaspoort</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><SIconFile size={16} /> Werkbonnen</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><SIconCheck size={16} /> Offertes tekenen</span>
          </div>
          <div style={{ marginTop: 32 }}><BtnPrimary light small>Naar Mijn Stera Pro <SIconArrow size={15} /></BtnPrimary></div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ background: 'rgba(255,253,247,.08)', borderRadius: 18, padding: 16 }}>
            <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ height: 34, background: '#F4F1E8', display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px' }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D2C0' }}></span>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D2C0' }}></span>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D2C0' }}></span>
                <span style={{ marginLeft: 12, fontFamily: SC.sans, fontSize: 12, color: SC.mut }}>app.sterapro.be</span>
              </div>
              <image-slot id="b-portal-shot" shape="rect" placeholder="Screenshot van Mijn Stera Pro"
                style={{ width: '100%', height: 270, display: 'block' }}></image-slot>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VariantB() {
  return (
    <div className="stera" style={{ width: 1440, background: SC.creme }}>
      <VBHeader />
      <VBHero />
      <VBCategorieen />
      <VBUspBand />
      <VBBestsellers />
      <VBVoorWie />
      <VBBewijs />
      <VBPortal />
      <AdviceCTA height={380} />
      <SiteFooter height={300} />
    </div>
  );
}

window.VariantB = VariantB;
