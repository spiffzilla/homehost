import React from 'react'
import CellDetail from './CellDetail'
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap';
import style from '../style/EpisodeDetail.css'

class EpisodeDetail extends CellDetail {
  
  render() {
    let data = this.state.detailData
    let title = data.title + ' (' + parseInt(data.release_date) + ')'
    document.documentElement.style.setProperty('--background-image', 'url(' + data.backdrop_path + ')')
    
    var episodeList = []
    var episodeDetail

    if (data.name) {
      for (var i = 0; i < data.season.episodes.length; i++){
        episodeList.push(<ListGroupItem>
          <img src={data.season.episodes[i].still_path}/>
          <ListGroupItemHeading>{data.season.episodes[i].name}</ListGroupItemHeading>
          <ListGroupItemText>
          {data.season.episodes[i].overview}
          </ListGroupItemText>
        </ListGroupItem>)
      }
    }
    return (
      <div id='CellDetailDiv' className={style.cellDetailDiv}>
        <li id='CellDetail' key='CellDetail' className={style.cellDetail}>
          <ListGroup>
            {episodeList}
          </ListGroup>
        </li>
      </div>
    )

  }
}

export default EpisodeDetail