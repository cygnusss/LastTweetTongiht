import { connect } from "react-redux";
import { fetchTweets } from "../actions/index";

import Feed from "../components/Feed/Feed.jsx";

console.log("Opened containers")

const mapStateToProps = ({ tweets }) => {
  return { tweets }
};
const mapDispatchToProps = { fetchTweets };

export default connect(mapStateToProps, mapDispatchToProps)(Feed);