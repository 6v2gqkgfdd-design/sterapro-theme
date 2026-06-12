// Stera Pro — gedeelde huisstijl-componenten voor de homepage-verkenning
// Kleuren en typografie volgen het echte Shopify-thema (Tinker-basis):
// crème #FFFDF7 · donkergroen #426F52 / #2F5840 · zand #EEE9DC
// Instrument Sans (UI) + Instrument Serif (accenten, italic)

const SC = {
  creme: '#FFFDF7',
  sand: '#EEE9DC',
  green: '#426F52',
  deep: '#2F5840',
  ink: '#23322B',
  mut: 'rgba(35,50,43,.62)',
  mutLight: 'rgba(255,253,247,.72)',
  line: 'rgba(47,88,64,.16)',
  lineLight: 'rgba(255,253,247,.22)',
  serif: "'Instrument Serif', serif",
  sans: "'Instrument Sans', sans-serif",
};

/* ── Iconen (klein, lijnstijl) ─────────────────────────── */
function SIcon({ d, size = 18, sw = 1.6, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
      {d}
    </svg>
  );
}
const SIconArrow = (p) => <SIcon {...p} d={<path d="M4 12h16m-6-6 6 6-6 6" />} />;
const SIconLock = (p) => <SIcon {...p} d={<g><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></g>} />;
const SIconUser = (p) => <SIcon {...p} d={<g><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-3.2 3.6-5 7-5s6.2 1.8 7 5" /></g>} />;
const SIconCart = (p) => <SIcon {...p} d={<g><path d="M3 4h2l2.4 12.2A2 2 0 0 0 9.36 18h8.1a2 2 0 0 0 1.95-1.57L21 9H6" /><circle cx="9.5" cy="21" r="1" /><circle cx="17.5" cy="21" r="1" /></g>} />;
const SIconSearch = (p) => <SIcon {...p} d={<g><circle cx="11" cy="11" r="6.5" /><path d="m20 20-3.8-3.8" /></g>} />;
const SIconLeaf = (p) => <SIcon {...p} d={<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Zm0 0c2-5 5-8 9-10" />} />;
const SIconTruck = (p) => <SIcon {...p} d={<g><path d="M2 6h11v10H2zM13 9h4l3 3v4h-7" /><circle cx="6.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /></g>} />;
const SIconDrop = (p) => <SIcon {...p} d={<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />} />;
const SIconRuler = (p) => <SIcon {...p} d={<g><rect x="3" y="9" width="18" height="6" rx="1" /><path d="M7 9v3m3.5-3v3m3.5-3v3m3.5-3v3" /></g>} />;
const SIconQR = (p) => <SIcon {...p} d={<g><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><path d="M14 14h3v3h-3zm6 0v6h-6" /></g>} />;
const SIconFile = (p) => <SIcon {...p} d={<g><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></g>} />;
const SIconCal = (p) => <SIcon {...p} d={<g><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 10h16M8 3v4m8-4v4" /></g>} />;
const SIconCheck = (p) => <SIcon {...p} d={<path d="m5 13 4 4L19 7" />} />;

/* ── Wordmark ──────────────────────────────────────────── */
function Wordmark({ light, size = 27 }) {
  const col = light ? SC.creme : SC.deep;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: col }}>
      <span style={{ fontFamily: SC.serif, fontStyle: 'italic', fontSize: size, lineHeight: 1 }}>Stera</span>
      <span style={{
        fontFamily: SC.sans, fontWeight: 700, fontSize: size * 0.4, letterSpacing: '0.18em',
        border: `1.5px solid ${col}`, borderRadius: 999, padding: '3px 9px 2px 11px', lineHeight: 1,
      }}>PRO</span>
    </span>
  );
}

/* ── Knoppen ───────────────────────────────────────────── */
function BtnPrimary({ children, light, small }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer',
      background: light ? SC.creme : SC.deep, color: light ? SC.deep : SC.creme,
      fontFamily: SC.sans, fontWeight: 600, fontSize: small ? 14 : 15.5,
      padding: small ? '11px 22px' : '15px 30px', borderRadius: 999, whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}
function BtnGhost({ children, light, small }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer',
      color: light ? SC.creme : SC.deep, border: `1.5px solid ${light ? 'rgba(255,253,247,.55)' : 'rgba(47,88,64,.4)'}`,
      fontFamily: SC.sans, fontWeight: 600, fontSize: small ? 14 : 15.5,
      padding: small ? '10px 21px' : '14px 29px', borderRadius: 999, whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

/* ── Sectiekop ─────────────────────────────────────────── */
function SectionHead({ kicker, title, sub, light, center, maxW = 640 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left' }}>
      {kicker && <div style={{
        fontFamily: SC.sans, fontWeight: 700, fontSize: 12.5, letterSpacing: '0.22em', textTransform: 'uppercase',
        color: light ? 'rgba(255,253,247,.65)' : SC.green,
      }}>{kicker}</div>}
      <h2 style={{
        margin: 0, fontFamily: SC.serif, fontWeight: 400, fontSize: 42, lineHeight: 1.12, letterSpacing: '-0.01em',
        color: light ? SC.creme : SC.deep, textWrap: 'pretty', maxWidth: 560,
      }}>{title}</h2>
      {sub && <p style={{
        margin: 0, fontFamily: SC.sans, fontSize: 16.5, lineHeight: 1.6, maxWidth: maxW,
        color: light ? SC.mutLight : SC.mut, textWrap: 'pretty',
      }}>{sub}</p>}
    </div>
  );
}

/* ── Kaarten ───────────────────────────────────────────── */
function SegmentCard({ slotId, title, copy, imgH = 180, src }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1, minWidth: 0 }}>
      <image-slot id={slotId} shape="rounded" radius="14" placeholder={title} src={src}
        style={{ width: '100%', height: imgH, display: 'block' }}></image-slot>
      <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 18, color: SC.deep, marginTop: 18 }}>{title}</div>
      <p style={{ margin: '8px 0 0', fontFamily: SC.sans, fontSize: 14.5, lineHeight: 1.55, color: SC.mut, textWrap: 'pretty' }}>{copy}</p>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, fontFamily: SC.sans, fontWeight: 600, fontSize: 14, color: SC.green }}>
        Bekijk oplossingen <SIconArrow size={15} />
      </div>
    </div>
  );
}

function CategoryTile({ slotId, name, note, imgH = 290, src }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <image-slot id={slotId} shape="rounded" radius="14" placeholder={name} src={src}
        style={{ width: '100%', height: imgH, display: 'block' }}></image-slot>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
        <div>
          <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 17, color: SC.deep }}>{name}</div>
          {note && <div style={{ fontFamily: SC.sans, fontSize: 13.5, color: SC.mut, marginTop: 3 }}>{note}</div>}
        </div>
        <span style={{ color: SC.green }}><SIconArrow size={18} /></span>
      </div>
    </div>
  );
}

function ProductCard({ slotId, name, meta, imgH = 300, src }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0,
      background: '#fff', border: `1px solid ${SC.line}`, borderRadius: 14, overflow: 'hidden',
    }}>
      <image-slot id={slotId} shape="rect" placeholder={name} src={src} style={{ width: '100%', height: imgH, display: 'block' }}></image-slot>
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 15.5, color: SC.ink }}>{name}</div>
        <div style={{ fontFamily: SC.sans, fontSize: 13, color: SC.mut }}>{meta}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 8, color: SC.green, fontFamily: SC.sans, fontWeight: 600, fontSize: 13.5 }}>
          <SIconLock size={14} /> Log in voor jouw prijzen
        </div>
      </div>
    </div>
  );
}

function StepCard({ nr, icon, title, copy, chip }) {
  return (
    <div style={{ flex: 1, minWidth: 0, background: SC.creme, border: `1px solid ${SC.line}`, borderRadius: 16, padding: '28px 28px 26px', display: 'flex', flexDirection: 'column', gap: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: SC.serif, fontStyle: 'italic', fontSize: 30, color: SC.green }}>{nr}</span>
        <span style={{ color: SC.green }}>{icon}</span>
      </div>
      <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 19, color: SC.deep, marginTop: 16 }}>{title}</div>
      <p style={{ margin: '9px 0 0', fontFamily: SC.sans, fontSize: 14.5, lineHeight: 1.6, color: SC.mut, textWrap: 'pretty' }}>{copy}</p>
      {chip && <div style={{
        marginTop: 'auto', paddingTop: 16,
      }}><span style={{
        display: 'inline-block', fontFamily: SC.sans, fontWeight: 600, fontSize: 12.5,
        color: SC.deep, background: SC.sand, borderRadius: 999, padding: '7px 14px',
      }}>{chip}</span></div>}
    </div>
  );
}

function StatItem({ value, label, light }) {
  return (
    <div style={{ flex: 1, textAlign: 'center' }}>
      <div style={{ fontFamily: SC.serif, fontStyle: 'italic', fontSize: 52, lineHeight: 1, color: light ? SC.creme : SC.deep }}>{value}</div>
      <div style={{ fontFamily: SC.sans, fontSize: 14.5, marginTop: 10, color: light ? SC.mutLight : SC.mut }}>{label}</div>
    </div>
  );
}

function PortalFeature({ icon, title, copy }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <span style={{
        width: 42, height: 42, borderRadius: 12, background: SC.sand, color: SC.deep,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>{icon}</span>
      <div>
        <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 16, color: SC.deep }}>{title}</div>
        <div style={{ fontFamily: SC.sans, fontSize: 14, lineHeight: 1.55, color: SC.mut, marginTop: 3, textWrap: 'pretty' }}>{copy}</div>
      </div>
    </div>
  );
}

/* ── Footer ────────────────────────────────────────────── */
function SiteFooter({ height = 300 }) {
  const col = { fontFamily: SC.sans, fontSize: 14, color: SC.mutLight, lineHeight: 2.1 };
  const head = { fontFamily: SC.sans, fontWeight: 700, fontSize: 12.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: SC.creme, marginBottom: 10 };
  return (
    <footer style={{ height, background: SC.deep, color: SC.creme, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ width: 1200, margin: '0 auto', flex: 1, display: 'flex', gap: 80, paddingTop: 56 }}>
        <div style={{ flex: '0 0 360px' }}>
          <Wordmark light />
          <p style={{ fontFamily: SC.sans, fontSize: 14, lineHeight: 1.6, color: SC.mutLight, marginTop: 18, maxWidth: 300, textWrap: 'pretty' }}>
            Sierbeplanting, mosmuren en onderhoud voor bedrijven in heel Vlaanderen.
          </p>
        </div>
        <div style={{ flex: 1 }}><div style={head}>Aanbod</div><div style={col}>Assortiment<br />Mosmuren<br />Relatiegeschenken</div></div>
        <div style={{ flex: 1 }}><div style={head}>Diensten</div><div style={col}>Advies op locatie<br />Levering &amp; installatie<br />Onderhoudscontracten</div></div>
        <div style={{ flex: 1 }}><div style={head}>Contact</div><div style={col}>jelle@sterapro.be<br />Mijn Stera Pro<br />B2B-account aanvragen</div></div>
      </div>
      <div style={{ borderTop: `1px solid ${SC.lineLight}`, height: 58, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', fontFamily: SC.sans, fontSize: 12.5, color: 'rgba(255,253,247,.5)' }}>
          <span>© 2026 Stera Pro — onderdeel van Stera</span>
          <span>Algemene voorwaarden · Privacy</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Slot-CTA (adviesbezoek) ───────────────────────────── */
function AdviceCTA({ height = 420 }) {
  return (
    <section style={{ height, background: SC.creme, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{
        width: 1200, margin: '0 auto', background: SC.deep, borderRadius: 22,
        padding: '56px 64px', display: 'flex', alignItems: 'center', gap: 64,
      }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontFamily: SC.serif, fontWeight: 400, fontStyle: 'italic', fontSize: 38, lineHeight: 1.15, color: SC.creme, textWrap: 'pretty' }}>
            Twijfel je wat past bij jouw ruimte?
          </h2>
          <p style={{ margin: '16px 0 0', fontFamily: SC.sans, fontSize: 16, lineHeight: 1.6, color: SC.mutLight, maxWidth: 540, textWrap: 'pretty' }}>
            We komen langs op jouw locatie, meten licht en luchtvochtigheid, en werken een
            voorstel op maat uit — inclusief foto's en vaste prijzen.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18, fontFamily: SC.sans, fontSize: 14, color: SC.mutLight }}>
            <SIconCheck size={16} style={{ color: '#C3CCA6' }} />
            Het adviesbezoek wordt volledig verrekend bij je eerste bestelling.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-end' }}>
          <BtnPrimary light><SIconCal size={17} /> Plan een adviesbezoek</BtnPrimary>
          <BtnGhost light small>Of mail ons — antwoord binnen één werkdag</BtnGhost>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  SC, SIconArrow, SIconLock, SIconUser, SIconCart, SIconSearch, SIconLeaf, SIconTruck,
  SIconDrop, SIconRuler, SIconQR, SIconFile, SIconCal, SIconCheck,
  Wordmark, BtnPrimary, BtnGhost, SectionHead, SegmentCard, CategoryTile, ProductCard,
  StepCard, StatItem, PortalFeature, SiteFooter, AdviceCTA,
});
