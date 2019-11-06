import React, { Component } from 'react';
import { connect } from "react-redux";

import Truncate from 'react-truncate';
import { NavLink, Link } from 'react-router-dom'
import './LeagueDetail.css'
import MastHead from '../Common/MastHead'

import { getLeagueDetail } from '../../selectors/index';
import { fetchLeagueDetail } from '../../action/requests';

class LeagueDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            detail:[]
        }
    }

    
    componentDidMount(){
        let leagueId =this.props.match.params.id;
        console.log(leagueId)
        this.props.getLeagueDetail(leagueId)
    }

    componentWillMount(){
        //this.props.clearData([]);
    }

    render(){
        console.log(this.props.leagueDetail)
        return (
           <div>
              {(this.props.leagueDetail || []).map((item)=>(
                    <div key={item.idLeague}>
                        <MastHead url={item.strFanart2 ? item.strFanart2 : item.strBadge} />
                        <div className="col-md-12 blog-main">
                            <div className="blog-post">
                                <h2 className="blog-post-title">{item.strSport}: {item.strCountry}</h2>
                                <h4 className="blog-post-meta">{item.strLeague} / {item.strLeagueAlternate}</h4><br />

                                <h3>Description</h3>
                                <p>{item.strDescriptionEN}</p>
                                <h3>Following dummy text</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <pre><code>Example code block</code></pre>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                                <h3>Sub-heading</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                                </ul>
                                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                                <ol>
                                <li>Vestibulum id ligula porta felis euismod semper.</li>
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                                </ol>
                                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                            </div>

                            <div className="blog-post">
                                <h2 className="blog-post-title">Another blog post</h2>
                                <p className="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

                                <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                                <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                </blockquote>
                                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            </div>

                            <div className="blog-post">
                                <h2 className="blog-post-title">New feature</h2>
                                <p className="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                                </ul>
                                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                            </div>

                            <nav className="blog-pagination">
                                <a className="btn btn-outline-primary" href="#">Older</a>
                                <a className="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
                            </nav>

                            </div>
                    </div>
                ))}  
           </div> 
        )
    }
}

const mapStateToProps=(state)=>({
    leagueDetail: getLeagueDetail(state)
    });

const mapDispatchToProps=(dispatch)=>({
    getLeagueDetail:(lid)=>dispatch(fetchLeagueDetail(lid))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(LeagueDetail)