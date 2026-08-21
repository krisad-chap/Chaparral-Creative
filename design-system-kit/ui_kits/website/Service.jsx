const { Section, Container, Breadcrumb, Text, Eyebrow, Button, Table, Alert, Card, Stat } = window.ChaparralCreativeDesignSystem_f508d7;

function Service({ go }) {
  return (
    <main>
      <Section style={{ paddingBottom: 0 }}>
        <Container>
          <Breadcrumb items={[{ label: 'Home', href: '#' }, { label: 'Services', href: '#' }, { label: 'SEO & web optimization' }]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--cc-space-16)', marginTop: 'var(--cc-space-8)' }}>
            <div>
              <Eyebrow>SEO &amp; web optimization</Eyebrow>
              <Text variant="title" as="h1" style={{ margin: '14px 0 20px' }}>Get found by the people already looking</Text>
              <Text variant="body-lg" style={{ margin: '0 0 28px' }}>
                Most of our clients aren't short on effort; they're short on knowing which effort pays. We audit first, then build the plan from what the data says.
              </Text>
              <div style={{ display: 'flex', gap: 'var(--cc-space-4)' }}>
                <Button variant="primary" size="lg" onClick={() => go('contact')}>Request an audit</Button>
                <Button variant="secondary" size="lg" onClick={() => go('work')}>See results</Button>
              </div>
            </div>
            <Card raised title="Typical engagement" text="90-day plan, then monthly retainer. First report lands in week five."
              footer={<Text variant="caption" style={{ margin: 0 }}>Pricing quoted after the audit — no packages.</Text>}>
              <div style={{ display: 'flex', gap: 'var(--cc-space-8)', marginTop: 'var(--cc-space-2)' }}>
                <Stat value="90" label="Days to first plan" />
                <Stat value="4" label="Reports per quarter" />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text variant="subheading" as="h2" style={{ margin: '0 0 20px' }}>What's included</Text>
          <Table
            columns={['Deliverable', 'When', 'Owner']}
            rows={[
              ['Technical audit — crawl, speed, indexation', 'Week 1–2', 'Chaparral Creative'],
              ['Google Business Profile cleanup', 'Week 2', 'Chaparral Creative'],
              ['Keyword and service-area map', 'Week 3', 'Joint'],
              ['Content calendar, first quarter', 'Week 4', 'Chaparral Creative'],
              ['Conversion tracking and dashboard', 'Week 5', 'Chaparral Creative'],
            ]}
          />
          <Alert tone="info" title="Reporting" style={{ marginTop: 'var(--cc-space-8)' }}>
            One page a month: what moved, what didn't, and what changes next month. We don't promise rankings — we report traffic, leads and revenue.
          </Alert>
        </Container>
      </Section>
    </main>
  );
}
window.Service = Service;
