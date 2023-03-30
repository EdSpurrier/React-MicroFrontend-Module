# React MFE BoilerPlate => [MFE] MicroFrontEnd 

This is a built using the [MicroFrontendBoilerPlate](https://github.com/EdSpurrier) for a remote application for viewing within the MicroFrontEnd Host

---

- Change these when building a new App and make sure you select a free port

> PORT: 4100\
> [localhost:4100](http://localhost:4100)\
> MODULE FED:\
> name: `boilerplate`\
> Exposes:\
> `boilerplate/routes`
> Routes:\
> `boilerplate` = <Core />
> `boilerplate/home` = <Home />

---

### Frameworks Used

- ReactJS (18)
- Module Federation
- Styled-Components
- SVGR [SVG]

### Custom Packages

- [SlaydTheme](#SlaydTheme)
- [SlaydAPI](#SlaydAPI)

---

## Getting Started

In the project directory, you can run:

### `npm i`

Installs all relative dependencies


### `npm start`

Runs the app in the development mode.

Set the port for your ```localhost``` in `./webpack.config.js`
Then you may open `http://localhost:####` to view it in your browser. 

You may also see any lint errors in the console.

---

## App Routing

- `./src/routes.js` - Routing to components, modules or pages
- `./src/menus.js` - Vertical Menu with routes

---

## App Theme [Relative Individual Theming per App]

Using `./AppTheme` you can add responsive sizes, standard sizes and colors to individual apps.

```

background: ${apptheme.modeColours(theme.darkMode).verticalMenu.background};
border-left: 1px solid ${apptheme.modeColours(theme.darkMode).verticalMenu.border};
padding-left: ${apptheme.responsiveSizes(theme.activeBreakpoints).nav.vertical.width}px;

```

---

## Custom Packages

---

### SlaydTheme

**Currently under construction**

`Has recenlty been moved into an NPM package`

NPM Package: [slaydtheme](https://www.npmjs.com/package/slaydtheme)

The slaydtheme `slaydtheme` has Utils, GlobalComponents, GlobalStyles, Icon and a Responsive Styling System

View instructions and details in the [GitHub Repo](https://github.com/EdSpurrier/slaydtheme)

---

### SlaydAPI

**Currently under construction**

`Not yet defined and will be moved into an NPM package`

---

## Project Structure

---

### Pages
location: `src/pages`

---

### Component
location: `src/components`

A component is a building block of a user interface in React.\
Components can have their own state, props, and lifecycle methods, and they can be rendered to the DOM.
Components can be composed of other components.

---

### Module 
location: `src/modules`

A module is a self-contained unit of code that can contain one or more components or other utility functions.\
Modules are used to organize and encapsulate related functionality, making it easier to manage and reuse code.

---