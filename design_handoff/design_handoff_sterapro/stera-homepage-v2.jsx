// Stera Pro — Homepage "Shop eerst" · UITGEWERKT (v2)
// Origineel logo (assets/sterapro-logo.png), foto's ingevuld (vervangbaar door slepen).
// Sectiehoogtes: 132+540+640+100+740+480+540+520+380+300 = 4372

const v2img = (id, w = 900) => `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

function V2Logo({ light, h = 44 }) {
  return (
    <img src="assets/sterapro-logo.png" alt="Stera Pro" style={{
      height: h, width: 'auto', display: 'block',
      filter: light ? 'brightness(0) invert(0.96)' : 'none',
    }} />
  );
}

function V2Header() {
  const link = { fontFamily: SC.sans, fontSize: 14.5, fontWeight: 500, color: SC.deep, cursor: 'pointer', whiteSpace: 'nowrap' };
  return (
    <div data-screen-label="Header">
      <div style={{ height: 44, background: SC.deep, color: SC.creme, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: SC.sans, fontSize: 13.5 }}>
        <SIconTruck size={15} /> Levering &amp; installatie door eigen team — gratis vanaf € 750
      </div>
      <header style={{ height: 88, background: SC.creme, borderBottom: `1px solid ${SC.line}`, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 32 }}>
          <V2Logo />
          <div style={{
            flex: 1, maxWidth: 420, display: 'flex', alignItems: 'center', gap: 12,
            border: `1.5px solid ${SC.line}`, borderRadius: 999, padding: '12px 20px', color: SC.mut,
            fontFamily: SC.sans, fontSize: 14.5, background: '#fff',
          }}>
            <SIconSearch size={17} /> Zoek op plant, pot of ruimte…
          </div>
          <nav style={{ display: 'flex', gap: 26, marginLeft: 'auto' }}>
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
    </div>
  );
}

function V2Hero() {
  return (
    <section data-screen-label="Hero" style={{ height: 540, background: SC.sand, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64 }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 22, fontFamily: SC.sans, fontSize: 13.5, color: SC.mut }}>
            <SIconLock size={14} /> Al klant? Log in en zie meteen jouw prijzen.
          </div>
        </div>
        <image-slot id="v2-hero" shape="rounded" radius="18" placeholder="Hero-foto"
          src={v2img('1524758631624-e2822e304c36', 1600)} style={{ flex: 1, height: 420 }}></image-slot>
      </div>
    </section>
  );
}

function V2Categorieen() {
  return (
    <section data-screen-label="Categorieën" style={{ height: 640, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', paddingTop: 88 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <SectionHead kicker="Categorieën" title="Shop per categorie" />
          <BtnGhost small>Alles bekijken <SIconArrow size={15} /></BtnGhost>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 44 }}>
          <CategoryTile slotId="v2-cat-planten" name="Kamerplanten" note="180+ soorten" imgH={250} src={v2img('1470058869958-2a77ade41c02', 700)} />
          <CategoryTile slotId="v2-cat-potten" name="Potten & keramiek" note="In je interieurstijl" imgH={250} src={v2img('1485955900006-10f4d324d411', 700)} />
          <CategoryTile slotId="v2-cat-mos" name="Mosmuren" note="Op maat" imgH={250} src={v2img('1518531933037-91b2f5f229cc', 700)} />
          <CategoryTile slotId="v2-cat-hydro" name="Hydrocultuur" note="Onderhoudsarm" imgH={250} src={v2img('1459156212016-c812468e2115', 700)} />
          <CategoryTile slotId="v2-cat-gift" name="Giftsets" note="Voor klanten & teams" imgH={250} src={v2img('1497250681960-ef046c08a56e', 700)} />
        </div>
      </div>
    </section>
  );
}

function V2UspBand() {
  const item = { display: 'flex', alignItems: 'center', gap: 12, fontFamily: SC.sans, fontSize: 15, fontWeight: 500, color: SC.creme };
  return (
    <section data-screen-label="USP-band" style={{ height: 100, background: SC.deep, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <div style={item}><SIconRuler size={20} /> Advies met licht- &amp; vochtmeting — verrekend bij bestelling</div>
        <div style={item}><SIconTruck size={20} /> Geleverd én geïnstalleerd door eigen team</div>
        <div style={item}><SIconDrop size={20} /> Onderhoudscontracten met digitale werkbon</div>
      </div>
    </section>
  );
}

function V2Bestsellers() {
  return (
    <section data-screen-label="Bestsellers" style={{ height: 740, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', paddingTop: 88 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <SectionHead kicker="Meest gekozen" title="Bewezen werkers voor elke ruimte"
            sub="Soorten die het goed doen op kantoor: sterk, luchtzuiverend en mooi om naar te kijken." />
          <BtnGhost small>Naar het assortiment <SIconArrow size={15} /></BtnGhost>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 44 }}>
          <ProductCard slotId="v2-prod-1" name="Ficus lyrata" meta="↕ 160 cm · Ø 24 cm" imgH={290} src={v2img('1521334884684-d80222895322', 700)} />
          <ProductCard slotId="v2-prod-2" name="Kentia — Howea forsteriana" meta="↕ 180 cm · Ø 27 cm" imgH={290} src={v2img('1463320726281-696a485928c7', 700)} />
          <ProductCard slotId="v2-prod-3" name="Strelitzia nicolai" meta="↕ 170 cm · Ø 26 cm" imgH={290} src={v2img('1416879595882-3373a0480b5b', 700)} />
          <ProductCard slotId="v2-prod-4" name="Monstera deliciosa" meta="↕ 120 cm · Ø 24 cm" imgH={290} src={v2img('1509423350716-97f9360b4e09', 700)} />
        </div>
      </div>
    </section>
  );
}

function V2VoorWie() {
  const chip = (label) => (
    <span style={{
      fontFamily: SC.sans, fontWeight: 600, fontSize: 14.5, color: SC.deep,
      border: `1.5px solid ${SC.line}`, borderRadius: 999, padding: '12px 22px', background: '#fff',
      display: 'inline-flex', alignItems: 'center', gap: 9, cursor: 'pointer',
    }}>{label} <SIconArrow size={14} /></span>
  );
  return (
    <section data-screen-label="Voor wie" style={{ height: 480, background: SC.sand, overflow: 'hidden' }}>
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
          <image-slot id="v2-wie-1" shape="rounded" radius="14" placeholder="Sfeerbeeld — kantoor"
            src={v2img('1497366216548-37526070297c', 900)} style={{ flex: 1, height: 300 }}></image-slot>
          <image-slot id="v2-wie-2" shape="rounded" radius="14" placeholder="Sfeerbeeld — winkel of praktijk"
            src={v2img('1493663284031-b7e3aefcae8e', 900)} style={{ flex: 1, height: 300, marginTop: 36 }}></image-slot>
        </div>
      </div>
    </section>
  );
}

function V2Bewijs() {
  return (
    <section data-screen-label="Realisaties" style={{ height: 540, background: SC.creme, overflow: 'hidden' }}>
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
          <image-slot id="v2-real-1" shape="rounded" radius="12" placeholder="Realisatie 1" src={v2img('1497366811353-6870744d04b2', 700)} style={{ flex: 1, height: 170 }}></image-slot>
          <image-slot id="v2-real-2" shape="rounded" radius="12" placeholder="Realisatie 2" src={v2img('1556761175-5973dc0f32e7', 700)} style={{ flex: 1, height: 170 }}></image-slot>
          <image-slot id="v2-real-3" shape="rounded" radius="12" placeholder="Realisatie 3" src={v2img('1524758631624-e2822e304c36', 700)} style={{ flex: 1, height: 170 }}></image-slot>
          <image-slot id="v2-real-4" shape="rounded" radius="12" placeholder="Realisatie 4" src={v2img('1441986300917-64674bd600d8', 700)} style={{ flex: 1, height: 170 }}></image-slot>
        </div>
      </div>
    </section>
  );
}

function V2Portal() {
  return (
    <section data-screen-label="Mijn Stera Pro" style={{ height: 520, background: SC.deep, overflow: 'hidden' }}>
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
              <image-slot id="v2-portal-shot" shape="rect" placeholder="Screenshot van Mijn Stera Pro"
                style={{ width: '100%', height: 270, display: 'block' }}></image-slot>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function V2Footer() {
  const col = { fontFamily: SC.sans, fontSize: 14, color: SC.mutLight, lineHeight: 2.1 };
  const head = { fontFamily: SC.sans, fontWeight: 700, fontSize: 12.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: SC.creme, marginBottom: 10 };
  return (
    <footer data-screen-label="Footer" style={{ height: 300, background: SC.deep, color: SC.creme, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ width: 1320, margin: '0 auto', flex: 1, display: 'flex', gap: 80, paddingTop: 56 }}>
        <div style={{ flex: '0 0 360px' }}>
          <V2Logo light h={40} />
          <p style={{ fontFamily: SC.sans, fontSize: 14, lineHeight: 1.6, color: SC.mutLight, marginTop: 18, maxWidth: 300, textWrap: 'pretty' }}>
            Sierbeplanting, mosmuren en onderhoud voor bedrijven in heel Vlaanderen.
          </p>
        </div>
        <div style={{ flex: 1 }}><div style={head}>Aanbod</div><div style={col}>Assortiment<br />Mosmuren<br />Relatiegeschenken</div></div>
        <div style={{ flex: 1 }}><div style={head}>Diensten</div><div style={col}>Advies op locatie<br />Levering &amp; installatie<br />Onderhoudscontracten</div></div>
        <div style={{ flex: 1 }}><div style={head}>Contact</div><div style={col}>jelle@sterapro.be<br />Mijn Stera Pro<br />B2B-account aanvragen</div></div>
      </div>
      <div style={{ borderTop: `1px solid ${SC.lineLight}`, height: 58, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', fontFamily: SC.sans, fontSize: 12.5, color: 'rgba(255,253,247,.5)' }}>
          <span>© 2026 Stera Pro — onderdeel van Stera</span>
          <span>Algemene voorwaarden · Privacy</span>
        </div>
      </div>
    </footer>
  );
}

function HomepageV2() {
  return (
    <div className="stera" style={{ width: 1440, background: SC.creme }}>
      <V2Header />
      <V2Hero />
      <V2Categorieen />
      <V2UspBand />
      <V2Bestsellers />
      <V2VoorWie />
      <V2Bewijs />
      <V2Portal />
      <AdviceCTA height={380} />
      <V2Footer />
    </div>
  );
}

window.HomepageV2 = HomepageV2;
