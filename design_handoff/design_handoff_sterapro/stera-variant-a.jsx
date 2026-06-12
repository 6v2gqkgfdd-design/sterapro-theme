// Stera Pro — Homepage Variant A · "Verhaal eerst"
// Volgorde: hero → voor wie → assortiment → werkwijze → bewijs → portaal → CTA → footer
// Totale hoogte: 44+88+620+760+720+660+580+560+420+300 = 4752

function VAHeader() {
  const link = { fontFamily: SC.sans, fontSize: 15, fontWeight: 500, color: SC.deep, cursor: 'pointer' };
  return (
    <div>
      <div style={{ height: 44, background: SC.deep, color: SC.creme, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: SC.sans, fontSize: 13.5 }}>
        <SIconTruck size={15} /> Levering &amp; installatie door eigen team — gratis vanaf € 750
      </div>
      <header style={{ height: 88, background: SC.creme, borderBottom: `1px solid ${SC.line}`, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 40 }}>
          <Wordmark />
          <nav style={{ display: 'flex', gap: 30, flex: 1, justifyContent: 'center' }}>
            <span style={link}>Assortiment</span>
            <span style={link}>Diensten</span>
            <span style={link}>Realisaties</span>
            <span style={link}>Over Stera</span>
            <span style={link}>Contact</span>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <BtnGhost small><SIconUser size={16} /> Mijn Stera Pro</BtnGhost>
            <span style={{ color: SC.deep }}><SIconCart size={20} /></span>
          </div>
        </div>
      </header>
    </div>
  );
}

function VAHero() {
  return (
    <section style={{ position: 'relative', height: 620, overflow: 'hidden' }}>
      <image-slot id="a-hero" shape="rect" placeholder="Sleep hier je hero-foto (groene kantoorruimte)"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></image-slot>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(31,46,38,.78) 0%, rgba(31,46,38,.25) 45%, rgba(31,46,38,0) 75%)',
      }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 56, pointerEvents: 'none' }}>
        <div style={{ width: 1200, margin: '0 auto', color: SC.creme }}>
          <div style={{ fontFamily: SC.sans, fontWeight: 700, fontSize: 12.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,253,247,.75)' }}>
            B2B · Sierbeplanting, mosmuren &amp; onderhoud
          </div>
          <h1 style={{ margin: '14px 0 0', fontFamily: SC.serif, fontWeight: 400, fontStyle: 'italic', fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            Groene ruimtes die ademen
          </h1>
          <p style={{ margin: '18px 0 0', fontFamily: SC.sans, fontSize: 17.5, lineHeight: 1.6, maxWidth: 560, color: 'rgba(255,253,247,.88)', textWrap: 'pretty' }}>
            Voor kantoren, winkels en praktijken — van advies en installatie tot onderhoud,
            volledig ontzorgd door één team.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, pointerEvents: 'auto' }}>
            <BtnPrimary light>Ontdek het assortiment <SIconArrow size={16} /></BtnPrimary>
            <BtnGhost light><SIconCal size={16} /> Plan een adviesbezoek</BtnGhost>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20, fontFamily: SC.sans, fontSize: 13.5, color: 'rgba(255,253,247,.7)' }}>
            <SIconLock size={14} /> Al klant? Log in en bestel rechtstreeks met jouw prijzen.
          </div>
        </div>
      </div>
    </section>
  );
}

function VAVoorWie() {
  return (
    <section style={{ height: 760, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1200, margin: '0 auto', paddingTop: 96 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <SectionHead kicker="Voor wie" title={<span>Groen dat werkt voor <em style={{ fontStyle: 'italic' }}>jouw</em> ruimte</span>}
            sub="Elke omgeving vraagt iets anders. We denken mee vanuit jouw type ruimte — niet vanuit een catalogus." />
        </div>
        <div style={{ display: 'flex', gap: 28, marginTop: 52 }}>
          <SegmentCard slotId="a-seg-kantoor" title="Kantoren & co-workings"
            copy="Groene werkplekken die rust brengen, de akoestiek zacht maken en het team helpen focussen." />
          <SegmentCard slotId="a-seg-winkel" title="Winkels & showrooms"
            copy="Planten en styling die je producten laten opvallen en je zaak een warme, uitnodigende sfeer geven." />
          <SegmentCard slotId="a-seg-praktijk" title="Praktijken & wachtkamers"
            copy="Rustige, zachte groene accenten die klanten of patiënten meteen op hun gemak stellen." />
          <SegmentCard slotId="a-seg-gift" title="Relatiegeschenken & teams"
            copy="Groene cadeaus voor klanten en collega's: van kleine plantjes tot samengestelde giftsets." />
        </div>
      </div>
    </section>
  );
}

function VAAssortiment() {
  return (
    <section style={{ height: 720, background: SC.sand, overflow: 'hidden' }}>
      <div style={{ width: 1200, margin: '0 auto', paddingTop: 88 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <SectionHead kicker="Assortiment" title="Ontdek ons assortiment"
            sub="Rechtstreeks uit de Nieuwkoop-catalogus, geselecteerd en geleverd door ons team." />
          <BtnGhost small>Volledig assortiment <SIconArrow size={15} /></BtnGhost>
        </div>
        <div style={{ display: 'flex', gap: 28, marginTop: 48 }}>
          <CategoryTile slotId="a-cat-planten" name="Kamerplanten" note="Van bureau tot vide" imgH={280} />
          <CategoryTile slotId="a-cat-potten" name="Potten & keramiek" note="Afgestemd op je interieur" imgH={280} />
          <CategoryTile slotId="a-cat-mos" name="Mosmuren" note="Op maat ontworpen" imgH={280} />
          <CategoryTile slotId="a-cat-gift" name="Giftsets" note="Voor klanten & teams" imgH={280} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 32, fontFamily: SC.sans, fontSize: 14, color: SC.mut }}>
          <SIconLock size={15} /> Prijzen op maat van jouw bedrijf — <span style={{ fontWeight: 600, color: SC.green }}>log in</span> of <span style={{ fontWeight: 600, color: SC.green }}>vraag een B2B-account aan</span>.
        </div>
      </div>
    </section>
  );
}

function VAWerkwijze() {
  return (
    <section style={{ height: 660, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1200, margin: '0 auto', paddingTop: 96 }}>
        <SectionHead kicker="Zo werkt het" title="Van eerste advies tot blijvend groen"
          sub="Je hoeft zelf geen plantenkennis in huis te hebben — wij nemen elke stap uit handen." />
        <div style={{ display: 'flex', gap: 28, marginTop: 52, height: 300 }}>
          <StepCard nr="01" icon={<SIconRuler size={22} />} title="Advies op jouw locatie"
            copy="We meten licht en luchtvochtigheid, bekijken je ruimte en werken een voorstel op maat uit — met foto's en vaste prijzen."
            chip="Verrekend bij je eerste bestelling" />
          <StepCard nr="02" icon={<SIconTruck size={22} />} title="Levering & installatie"
            copy="Ons eigen team levert, plaatst elke plant op de juiste plek en neemt al het verpakkingsmateriaal terug mee."
            chip="Gratis vanaf € 750" />
          <StepCard nr="03" icon={<SIconDrop size={22} />} title="Onderhoud zonder zorgen"
            copy="Elke plant vertrekt met professioneel substraat en watermeter. Liever volledig ontzorgd? Kies een onderhoudscontract."
            chip="Met werkbon na elk bezoek" />
        </div>
      </div>
    </section>
  );
}

function VABewijs() {
  return (
    <section style={{ height: 580, background: SC.deep, overflow: 'hidden' }}>
      <div style={{ width: 1200, margin: '0 auto', paddingTop: 80 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <SectionHead light kicker="Realisaties" title="Groen dat al ademt"
            sub="Een greep uit de ruimtes die we inrichtten en onderhouden." />
          <div style={{ display: 'flex', gap: 56, paddingBottom: 6 }}>
            <StatItem light value="XX" label="locaties in onderhoud" />
            <StatItem light value="XX" label="jaar groene ervaring" />
            <StatItem light value="XX m²" label="mosmuur geplaatst" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 48 }}>
          <image-slot id="a-real-1" shape="rounded" radius="14" placeholder="Realisatie — kantoor" style={{ flex: 1, height: 240 }}></image-slot>
          <image-slot id="a-real-2" shape="rounded" radius="14" placeholder="Realisatie — mosmuur" style={{ flex: 1, height: 240 }}></image-slot>
          <image-slot id="a-real-3" shape="rounded" radius="14" placeholder="Realisatie — horeca of winkel" style={{ flex: 1, height: 240 }}></image-slot>
        </div>
      </div>
    </section>
  );
}

function VAPortal() {
  return (
    <section style={{ height: 560, background: SC.creme, overflow: 'hidden' }}>
      <div style={{ width: 1200, margin: '0 auto', paddingTop: 88, display: 'flex', gap: 80, alignItems: 'flex-start' }}>
        <div style={{ flex: '0 0 480px' }}>
          <SectionHead kicker="Voor klanten" title={<span>Alles in <em style={{ fontStyle: 'italic' }}>Mijn Stera Pro</em></span>}
            sub="Eenmaal klant volg je alles op één plek — van elke plant tot elk onderhoudsbezoek." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 36 }}>
            <PortalFeature icon={<SIconQR size={20} />} title="Elke plant heeft een paspoort"
              copy="Via QR-codes zie je per plant de locatie, foto's en historiek." />
            <PortalFeature icon={<SIconFile size={20} />} title="Werkbonnen & contracten"
              copy="Elk onderhoudsbezoek wordt afgesloten met een digitale werkbon." />
            <PortalFeature icon={<SIconLeaf size={20} />} title="Offertes, digitaal ondertekend"
              copy="Voorstellen bekijk en onderteken je rechtstreeks in het portaal." />
          </div>
        </div>
        <div style={{ flex: 1, paddingTop: 12 }}>
          <div style={{ background: SC.sand, borderRadius: 18, padding: 18 }}>
            <div style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', border: `1px solid ${SC.line}` }}>
              <div style={{ height: 36, background: '#F4F1E8', display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px' }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D2C0' }}></span>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D2C0' }}></span>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#D8D2C0' }}></span>
                <span style={{ marginLeft: 12, fontFamily: SC.sans, fontSize: 12, color: SC.mut }}>app.sterapro.be</span>
              </div>
              <image-slot id="a-portal-shot" shape="rect" placeholder="Screenshot van Mijn Stera Pro"
                style={{ width: '100%', height: 300, display: 'block' }}></image-slot>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VariantA() {
  return (
    <div className="stera" style={{ width: 1440, background: SC.creme }}>
      <VAHeader />
      <VAHero />
      <VAVoorWie />
      <VAAssortiment />
      <VAWerkwijze />
      <VABewijs />
      <VAPortal />
      <AdviceCTA height={420} />
      <SiteFooter height={300} />
    </div>
  );
}

window.VariantA = VariantA;
