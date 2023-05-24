import AppHeader from './appHeader/appHeader';
import AppMenu from './appMenu/appMenu';
import AppFooter from './appFooter/appFooter';
import AppSetting from './appSetting/appSetting';
import AppDashboard from './appDashboard/appDashboard';
 
function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />
      <AppDashboard />
      <AppFooter />
      <AppSetting />
    </div>
  );
}
 
export default App;
