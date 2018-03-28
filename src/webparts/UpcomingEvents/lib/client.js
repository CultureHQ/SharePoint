import CultureHQ from "culturehq-client";

import { API_ROOT } from "../config";

const client = new CultureHQ({ apiHost: API_ROOT });
client.setToken("test-token");

export default client;
