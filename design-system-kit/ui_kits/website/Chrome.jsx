const { Nav, Button, Container, Text } = window.ChaparralCreativeDesignSystem_f508d7;

const NAV = [
  { label: 'Services', key: 'service' },
  { label: 'Work', key: 'work' },
  { label: 'About', key: 'about' },
  { label: 'Contact', key: 'contact' },
];

function Logo({ color = 'var(--cc-sage)', height = 34 }) {
  return <div aria-label="Chaparral Creative, LLC" style={{ width: height * 4.2, height, background: color, WebkitMask: 'url(../../assets/logo-horizontal.svg) no-repeat center/contain', mask: 'url(../../assets/logo-horizontal.svg) no-repeat center/contain' }} />;
}

function SiteHeader({ page, go }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 5, boxShadow: 'var(--cc-shadow-sm)' }}>
      <Nav
        brand={<Logo />}
        links={NAV.map((n) => ({ label: n.label, href: '#', active: page === n.key, onClick: (e) => { e.preventDefault(); go(n.key === 'about' ? 'home' : n.key); } }))}
        actions={<Button size="sm" onClick={() => go('contact')}>Book a consultation</Button>}
        style={{ maxWidth: 1248, margin: '0 auto' }}
      />
    </div>
  );
}

function SiteFooter({ go }) {
  const col = (title, items) => (
    <div>
      <div style={{ fontFamily: 'var(--cc-font-subtitle)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((i) => <li key={i}><a href="#" onClick={(e) => { e.preventDefault(); go('service'); }} style={{ fontFamily: 'var(--cc-font-body)', fontSize: 14, color: 'rgba(255,255,255,.78)', textDecoration: 'none' }}>{i}</a></li>)}
      </ul>
    </div>
  );
  return (
    <footer style={{ background: 'var(--cc-ink)', color: '#fff', padding: '64px 24px 28px' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 40 }}>
          <div>
            <Logo color="#ffffff" height={30} />
            <p style={{ fontFamily: 'var(--cc-font-body)', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', maxWidth: '34ch', margin: '18px 0 0' }}>
              Creative marketing strategies that drive growth. Working with local governments, nonprofits and service businesses across Texas.
            </p>
          </div>
          {col('Services', ['SEO & web optimization', 'Paid search', 'Content strategy', 'Brand & creative design'])}
          {col('Company', ['About', 'Work', 'Contact'])}
          {col('Resources', ['Local SEO checklist', 'Reporting sample'])}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--cc-font-body)', fontSize: 12, color: 'rgba(255,255,255,.55)' }}>
          <span>© 2026 Chaparral Creative, LLC</span>
          <span>Nationwide</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Logo, SiteHeader, SiteFooter, NAV });
