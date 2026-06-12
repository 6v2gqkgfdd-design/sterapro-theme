// Stera Pro — Plantconfigurator · interactief prototype
// Flow: 1 Jouw ruimte → 2 Planten → 3 Potten → 4 Overzicht
// Reuses SC tokens + components from stera-shared.jsx (window globals).

const cfgImg = (id, w = 700) => `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

/* ── Data ──────────────────────────────────────────────── */
const CFG_PLANTS = [
  { id: 'sansevieria', name: 'Sansevieria', latin: 'Dracaena trifasciata', h: 90, pot: 21, light: ['laag', 'medium', 'hoog'], humid: ['droog', 'normaal'], care: 1, size: 'M', img: cfgImg('1416879595882-3373a0480b5b') },
  { id: 'zamioculcas', name: 'Zamioculcas', latin: 'ZZ-plant', h: 100, pot: 24, light: ['laag', 'medium'], humid: ['droog', 'normaal'], care: 1, size: 'M', img: cfgImg('1459156212016-c812468e2115') },
  { id: 'kentia', name: 'Kentia', latin: 'Howea forsteriana', h: 180, pot: 27, light: ['medium'], humid: ['normaal'], care: 2, size: 'L', img: cfgImg('1470058869958-2a77ade41c02') },
  { id: 'ficus-lyrata', name: 'Ficus lyrata', latin: 'Vioolbladplant', h: 160, pot: 24, light: ['medium', 'hoog'], humid: ['normaal'], care: 2, size: 'L', img: cfgImg('1521334884684-d80222895322') },
  { id: 'monstera', name: 'Monstera', latin: 'Monstera deliciosa', h: 120, pot: 24, light: ['medium'], humid: ['normaal', 'vochtig'], care: 1, size: 'M', img: cfgImg('1545241047-6083a3684587') },
  { id: 'strelitzia', name: 'Strelitzia', latin: 'Strelitzia nicolai', h: 170, pot: 26, light: ['hoog'], humid: ['normaal'], care: 2, size: 'L', img: cfgImg('1524758631624-e2822e304c36') },
  { id: 'dracaena', name: 'Dracaena', latin: "'Janet Craig'", h: 140, pot: 24, light: ['laag', 'medium'], humid: ['droog', 'normaal'], care: 1, size: 'L', img: cfgImg('1518531933037-91b2f5f229cc') },
  { id: 'spathiphyllum', name: 'Lepelplant', latin: 'Spathiphyllum', h: 70, pot: 19, light: ['laag', 'medium'], humid: ['normaal', 'vochtig'], care: 1, size: 'S', img: cfgImg('1485955900006-10f4d324d411') },
  { id: 'chamaedorea', name: 'Bergpalm', latin: 'Chamaedorea elegans', h: 110, pot: 21, light: ['laag', 'medium'], humid: ['normaal', 'vochtig'], care: 2, size: 'M', img: cfgImg('1463320726281-696a485928c7') },
  { id: 'philodendron', name: 'Philodendron', latin: 'Ph. scandens', h: 50, pot: 17, light: ['laag', 'medium'], humid: ['normaal', 'vochtig'], care: 1, size: 'S', img: cfgImg('1497250681960-ef046c08a56e') },
  { id: 'calathea', name: 'Calathea', latin: 'C. orbifolia', h: 60, pot: 19, light: ['medium'], humid: ['vochtig'], care: 3, size: 'S', img: cfgImg('1509423350716-97f9360b4e09') },
  { id: 'yucca', name: 'Yucca', latin: 'Yucca elephantipes', h: 150, pot: 26, light: ['hoog'], humid: ['droog', 'normaal'], care: 1, size: 'L', img: cfgImg('1493663284031-b7e3aefcae8e') },
];

const CFG_POTS = [
  { id: 'mat', name: 'Mat keramiek', note: 'Tijdloos, zacht oppervlak', colors: [['Crème', '#F2EDDF'], ['Salie', '#B8C4AC'], ['Terracotta', '#C97F5E'], ['Antraciet', '#3A3D3B']] },
  { id: 'ribbel', name: 'Structuur & ribbel', note: 'Met reliëf, warm en ambachtelijk', colors: [['Zand', '#E3D7BF'], ['Mos', '#7E8B6F'], ['Roest', '#A85E3F']] },
  { id: 'metaal', name: 'Metaal-look', note: 'Strak, voor moderne kantoren', colors: [['Tin', '#9DA3A6'], ['Brons', '#7A6A55'], ['Zwart staal', '#2B2D2E']] },
];

const CFG_STEPS = ['Jouw ruimte', 'Planten', 'Potten', 'Overzicht'];

const CFG_Q = [
  {
    key: 'light', title: 'Hoeveel licht valt er binnen?', sub: 'Kijk naar de plek waar de planten komen, niet naar het raam zelf.',
    opts: [
      { v: 'hoog', t: 'Veel direct licht', d: 'Grote ramen op zuid, vlak bij het glas' },
      { v: 'medium', t: 'Licht, maar gefilterd', d: 'Heldere ruimte, niet pal in de zon' },
      { v: 'laag', t: 'Eerder donker', d: 'Verder van het raam, gangen, noordkant' },
    ],
  },
  {
    key: 'humid', title: 'Hoe is de lucht in de ruimte?', sub: 'Airco en verwarming drogen de lucht sterk uit.',
    opts: [
      { v: 'droog', t: 'Droog', d: 'Airco of stevige verwarming draait vaak' },
      { v: 'normaal', t: 'Normaal', d: 'Gewoon binnenklimaat' },
      { v: 'vochtig', t: 'Vochtig', d: 'Atrium, sanitair, veel verluchting' },
    ],
  },
  {
    key: 'care', title: 'Hoeveel zorg mag de plant vragen?', sub: 'Met een onderhoudscontract nemen wij dit volledig over.',
    opts: [
      { v: 1, t: 'Zo makkelijk mogelijk', d: 'Sterk, vergeeft een gemiste waterbeurt' },
      { v: 2, t: 'Een beetje zorg mag', d: 'Iemand houdt er wekelijks een oog op' },
      { v: 3, t: 'Wij kiezen onderhoud door Stera', d: 'Alles kan — wij komen langs', badge: 'Aangeraden' },
    ],
  },
  {
    key: 'size', title: 'Hoe groot mogen de planten zijn?', sub: 'Je kan dit per plant nog verfijnen in het voorstel.',
    opts: [
      { v: 'S', t: 'Compact', d: 'Tot ± 80 cm — bureaus, balies, vensterbanken' },
      { v: 'M', t: 'Middelgroot', d: '80 – 150 cm — accenten in de ruimte' },
      { v: 'L', t: 'Groot', d: '150 cm + — blikvangers en zonering' },
    ],
  },
];

/* ── UI-helpers ────────────────────────────────────────── */
function CfgOption({ active, title, desc, badge, onClick }) {
  return (
    <div onClick={onClick} style={{
      flex: 1, minWidth: 0, cursor: 'pointer', background: active ? SC.deep : '#fff',
      border: `1.5px solid ${active ? SC.deep : SC.line}`, borderRadius: 14, padding: '20px 22px',
      transition: 'all .15s ease', position: 'relative',
    }}>
      {badge && <span style={{
        position: 'absolute', top: -11, right: 14, fontFamily: SC.sans, fontWeight: 700, fontSize: 11,
        letterSpacing: '0.08em', textTransform: 'uppercase', background: '#C3CCA6', color: SC.ink,
        borderRadius: 999, padding: '4px 10px',
      }}>{badge}</span>}
      <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 16, color: active ? SC.creme : SC.deep }}>{title}</div>
      <div style={{ fontFamily: SC.sans, fontSize: 13.5, lineHeight: 1.5, marginTop: 5, color: active ? SC.mutLight : SC.mut }}>{desc}</div>
    </div>
  );
}

function CfgStepper({ step }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      {CFG_STEPS.map((s, i) => (
        <React.Fragment key={s}>
          {i > 0 && <span style={{ width: 28, height: 1.5, background: i <= step ? SC.green : SC.line }}></span>}
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 26, height: 26, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: SC.sans, fontWeight: 600, fontSize: 13,
              background: i < step ? SC.green : i === step ? SC.deep : 'transparent',
              color: i <= step ? SC.creme : SC.mut,
              border: i > step ? `1.5px solid ${SC.line}` : 'none',
            }}>{i < step ? '✓' : i + 1}</span>
            <span style={{ fontFamily: SC.sans, fontSize: 13.5, fontWeight: i === step ? 600 : 500, color: i === step ? SC.deep : SC.mut }}>{s}</span>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

function CfgPlantCard({ p, perfect, selected, onToggle }) {
  return (
    <div onClick={onToggle} style={{
      width: 'calc(25% - 15px)', cursor: 'pointer', background: '#fff', borderRadius: 14, overflow: 'hidden',
      border: `2px solid ${selected ? SC.green : SC.line}`, position: 'relative', transition: 'border-color .15s ease',
    }}>
      {perfect && <span style={{
        position: 'absolute', top: 10, left: 10, zIndex: 2, fontFamily: SC.sans, fontWeight: 700, fontSize: 11,
        letterSpacing: '0.06em', textTransform: 'uppercase', background: SC.deep, color: SC.creme,
        borderRadius: 999, padding: '5px 11px',
      }}>Beste match</span>}
      <span style={{
        position: 'absolute', top: 10, right: 10, zIndex: 2, width: 26, height: 26, borderRadius: '50%',
        background: selected ? SC.green : 'rgba(255,255,255,.9)', border: selected ? 'none' : `1.5px solid ${SC.line}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: SC.creme,
      }}>{selected && <SIconCheck size={15} />}</span>
      <img src={p.img} alt={p.name} style={{ width: '100%', height: 190, objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 15.5, color: SC.ink }}>{p.name}</div>
        <div style={{ fontFamily: SC.sans, fontSize: 12.5, color: SC.mut, marginTop: 2, fontStyle: 'italic' }}>{p.latin}</div>
        <div style={{ fontFamily: SC.sans, fontSize: 12.5, color: SC.mut, marginTop: 8 }}>↕ {p.h} cm · Ø {p.pot} cm · {'●'.repeat(p.care)}{'○'.repeat(3 - p.care)} zorg</div>
      </div>
    </div>
  );
}

function CfgPotCard({ pot, selColor, onPick }) {
  return (
    <div style={{ flex: 1, background: '#fff', border: `2px solid ${selColor ? SC.green : SC.line}`, borderRadius: 16, padding: '24px 26px' }}>
      <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 17, color: SC.deep }}>{pot.name}</div>
      <div style={{ fontFamily: SC.sans, fontSize: 13.5, color: SC.mut, marginTop: 4 }}>{pot.note}</div>
      <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
        {pot.colors.map(([label, hex]) => (
          <div key={label} onClick={() => onPick(label)} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <span style={{
              width: 44, height: 44, borderRadius: '50%', background: hex, display: 'inline-block',
              border: selColor === label ? `3px solid ${SC.green}` : `1.5px solid ${SC.line}`,
              boxShadow: selColor === label ? `0 0 0 3px ${SC.creme}, 0 0 0 5px ${SC.green}` : 'none', boxSizing: 'border-box',
            }}></span>
            <div style={{ fontFamily: SC.sans, fontSize: 11.5, color: selColor === label ? SC.deep : SC.mut, fontWeight: selColor === label ? 600 : 400, marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Hoofdcomponent ────────────────────────────────────── */
const CFG_LS = 'stera-configurator-v1';

function Configurator() {
  const init = React.useMemo(() => {
    try { return JSON.parse(localStorage.getItem(CFG_LS)) || {}; } catch (e) { return {}; }
  }, []);
  const [step, setStep] = React.useState(init.step || 0);
  const [ans, setAns] = React.useState(init.ans || {});
  const [picked, setPicked] = React.useState(init.picked || []);
  const [pot, setPot] = React.useState(init.pot || null); // {lijn, kleur}

  React.useEffect(() => {
    localStorage.setItem(CFG_LS, JSON.stringify({ step, ans, picked, pot }));
  }, [step, ans, picked, pot]);

  const answered = CFG_Q.every((q) => ans[q.key] !== undefined);

  const matches = React.useMemo(() => {
    if (!answered) return [];
    const fit = CFG_PLANTS.filter((p) =>
      p.light.includes(ans.light) && p.humid.includes(ans.humid) &&
      (ans.care === 3 || p.care <= ans.care) && p.size === ans.size);
    const near = CFG_PLANTS.filter((p) => !fit.includes(p) &&
      p.light.includes(ans.light) && p.humid.includes(ans.humid) &&
      (ans.care === 3 || p.care <= ans.care));
    return [...fit.map((p) => ({ p, perfect: true })), ...near.map((p) => ({ p, perfect: false }))];
  }, [ans, answered]);

  const selPlants = CFG_PLANTS.filter((p) => picked.includes(p.id));
  const reset = () => { setStep(0); setAns({}); setPicked([]); setPot(null); };

  const navBtn = (label, dir, disabled) => (
    <span onClick={() => !disabled && setStep(step + dir)} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.4 : 1, fontFamily: SC.sans, fontWeight: 600, fontSize: 15,
      ...(dir > 0
        ? { background: SC.deep, color: SC.creme, padding: '14px 28px', borderRadius: 999 }
        : { color: SC.deep, padding: '14px 10px' }),
    }}>{dir < 0 && <SIconArrow size={16} style={{ transform: 'rotate(180deg)' }} />}{label}{dir > 0 && <SIconArrow size={16} />}</span>
  );

  return (
    <div className="stera" style={{ minHeight: '100vh', background: SC.creme }}>
      {/* Kop */}
      <header style={{ borderBottom: `1px solid ${SC.line}`, background: SC.creme, position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src="assets/sterapro-logo.png" alt="Stera Pro" style={{ height: 36, width: 'auto', display: 'block' }} />
          <CfgStepper step={step} />
          <span onClick={reset} style={{ fontFamily: SC.sans, fontSize: 13.5, color: SC.mut, cursor: 'pointer' }}>Opnieuw beginnen</span>
        </div>
      </header>

      <main style={{ maxWidth: 1240, margin: '0 auto', padding: '52px 32px 80px' }}>
        {/* STAP 1 — Jouw ruimte */}
        {step === 0 && (
          <div>
            <SectionHead kicker="Stap 1 · Jouw ruimte" title="Vertel ons over de plek"
              sub="Vier korte vragen — daarmee weten we welke planten er écht zullen gedijen." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 44 }}>
              {CFG_Q.map((q) => (
                <div key={q.key}>
                  <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 18, color: SC.deep }}>{q.title}</div>
                  <div style={{ fontFamily: SC.sans, fontSize: 14, color: SC.mut, marginTop: 4 }}>{q.sub}</div>
                  <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
                    {q.opts.map((o) => (
                      <CfgOption key={String(o.v)} active={ans[q.key] === o.v} title={o.t} desc={o.d} badge={o.badge}
                        onClick={() => setAns({ ...ans, [q.key]: o.v })} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 48 }}>
              {navBtn('Toon geschikte planten', 1, !answered)}
            </div>
          </div>
        )}

        {/* STAP 2 — Planten */}
        {step === 1 && (
          <div>
            <SectionHead kicker="Stap 2 · Planten" title={`${matches.length} planten passen bij jouw ruimte`}
              sub="Selecteer de planten die je aanspreken — meerdere mag. In het voorstel bepalen we samen de aantallen." />
            {matches.length === 0 ? (
              <div style={{ marginTop: 44, background: SC.sand, borderRadius: 16, padding: '36px 40px', maxWidth: 640 }}>
                <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 18, color: SC.deep }}>Een uitdagende combinatie — net iets voor ons.</div>
                <p style={{ margin: '10px 0 0', fontFamily: SC.sans, fontSize: 14.5, lineHeight: 1.6, color: SC.mut }}>
                  Voor deze ruimte bekijken we de opties beter ter plaatse, met een licht- en vochtmeting.
                </p>
                <div style={{ marginTop: 20 }}><BtnPrimary small><SIconCal size={16} /> Plan een adviesbezoek</BtnPrimary></div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 44 }}>
                {matches.map(({ p, perfect }) => (
                  <CfgPlantCard key={p.id} p={p} perfect={perfect} selected={picked.includes(p.id)}
                    onToggle={() => setPicked(picked.includes(p.id) ? picked.filter((x) => x !== p.id) : [...picked, p.id])} />
                ))}
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
              {navBtn('Vorige', -1)}
              {navBtn(picked.length ? `Kies potten voor ${picked.length} plant${picked.length > 1 ? 'en' : ''}` : 'Selecteer eerst een plant', 1, !picked.length)}
            </div>
          </div>
        )}

        {/* STAP 3 — Potten */}
        {step === 2 && (
          <div>
            <SectionHead kicker="Stap 3 · Potten" title="Kies een lijn en kleur"
              sub="Wij stemmen de maat per plant af — elke pot krijgt automatisch de juiste diameter en een waterreservoir." />
            <div style={{ display: 'flex', gap: 20, marginTop: 44 }}>
              {CFG_POTS.map((p) => (
                <CfgPotCard key={p.id} pot={p} selColor={pot && pot.lijn === p.id ? pot.kleur : null}
                  onPick={(kleur) => setPot({ lijn: p.id, kleur })} />
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 28, fontFamily: SC.sans, fontSize: 13.5, color: SC.mut }}>
              <SIconCheck size={15} style={{ color: SC.green }} /> Twijfel je over de kleur? In het voorstel tonen we de combinatie op foto's van jouw ruimte.
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
              {navBtn('Vorige', -1)}
              {navBtn('Naar het overzicht', 1, !pot)}
            </div>
          </div>
        )}

        {/* STAP 4 — Overzicht */}
        {step === 3 && (
          <div>
            <SectionHead kicker="Stap 4 · Overzicht" title="Jouw groene voorstel"
              sub="Vraag de offerte aan — we bevestigen beschikbaarheid en jouw B2B-prijzen binnen één werkdag." />
            <div style={{ display: 'flex', gap: 48, marginTop: 44, alignItems: 'flex-start' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {selPlants.map((p) => {
                  const lijn = CFG_POTS.find((x) => x.id === pot.lijn);
                  return (
                    <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 18, background: '#fff', border: `1px solid ${SC.line}`, borderRadius: 14, padding: 14 }}>
                      <img src={p.img} alt={p.name} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 10, display: 'block' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: SC.sans, fontWeight: 600, fontSize: 15.5, color: SC.ink }}>{p.name} <span style={{ fontWeight: 400, fontStyle: 'italic', color: SC.mut, fontSize: 13 }}>{p.latin}</span></div>
                        <div style={{ fontFamily: SC.sans, fontSize: 13, color: SC.mut, marginTop: 4 }}>
                          ↕ {p.h} cm · in {lijn.name.toLowerCase()} '{pot.kleur}' Ø {p.pot + 6} cm
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: SC.green, fontFamily: SC.sans, fontWeight: 600, fontSize: 13 }}>
                        <SIconLock size={14} /> Jouw prijs na login
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ flex: '0 0 380px', background: SC.deep, borderRadius: 18, padding: '32px 34px' }}>
                <div style={{ fontFamily: SC.serif, fontStyle: 'italic', fontSize: 26, color: SC.creme }}>Klaar om te groeien?</div>
                <p style={{ margin: '12px 0 0', fontFamily: SC.sans, fontSize: 14, lineHeight: 1.6, color: SC.mutLight }}>
                  We bezorgen je een offerte met jouw prijzen, levertermijn en een onderhoudsvoorstel op maat.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                  <BtnPrimary light small>Vraag offerte aan <SIconArrow size={15} /></BtnPrimary>
                  <BtnGhost light small><SIconCal size={15} /> Liever eerst een adviesbezoek?</BtnGhost>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 18, fontFamily: SC.sans, fontSize: 12.5, color: 'rgba(255,253,247,.6)' }}>
                  <SIconCheck size={14} /> Adviesbezoek wordt verrekend bij bestelling.
                </div>
              </div>
            </div>
            <div style={{ marginTop: 40 }}>{navBtn('Vorige', -1)}</div>
          </div>
        )}
      </main>
    </div>
  );
}

window.Configurator = Configurator;
