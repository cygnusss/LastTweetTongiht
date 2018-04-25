import axios from "axios";

export const FETCH_TWEETS = "FETCH_TWEETS";

export const fetchTweets = (max_id) => {
  const payload = axios("/tweets", { params: { max_id } });
  console.log("PAY AND GET A LOAD:", payload);
  return { type: FETCH_TWEETS, payload };
};

console.log("Opened actions")

// axios("/tweets", { params: {max_id: this.state.max_id} })
//       .then(({ data }) => {
//         // Tweet_ids are really big numbers
//         // so in order to avoid possible issues (duplicate tweets or loosing tweets)
//         // I used the BigNumber module that lets you properly work with big numbers
//           // Saving last tweet's id and substracting 1 from it allows to fetch
//           // tweets with IDs less then that of the last fetched tweet
//         // I am not sure yet how Twitter gives IDs – it may be more simpler
//         const id_str = data[data.length - 1].id_str;
//         const max_id = BigNumber(id_str).minus(1).toString(10);
        
//         // Update state with new tweets and max_id
//         const tweets = this.state.tweets.slice().concat(data)
//         this.setState({ tweets, max_id, loading: false });
//       });