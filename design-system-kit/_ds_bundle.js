/* @ds-bundle: {"format":4,"namespace":"ChaparralCreativeDesignSystem_f508d7","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Table","sourcePath":"components/content/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Container","sourcePath":"components/layout/Container.jsx"},{"name":"Eyebrow","sourcePath":"components/layout/Eyebrow.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Text","sourcePath":"components/layout/Text.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7edb222fdc45","components/actions/TextLink.jsx":"f1a33899791a","components/content/Card.jsx":"587aee34333b","components/content/Stat.jsx":"e6cf224e7769","components/content/Table.jsx":"5f6008e63404","components/feedback/Alert.jsx":"fd66b1c7ce39","components/feedback/Badge.jsx":"2eb5e99b3e87","components/forms/Checkbox.jsx":"366eaa8da973","components/forms/Field.jsx":"018876248bc9","components/forms/Input.jsx":"4fb963c8513a","components/forms/Select.jsx":"38b1e3443ac4","components/forms/Textarea.jsx":"d44c167b31c0","components/layout/Container.jsx":"d93e6eb6dcad","components/layout/Eyebrow.jsx":"95b94dca6ab8","components/layout/Hero.jsx":"9181e2ebd8ab","components/layout/Section.jsx":"bc80c2b89d33","components/layout/Text.jsx":"6a5c137613d9","components/navigation/Breadcrumb.jsx":"1ed962148f39","components/navigation/Nav.jsx":"ee20faa753d8","components/navigation/Tabs.jsx":"c071ce70f1f3","ui_kits/website/Chrome.jsx":"71f1df5362a6","ui_kits/website/Contact.jsx":"58b5eb0f86d8","ui_kits/website/Home.jsx":"46b7416289da","ui_kits/website/Service.jsx":"22a41552e2d9","ui_kits/website/Work.jsx":"9b7b42efa68c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChaparralCreativeDesignSystem_f508d7 = window.ChaparralCreativeDesignSystem_f508d7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  href,
  icon,
  children,
  className = '',
  ...rest
}) {
  const cls = ['cc-btn', `cc-btn--${variant}`, size !== 'md' && `cc-btn--${size}`, block && 'cc-btn--block', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href = '#',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: ['cc-link', className].filter(Boolean).join(' '),
    href: href
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  text,
  media = false,
  footer,
  raised = false,
  interactive = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['cc-card', raised && 'cc-card--raised', interactive && 'cc-card--interactive', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "cc-card__media"
  }, media !== true ? media : null), /*#__PURE__*/React.createElement("div", {
    className: "cc-card__body"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "cc-card__title"
  }, title), text && /*#__PURE__*/React.createElement("p", {
    className: "cc-card__text"
  }, text), children), footer && /*#__PURE__*/React.createElement("div", {
    className: "cc-card__foot"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cc-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cc-stat__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "cc-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  columns = [],
  rows = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("table", _extends({
    className: ['cc-table', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j
  }, cell))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Alert({
  tone = 'info',
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cc-alert', `cc-alert--${tone}`, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("strong", null, title), children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'neutral',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['cc-badge', `cc-badge--${tone}`, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['cc-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cc-field', className].filter(Boolean).join(' ')
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "cc-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "cc-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "cc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ['cc-input', invalid && 'cc-input--error', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ['cc-select', invalid && 'cc-input--error', className].filter(Boolean).join(' ')
  }, rest), children || options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ['cc-textarea', invalid && 'cc-input--error', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Container.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Container({
  width,
  children,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cc-container', className].filter(Boolean).join(' '),
    style: {
      ...(width ? {
        maxWidth: width
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Container.jsx", error: String((e && e.message) || e) }); }

// components/layout/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cc-eyebrow', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  eyebrow,
  title,
  children,
  actions,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ['cc-hero', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cc-hero__inner"
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "cc-eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h1", null, title), children && /*#__PURE__*/React.createElement("p", null, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--cc-space-4)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Section({
  tone = 'default',
  children,
  className = '',
  ...rest
}) {
  const cls = ['cc-section', tone === 'subtle' && 'cc-section--subtle', tone === 'inverse' && 'cc-section--inverse', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/Text.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TAGS = {
  display: 'h1',
  title: 'h1',
  subtitle: 'h2',
  subheading: 'h3',
  body: 'p',
  'body-lg': 'p',
  'body-sm': 'p',
  caption: 'p'
};
function Text({
  variant = 'body',
  as,
  children,
  className = '',
  ...rest
}) {
  const Tag = as || TAGS[variant] || 'p';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: [`cc-${variant}`, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Text.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['cc-breadcrumb', className].filter(Boolean).join(' '),
    "aria-label": "Breadcrumb"
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    "aria-current": "page"
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: it.href
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Nav({
  brand,
  links = [],
  actions,
  inverse = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['cc-nav', inverse && 'cc-nav--inverse', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "cc-nav__brand",
    href: typeof brand === 'object' && brand && brand.href ? brand.href : '/',
    style: {
      textDecoration: 'none'
    }
  }, brand && brand.label ? brand.label : brand), /*#__PURE__*/React.createElement("ul", {
    className: "cc-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    className: ['cc-nav__link', l.active && 'cc-nav__link--active'].filter(Boolean).join(' '),
    href: l.href,
    onClick: l.onClick,
    style: {
      textDecoration: 'none'
    }
  }, l.label))), actions && /*#__PURE__*/React.createElement("li", null, actions)));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  const [internal, setInternal] = React.useState(tabs[0] && (tabs[0].value || tabs[0]));
  const active = value !== undefined ? value : internal;
  const pick = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cc-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(t => {
    const v = t.value || t;
    const label = t.label || t;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active === v,
      className: ['cc-tab', active === v && 'cc-tab--active'].filter(Boolean).join(' '),
      onClick: () => pick(v)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Nav,
  Button,
  Container,
  Text
} = window.ChaparralCreativeDesignSystem_f508d7;
const NAV = [{
  label: 'Services',
  key: 'service'
}, {
  label: 'Work',
  key: 'work'
}, {
  label: 'About',
  key: 'about'
}, {
  label: 'Contact',
  key: 'contact'
}];
function Logo({
  color = 'var(--cc-sage)',
  height = 34
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": "Chaparral Creative, LLC",
    style: {
      width: height * 4.2,
      height,
      background: color,
      WebkitMask: 'url(../../assets/logo-horizontal.svg) no-repeat center/contain',
      mask: 'url(../../assets/logo-horizontal.svg) no-repeat center/contain'
    }
  });
}
function SiteHeader({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
      boxShadow: 'var(--cc-shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    brand: /*#__PURE__*/React.createElement(Logo, null),
    links: NAV.map(n => ({
      label: n.label,
      href: '#',
      active: page === n.key,
      onClick: e => {
        e.preventDefault();
        go(n.key === 'about' ? 'home' : n.key);
      }
    })),
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go('contact')
    }, "Book a consultation"),
    style: {
      maxWidth: 1248,
      margin: '0 auto'
    }
  }));
}
function SiteFooter({
  go
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--cc-font-subtitle)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.55)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('service');
    },
    style: {
      fontFamily: 'var(--cc-font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.78)',
      textDecoration: 'none'
    }
  }, i)))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cc-ink)',
      color: '#fff',
      padding: '64px 24px 28px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    color: "#ffffff",
    height: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--cc-font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.7)',
      maxWidth: '34ch',
      margin: '18px 0 0'
    }
  }, "Creative marketing strategies that drive growth. Working with local governments, nonprofits and service businesses across Texas.")), col('Services', ['SEO & web optimization', 'Paid search', 'Content strategy', 'Brand & creative design']), col('Company', ['About', 'Work', 'Contact']), col('Resources', ['Local SEO checklist', 'Reporting sample'])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.12)',
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--cc-font-body)',
      fontSize: 12,
      color: 'rgba(255,255,255,.55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Chaparral Creative, LLC"), /*#__PURE__*/React.createElement("span", null, "Nationwide"))));
}
Object.assign(window, {
  Logo,
  SiteHeader,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Section,
  Container,
  Text,
  Eyebrow,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  Button,
  Alert,
  Card,
  TextLink
} = window.ChaparralCreativeDesignSystem_f508d7;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [org, setOrg] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const emailBad = touched && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const submit = e => {
    e.preventDefault();
    setTouched(true);
    if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) setSent(true);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--cc-space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Book a consultation"), /*#__PURE__*/React.createElement(Text, {
    variant: "title",
    as: "h1",
    style: {
      margin: '14px 0 16px'
    }
  }, "Tell us what's not working"), /*#__PURE__*/React.createElement(Text, {
    variant: "body-lg",
    style: {
      margin: '0 0 24px'
    }
  }, "Thirty minutes, no obligation. We'll walk your site live and name the three things worth fixing first."), /*#__PURE__*/React.createElement(Card, {
    raised: true,
    title: "What happens next",
    text: "We reply within one business day with two times. After the call you get a short written summary \u2014 yours to keep, whether or not we work together.",
    footer: /*#__PURE__*/React.createElement(Text, {
      variant: "caption",
      style: {
        margin: 0
      }
    }, "Prefer email? ", /*#__PURE__*/React.createElement(TextLink, {
      href: "mailto:hello@chaparralcreative.com"
    }, "hello@chaparralcreative.com"))
  })), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Request received"
  }, "We reply within one business day with two times that work.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--cc-space-5)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Organization",
    htmlFor: "org",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "org",
    value: org,
    onChange: e => setOrg(e.target.value),
    placeholder: "City of Marfa"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    htmlFor: "email",
    required: true,
    error: emailBad ? 'Enter a valid email address.' : null,
    hint: emailBad ? null : 'We reply within one business day.'
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "text",
    invalid: emailBad,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@city.gov"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What do you need help with?",
    htmlFor: "svc"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "svc",
    options: ['SEO & web optimization', 'Paid search', 'Content & digital strategy', 'Social media management', 'Brand & creative design', 'Not sure yet']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What are you trying to fix?",
    htmlFor: "note",
    hint: "Two sentences is plenty."
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "note",
    rows: 4,
    placeholder: "Calls are down and we don't know why."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the monthly local-SEO note. One email, first Tuesday."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    type: "submit"
  }, "Request a consultation")))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Hero,
  Section,
  Container,
  Card,
  Stat,
  Button,
  Eyebrow,
  Text,
  TextLink,
  Badge
} = window.ChaparralCreativeDesignSystem_f508d7;
const SERVICES = [['SEO & web optimization', 'Audit first, then the plan the data supports. Technical fixes, local listings, content that ranks.'], ['Paid search', 'Budget where it converts. Search, Performance Max and retargeting, reported on revenue.'], ['Content & digital strategy', 'A calendar built from what people actually search for in your service area.'], ['Social media management', 'Teach something small every week instead of announcing something big every quarter.'], ['Brand & creative design', 'Logo, collateral and templates your team can use without calling us.'], ['Reporting & analytics', 'One monthly page: what moved, what did not, what changes next month.']];
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Digital marketing that works",
    title: "More traffic. More leads. More growth.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go('contact')
    }, "Book a free consultation"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      onClick: () => go('work')
    }, "See our work"))
  }, "We blend creativity and strategy for local governments, nonprofits and service businesses \u2014 and report on revenue, not impressions."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement(Text, {
    variant: "subtitle",
    as: "h2",
    style: {
      margin: '14px 0 32px'
    }
  }, "Six services, one plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--cc-space-6)'
    }
  }, SERVICES.map(([title, text]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    interactive: true,
    title: title,
    text: text,
    onClick: () => go('service'),
    style: {
      cursor: 'pointer'
    },
    footer: /*#__PURE__*/React.createElement(TextLink, {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go('service');
      }
    }, "See the service")
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(Container, {
    width: 760
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How we work"), /*#__PURE__*/React.createElement(Text, {
    variant: "subtitle",
    as: "h2",
    style: {
      margin: '14px 0 16px'
    }
  }, "Strategy first, then execution"), /*#__PURE__*/React.createElement(Text, {
    variant: "body-lg",
    style: {
      margin: 0
    }
  }, "Every engagement opens with an audit: what's ranking, what's converting, and what's quietly costing you. The plan comes from the data, not from a template."))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--cc-space-8)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+184%",
    label: "Organic sessions, 12 months"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "214",
    label: "Leads last quarter"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "38%",
    label: "Lower cost per lead"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "11 yrs",
    label: "Average client tenure"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--cc-space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Local government"), /*#__PURE__*/React.createElement(Text, {
    variant: "subheading",
    as: "h3",
    style: {
      margin: '16px 0 12px'
    }
  }, "\u201CCall volume to the permitting desk dropped a third. People find what they need online now.\u201D"), /*#__PURE__*/React.createElement(Text, {
    variant: "body-sm",
    style: {
      margin: 0
    }
  }, "Assistant City Manager, West Texas municipality")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cc-sage-tint)',
      borderRadius: 'var(--cc-radius-lg)',
      height: 240,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "caption",
    style: {
      margin: 0
    }
  }, "Image placeholder \u2014 real work, real places"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    width: 640
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "subtitle",
    as: "h2",
    style: {
      color: '#fff',
      margin: '0 0 12px'
    }
  }, "Ready to see where you stand?"), /*#__PURE__*/React.createElement(Text, {
    variant: "body-lg",
    style: {
      color: 'rgba(255,255,255,.75)',
      margin: '0 0 28px'
    }
  }, "A free consultation, no obligation \u2014 we'll walk your site and tell you the three things worth fixing first."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Book a free consultation"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Service.jsx
try { (() => {
const {
  Section,
  Container,
  Breadcrumb,
  Text,
  Eyebrow,
  Button,
  Table,
  Alert,
  Card,
  Stat
} = window.ChaparralCreativeDesignSystem_f508d7;
function Service({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Services',
      href: '#'
    }, {
      label: 'SEO & web optimization'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--cc-space-16)',
      marginTop: 'var(--cc-space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "SEO & web optimization"), /*#__PURE__*/React.createElement(Text, {
    variant: "title",
    as: "h1",
    style: {
      margin: '14px 0 20px'
    }
  }, "Get found by the people already looking"), /*#__PURE__*/React.createElement(Text, {
    variant: "body-lg",
    style: {
      margin: '0 0 28px'
    }
  }, "Most of our clients aren't short on effort; they're short on knowing which effort pays. We audit first, then build the plan from what the data says."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--cc-space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('contact')
  }, "Request an audit"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('work')
  }, "See results"))), /*#__PURE__*/React.createElement(Card, {
    raised: true,
    title: "Typical engagement",
    text: "90-day plan, then monthly retainer. First report lands in week five.",
    footer: /*#__PURE__*/React.createElement(Text, {
      variant: "caption",
      style: {
        margin: 0
      }
    }, "Pricing quoted after the audit \u2014 no packages.")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--cc-space-8)',
      marginTop: 'var(--cc-space-2)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "90",
    label: "Days to first plan"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "4",
    label: "Reports per quarter"
  })))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Text, {
    variant: "subheading",
    as: "h2",
    style: {
      margin: '0 0 20px'
    }
  }, "What's included"), /*#__PURE__*/React.createElement(Table, {
    columns: ['Deliverable', 'When', 'Owner'],
    rows: [['Technical audit — crawl, speed, indexation', 'Week 1–2', 'Chaparral Creative'], ['Google Business Profile cleanup', 'Week 2', 'Chaparral Creative'], ['Keyword and service-area map', 'Week 3', 'Joint'], ['Content calendar, first quarter', 'Week 4', 'Chaparral Creative'], ['Conversion tracking and dashboard', 'Week 5', 'Chaparral Creative']]
  }), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Reporting",
    style: {
      marginTop: 'var(--cc-space-8)'
    }
  }, "One page a month: what moved, what didn't, and what changes next month. We don't promise rankings \u2014 we report traffic, leads and revenue."))));
}
window.Service = Service;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Service.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
const {
  Section,
  Container,
  Tabs,
  Card,
  Stat,
  Badge,
  Text,
  Eyebrow,
  Button
} = window.ChaparralCreativeDesignSystem_f508d7;
const CASES = [{
  sector: 'Local government',
  title: 'Permitting pages that answer the question',
  text: 'Rebuilt 40 service pages around what residents actually search. Call volume to the desk fell a third.',
  stat: ['-33%', 'Inbound calls']
}, {
  sector: 'Nonprofit',
  title: 'Donation page that finishes the job',
  text: 'One form, three fields, no redirect. Recurring gifts doubled in two quarters.',
  stat: ['2.1×', 'Recurring gifts']
}, {
  sector: 'Service business',
  title: 'Paid search that pays',
  text: 'Cut match types down to what converted and moved the budget to weekday mornings.',
  stat: ['-38%', 'Cost per lead']
}, {
  sector: 'Local government',
  title: 'One site, five departments',
  text: 'Consolidated five microsites into a single searchable site with shared templates.',
  stat: ['+184%', 'Organic sessions']
}, {
  sector: 'Nonprofit',
  title: 'Grant reporting people read',
  text: 'Turned a 30-page annual report into a page with the numbers up front.',
  stat: ['14 min', 'Median read time']
}, {
  sector: 'Service business',
  title: 'Brand refresh that shipped',
  text: 'Logo, vehicle wrap and templates the office manager can edit without us.',
  stat: ['6 wks', 'Start to launch']
}];
function Work({
  go
}) {
  const [sector, setSector] = React.useState('All');
  const shown = sector === 'All' ? CASES : CASES.filter(c => c.sector === sector);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 'var(--cc-space-8)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement(Text, {
    variant: "title",
    as: "h1",
    style: {
      margin: '14px 0 16px'
    }
  }, "Results, with the numbers attached"), /*#__PURE__*/React.createElement(Text, {
    variant: "body-lg",
    style: {
      margin: '0 0 32px',
      maxWidth: '60ch'
    }
  }, "Six engagements across Texas. Every figure below comes from the client's own analytics."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['All', 'Local government', 'Nonprofit', 'Service business'],
    value: sector,
    onChange: setSector
  }))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 'var(--cc-space-10)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--cc-space-6)'
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    media: true,
    title: c.title,
    text: c.text,
    interactive: true,
    onClick: () => go('service'),
    style: {
      cursor: 'pointer'
    },
    footer: /*#__PURE__*/React.createElement(Stat, {
      value: c.stat[0],
      label: c.stat[1]
    })
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    style: {
      alignSelf: 'flex-start'
    }
  }, c.sector)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    width: 620
  }, /*#__PURE__*/React.createElement(Text, {
    variant: "subtitle",
    as: "h2",
    style: {
      margin: '0 0 24px'
    }
  }, "Want the same read on your site?"), /*#__PURE__*/React.createElement(Button, {
    variant: "ink",
    size: "lg",
    onClick: () => go('contact')
  }, "Book a free consultation"))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Text = __ds_scope.Text;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
