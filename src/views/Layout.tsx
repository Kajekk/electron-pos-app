import { Paper } from '@material-ui/core';
import "./Layout.scss";
import * as React from 'react';
export interface ILayoutProps {
}

export const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {

    return (
        <div className="layout">
            {children}
        </div>
    );
}
