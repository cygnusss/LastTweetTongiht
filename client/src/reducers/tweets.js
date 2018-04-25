import { FETCH_TWEETS } from "../actions/index";
import BigNumber from "bignumber.js";

// Tweet_ids are really big numbers
// so in order to avoid possible issues (duplicate tweets or loosing tweets)
// I used the BigNumber module that lets you properly work with big numbers
  // Saving last tweet's id and substracting 1 from it allows to fetch
  // tweets with IDs less then that of the last fetched tweet
// I am not sure yet how Twitter gives IDs – it may be more simpler
const decrement = (n) => BigNumber(n).minus(1).toString(10);

export default (state={}, action) => {
  console.log("STATE IS:", state);
  switch (action.type) {
    case FETCH_TWEETS:
      const tweets = action.payload.data;
      const max_id = decrement(tweets[tweets.length - 1].id_str);
      return { tweets, max_id };
    default:
      return state;
  }
}