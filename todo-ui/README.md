# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm i bootstrap --save
npm i react-router-dom
npm i axios --save

app.jsx
HeaderComponent
FooterComponent
TodoService
TodoComponent

// back from Spring
# Security

## Register

### create the Register Component
- create RegisterComponent
- add route
- add route link to HeaderComponent
- modified the code of  RegisterComponent

### create the Register Service
- create AuthService
- add to the RegisterComponent

## Login

### create the Login Component
- create the login Component
- add the routerlink to App.jsx
- add the link in HeaderComponent
- modified the code LoginComponent

### create Token and test in Postman
- create the login api with object
- create the await sentence the handler in LoginComponent


### login token stroage
- add services -> AuthService => getToken() + storeToken(token)
- add LoginComponent => modified storeToken(token)
- add services -> TodoService => axios.interception from axios interception
- back to Spring

## login out
- services -> AuthService => logout()
- componenets -> HeaderComponent => handleLogout


## guard the Components
- ျservice -> AuthService => saveUserAuthencation + isUserRight 
- saveUserAuthencation to LoginComponent
- isUserRight to App Route
- Add Guard

## visiable or unvisiable
- modified the code to use isAuth in header

## Change the token that work jwt