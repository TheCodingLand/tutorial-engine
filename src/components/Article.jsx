import React, { Component } from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { bookmarkArticle, setArticle } from '../actions/userActions'
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles'


const styles = theme => ({
  card: {
    maxWidth: "800px",

  },
  media: {
    flex: 'grow',
    height:'800px'
  },
  actions: {
    display: 'flex',
  },
})





class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  imgDimensions() {
  


    //return { maxHeight: maxHeight + "px", maxWidth: maxWidth + "px", width: width + "px", height: height + "px", flex: 'grow' }
    return { width : this.props.article.image.width, maxWidth : this.props.article.image.width}

  }
  render() {
    const { classes } = this.props;
    console.log(this.props)

    return (
      <Card style={{ maxWidth: this.props.article.image.width +100}} >
        <CardHeader onClick={() => this.props.setArticle(this.props.article.id)}
        

          action={
            <IconButton aria-label="Add to favorites" onClick={() => this.props.bookmarkArticle(this.props.article.id)}>
            {this.props.user.bookmarks.includes(this.props.article.id) ? <FavoriteIcon color='secondary' /> : <FavoriteIcon />}
       

          </IconButton>
          }
          title={this.props.article.title}
          subheader=""
        />

        <CardMedia className="media"
          style={{height: this.props.article.image.height+'px'}}
          image={this.props.article.image.url}
          title={this.props.article.title}
        >
        

        </CardMedia>

        <CardContent>

          <Typography component="p">
            {this.props.article.text}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>

         
        {/*   <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          {/* <IconButton

            onClick={this.handleExpandClick}

            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton> */}
        </CardActions>

        <CardContent>


        </CardContent>

      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    bookmarkArticle,
    setArticle
  }, dispatch)


}




export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Article));