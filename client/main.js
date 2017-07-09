/**
 * Created by User on 7/8/2017.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import LinkList from './components/link_list';
import {Links} from '../imports/collections/links';

const App = () => {
    return (
        <div>
            <Header />
            <LinkCreate />
            <LinkList />
        </div>
    );
};

Meteor.startup(() => {
    ReactDom.render(<App/>, document.querySelector('.render-target'));
});
