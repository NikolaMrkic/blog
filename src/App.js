import { React, Router, Switch, Route } from "./global";
import NotFoundPage from "./pages/404";
import BlogPosts from "./pages/BlogPosts";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact={true} path="/">
            <BlogPosts />
          </Route>
          {/** if someone enters the wrong url we display this (NotFoundPage or 404) **/}
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
