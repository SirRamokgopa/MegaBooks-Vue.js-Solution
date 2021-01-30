import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


Vue.config.productionTip = false;

// HTTP connection to the API
const httpLink = createHttpLink({
  // Use your server url
  uri: 'http://localhost:4000/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const client = new ApolloClient({
  link: httpLink,
  cache,
});

Vue.use(VueApollo);

/*The provider holds the Apollo client instances
  that can then be used by all the child components. */
const apolloProvider = new VueApollo({
  defaultClient: client,
})


new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
