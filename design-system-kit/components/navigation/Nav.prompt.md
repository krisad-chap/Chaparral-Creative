Use Nav as the site header. Inline the horizontal logo lockup as the brand and keep links to five or fewer.

```jsx
<Nav brand={<Logo />} links={[{label:'Services',href:'/services',active:true},{label:'Work',href:'/work'}]} actions={<Button size="sm">Book a consultation</Button>} />
```
