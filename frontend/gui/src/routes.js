import React, { Fragment } from "react"
import { Route } from 'react-router-dom';
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDeatil";

const BaseRouter = () => {
    return (
        <Fragment>
            <Route exact path="/" component={ArticleList} />
            <Route exact path="/:articleID" component={ArticleDetail} />
        </Fragment>
    )
}

export default BaseRouter;