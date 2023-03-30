/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import Dashboard from "../Dashboard";
import Form from "../Form";
import { WebFormProvider } from "../../hooks/useWebForm";
import Handlers from "../Handlers";
import { Submission } from "../Submission";
import Submissions from "../Submissions";

const App: React.VoidFunctionComponent = () => {
  return (
    <WebFormProvider>
      <div>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={Dashboard} exact />
          <Route
            path={`/plugins/${pluginId}/form/add`}
            component={Form}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/form/edit/:id`}
            component={Form}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/form/submissions/:id`}
            component={Submissions}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/form/handlers/:id`}
            component={Handlers}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/submission/:id`}
            component={Submission}
            exact
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    </WebFormProvider>
  );
};

export default App;
