import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import LoginPage from "./components/Login/Login";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initiallizeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import FriendsContainer from "./components/Friends/FriendsContainer";
/*import ProfileContainer from "./components/Profile/ProfileContainer";*/
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))


class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("some error")
        console.error(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initiallizeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (this.props.initiallized) {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar stateNavbarFriends={this.props.store.getState().navBarPage}/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={"profile"}/>}/>
                            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                            <Route path='/friends' render={() =><FriendsContainer/>}/>
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/settings' component={Settings}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            );
        } else {
            return <Preloader/>
        }
    }
}

const mapStateToProps = (state) => ({
    initiallized: state.app.initiallized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initiallizeApp}))(App)

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer store={store}/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}
/*<HashRouter basename={process.env.PUBLIC_URL}> сделать замену в случае пуша в гитхаб*/
/*<BrowserRouter> default case*/
export default SamuraiJSApp