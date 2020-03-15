import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/navbar/navbar.component';
import MenuIcon from './components/menu-icon/menu-icon.component';
import HomePage from './pages/homepage/homepage.component';
import CompanyPage from './pages/company/company-page.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import DisplayPage from './pages/display/display-page.component';
import UserPage from './pages/user/user-page.component';
import Ranchs from './pages/ranchs/ranchs.component';
import Maps from './pages/maps/maps-page.component';
import Inspections from './pages/inspections/inspections-page.component';
import Applications from './pages/applications/applications-page.component';
import Records from './pages/records/records-page.component';

import { auth, createUserProfileDocument, getCompanyFromUser, getRanchesfromCompany, getCropsForSelect } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { setCurrentCompany } from './redux/company/company.actions';
import { setAllRanches } from './redux/ranch/ranch.actions';
import { setCropsInfo } from './redux/crops/crops.actions';
import { selectNavBarHidden } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, setCurrentCompany, setAllRanches, setCropsInfo } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //console.log('user Ref app', userRef)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });       
        });
        
        const companyRef = await getCompanyFromUser(userRef);
        companyRef.onSnapshot(snapShot => {
          setCurrentCompany({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

        const allRanchesDocs = await getRanchesfromCompany(companyRef);
        const ranchesInfo = await allRanchesDocs.map(doc => doc.data())
        setAllRanches(ranchesInfo);

        const allCrops = await getCropsForSelect();
        const cropsInfo = await allCrops.map(doc => doc.data())
        setCropsInfo(cropsInfo);

      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { hidden } = this.props;
    return (
      <div className="App">
        {
          hidden ?
          <MenuIcon /> :
          <NavBar />
        }      
        
        <div className="display">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/company' component={CompanyPage} />
            <Route exact path='/signin' component={SignInAndSignUpPage} />
            <Route exact path='/display' component={DisplayPage} />
            <Route exact path='/user' component={UserPage} />
            <Route exact path='/ranchs' component={Ranchs} />
            <Route exact path='/maps' component={Maps} />
            <Route exact path='/inspections' component={Inspections} />
            <Route exact path='/applications' component={Applications} />
            <Route exact path='/records' component={Records} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hidden: selectNavBarHidden(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setCurrentCompany: company => dispatch(setCurrentCompany(company)),
  setAllRanches: ranches => dispatch(setAllRanches(ranches)),
  setCropsInfo: crops => dispatch(setCropsInfo(crops))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
