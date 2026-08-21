const { Section, Container, Tabs, Card, Stat, Badge, Text, Eyebrow, Button } = window.ChaparralCreativeDesignSystem_f508d7;

const CASES = [
  { sector: 'Local government', title: 'Permitting pages that answer the question', text: 'Rebuilt 40 service pages around what residents actually search. Call volume to the desk fell a third.', stat: ['-33%', 'Inbound calls'] },
  { sector: 'Nonprofit', title: 'Donation page that finishes the job', text: 'One form, three fields, no redirect. Recurring gifts doubled in two quarters.', stat: ['2.1×', 'Recurring gifts'] },
  { sector: 'Service business', title: 'Paid search that pays', text: 'Cut match types down to what converted and moved the budget to weekday mornings.', stat: ['-38%', 'Cost per lead'] },
  { sector: 'Local government', title: 'One site, five departments', text: 'Consolidated five microsites into a single searchable site with shared templates.', stat: ['+184%', 'Organic sessions'] },
  { sector: 'Nonprofit', title: 'Grant reporting people read', text: 'Turned a 30-page annual report into a page with the numbers up front.', stat: ['14 min', 'Median read time'] },
  { sector: 'Service business', title: 'Brand refresh that shipped', text: 'Logo, vehicle wrap and templates the office manager can edit without us.', stat: ['6 wks', 'Start to launch'] },
];

function Work({ go }) {
  const [sector, setSector] = React.useState('All');
  const shown = sector === 'All' ? CASES : CASES.filter((c) => c.sector === sector);
  return (
    <main>
      <Section style={{ paddingBottom: 'var(--cc-space-8)' }}>
        <Container>
          <Eyebrow>Selected work</Eyebrow>
          <Text variant="title" as="h1" style={{ margin: '14px 0 16px' }}>Results, with the numbers attached</Text>
          <Text variant="body-lg" style={{ margin: '0 0 32px', maxWidth: '60ch' }}>Six engagements across Texas. Every figure below comes from the client's own analytics.</Text>
          <Tabs tabs={['All', 'Local government', 'Nonprofit', 'Service business']} value={sector} onChange={setSector} />
        </Container>
      </Section>
      <Section style={{ paddingTop: 'var(--cc-space-10)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--cc-space-6)' }}>
            {shown.map((c) => (
              <Card key={c.title} media title={c.title} text={c.text} interactive onClick={() => go('service')} style={{ cursor: 'pointer' }}
                footer={<Stat value={c.stat[0]} label={c.stat[1]} />}>
                <Badge tone="accent" style={{ alignSelf: 'flex-start' }}>{c.sector}</Badge>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="subtle" style={{ textAlign: 'center' }}>
        <Container width={620}>
          <Text variant="subtitle" as="h2" style={{ margin: '0 0 24px' }}>Want the same read on your site?</Text>
          <Button variant="ink" size="lg" onClick={() => go('contact')}>Book a free consultation</Button>
        </Container>
      </Section>
    </main>
  );
}
window.Work = Work;
