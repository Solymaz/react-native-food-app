import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 91o-NZvWaqXgKIlHFQ8ddQZ9zbhUJhjVWV3fRhKGi2JXqPnHyjhetVmSm3ckkKoYPSTYHAKwW32VMAJrcw7Qm2WhYmTlrmgPcwZ3fqr4d9HA5nIVB6UxXw3bDQgGZHYx",
  },
});
