const { Section, Container, Text, Eyebrow, Field, Input, Select, Textarea, Checkbox, Button, Alert, Card, TextLink } = window.ChaparralCreativeDesignSystem_f508d7;

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [org, setOrg] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const emailBad = touched && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const submit = (e) => { e.preventDefault(); setTouched(true); if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) setSent(true); };
  return (
    <main>
      <Section>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--cc-space-16)' }}>
            <div>
              <Eyebrow>Book a consultation</Eyebrow>
              <Text variant="title" as="h1" style={{ margin: '14px 0 16px' }}>Tell us what's not working</Text>
              <Text variant="body-lg" style={{ margin: '0 0 24px' }}>
                Thirty minutes, no obligation. We'll walk your site live and name the three things worth fixing first.
              </Text>
              <Card raised title="What happens next" text="We reply within one business day with two times. After the call you get a short written summary — yours to keep, whether or not we work together."
                footer={<Text variant="caption" style={{ margin: 0 }}>Prefer email? <TextLink href="mailto:hello@chaparralcreative.com">hello@chaparralcreative.com</TextLink></Text>} />
            </div>
            <div>
              {sent ? (
                <Alert tone="success" title="Request received">We reply within one business day with two times that work.</Alert>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cc-space-5)' }}>
                  <Field label="Organization" htmlFor="org" required><Input id="org" value={org} onChange={(e) => setOrg(e.target.value)} placeholder="City of Marfa" /></Field>
                  <Field label="Work email" htmlFor="email" required error={emailBad ? 'Enter a valid email address.' : null} hint={emailBad ? null : 'We reply within one business day.'}>
                    <Input id="email" type="text" invalid={emailBad} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@city.gov" />
                  </Field>
                  <Field label="What do you need help with?" htmlFor="svc">
                    <Select id="svc" options={['SEO & web optimization', 'Paid search', 'Content & digital strategy', 'Social media management', 'Brand & creative design', 'Not sure yet']} />
                  </Field>
                  <Field label="What are you trying to fix?" htmlFor="note" hint="Two sentences is plenty.">
                    <Textarea id="note" rows={4} placeholder="Calls are down and we don't know why." />
                  </Field>
                  <Checkbox label="Send me the monthly local-SEO note. One email, first Tuesday." />
                  <Button variant="primary" size="lg" block type="submit">Request a consultation</Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
window.Contact = Contact;
