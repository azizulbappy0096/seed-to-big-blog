// modules
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// components
import SingleBlog from "../Azizul/SingleBlog";
import Editor from "../Azizul/Editor";

function Main() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/blog/:blogId" component={SingleBlog} />
          <Route exact path="/new-blog" component={Editor} />
        </Switch>
      </main>
    </Router>
  );
}

export default Main;
