const { Hero, Section, Container, Card, Stat, Button, Eyebrow, Text, TextLink, Badge } = window.ChaparralCreativeDesignSystem_f508d7;

const SERVICES = [
  ['SEO & web optimization', 'Audit first, then the plan the data supports. Technical fixes, local listings, content that ranks.'],
  ['Paid search', 'Budget where it converts. Search, Performance Max and retargeting, reported on revenue.'],
  ['Content & digital strategy', 'A calendar built from what people actually search for in your service area.'],
  ['Social media management', 'Teach something small every week instead of announcing something big every quarter.'],
  ['Brand & creative design', 'Logo, collateral and templates your team can use without calling us.'],
  ['Reporting & analytics', 'One monthly page: what moved, what did not, what changes next month.'],
];

function Home({ go }) {
  return (
    <main>
      <Hero
        eyebrow="Digital marketing that works"
        title="More traffic. More leads. More growth."
        actions={<><Button variant="primary" size="lg" onClick={() => go('contact')}>Book a free consultation</Button><Button variant="inverse" size="lg" onClick={() => go('work')}>See our work</Button></>}
      >
        We blend creativity and strategy for local governments, nonprofits and service businesses — and report on revenue, not impressions.
      </Hero>

      <Section>
        <Container>
          <Eyebrow>What we do</Eyebrow>
          <Text variant="subtitle" as="h2" style={{ margin: '14px 0 32px' }}>Six services, one plan</Text>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--cc-space-6)' }}>
            {SERVICES.map(([title, text]) => (
              <Card key={title} interactive title={title} text={text} onClick={() => go('service')} style={{ cursor: 'pointer' }}
                footer={<TextLink href="#" onClick={(e) => { e.preventDefault(); go('service'); }}>See the service</TextLink>} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container width={760}>
          <Eyebrow>How we work</Eyebrow>
          <Text variant="subtitle" as="h2" style={{ margin: '14px 0 16px' }}>Strategy first, then execution</Text>
          <Text variant="body-lg" style={{ margin: 0 }}>
            Every engagement opens with an audit: what's ranking, what's converting, and what's quietly costing you. The plan comes from the data, not from a template.
          </Text>
        </Container>
      </Section>

      <Section tone="inverse">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--cc-space-8)' }}>
            <Stat value="+184%" label="Organic sessions, 12 months" />
            <Stat value="214" label="Leads last quarter" />
            <Stat value="38%" label="Lower cost per lead" />
            <Stat value="11 yrs" label="Average client tenure" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--cc-space-12)', alignItems: 'center' }}>
            <div>
              <Badge tone="accent">Local government</Badge>
              <Text variant="subheading" as="h3" style={{ margin: '16px 0 12px' }}>“Call volume to the permitting desk dropped a third. People find what they need online now.”</Text>
              <Text variant="body-sm" style={{ margin: 0 }}>Assistant City Manager, West Texas municipality</Text>
            </div>
            <div style={{ background: 'var(--cc-sage-tint)', borderRadius: 'var(--cc-radius-lg)', height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text variant="caption" style={{ margin: 0 }}>Image placeholder — real work, real places</Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="inverse" style={{ textAlign: 'center' }}>
        <Container width={640}>
          <Text variant="subtitle" as="h2" style={{ color: '#fff', margin: '0 0 12px' }}>Ready to see where you stand?</Text>
          <Text variant="body-lg" style={{ color: 'rgba(255,255,255,.75)', margin: '0 0 28px' }}>
            A free consultation, no obligation — we'll walk your site and tell you the three things worth fixing first.
          </Text>
          <Button variant="primary" size="lg" onClick={() => go('contact')}>Book a free consultation</Button>
        </Container>
      </Section>
    </main>
  );
}
window.Home = Home;
