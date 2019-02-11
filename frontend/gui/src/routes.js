import React, { Fragment } from "react"
import { Route } from 'react-router-dom';
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDeatil";
import Login from "./containers/Login"
import Signup from "./containers/Signup"

const BaseRouter = () => {
    return (
        <Fragment>
            <Route exact path="/" component={ArticleList} />
            <Route exact path="/articles/:articleID" component={ArticleDetail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </Fragment>
    )
}

export default BaseRouter;