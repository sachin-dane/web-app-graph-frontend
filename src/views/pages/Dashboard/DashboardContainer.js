/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import Header from '../../ui/Header'
import Sidebar from '../../ui/Sidebar'
import Footer from '../../ui/Footer'
class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>

                <main>
                    <Sidebar />
                    <section>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa tempore hic provident praesentium possimus nostrum! Fucontent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa tempore hic provident praesentium possimus nostrum! Fugit doloremque deleniti, animi numquam labore laudantium aut eaque dolor eum, nam dolorum. Possimus, qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni at sit provident quae iure numquam, consectetur blanditiis sunt, facere ratione unde i Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, fuga eos! Excepturi obcaecati facilis incidunt fugit quasi, hic rem voluptate et quidem soluta amet nostrum molestias, vero eligendi ipsam accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique possimus cupiditate ipsa, blanditiis unde facere aspernatur odio natus in accusantium cum debitis sint veniam impedit ullam ea odit dignissimos tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sint eligendi doloremque accusantium itaque, odio fugit. Tempore repellat at sapiente praesentium, distinctio voluptates nesciunt vitae incidunt corporis nostrum, accusantium quo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quo dicta quaerat soluta repellat deleniti ipsum non corrupti repudiandae. Architecto illum saepe delectus, fugiat sed corporis repudiandae quo dolor optio?
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa tempore hic provident praesentium possimus nostrum! Fucontent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa tempore hic provident praesentium possimus nostrum! Fugit doloremque deleniti, animi numquam labore laudantium aut eaque dolor eum, nam dolorum. Possimus, qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni at sit provident quae iure numquam, consectetur blanditiis sunt, facere ratione unde i Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, fuga eos! Excepturi obcaecati facilis incidunt fugit quasi, hic rem voluptate et quidem soluta amet nostrum molestias, vero eligendi ipsam accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique possimus cupiditate ipsa, blanditiis unde facere aspernatur odio natus in accusantium cum debitis sint veniam impedit ullam ea odit dignissimos tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sint eligendi doloremque accusantium itaque, odio fugit. Tempore repellat at sapiente praesentium, distinctio voluptates nesciunt vitae incidunt corporis nostrum, accusantium quo!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quo dicta quaerat soluta repellat deleniti ipsum non corrupti repudiandae. Architecto illum saepe delectus, fugiat sed corporis repudiandae quo dolor optio?
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa tempore hic provident praesentium possimus nostrum! Fucontent Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa tempore hic provident praesentium possimus nostrum! Fugit doloremque deleniti, animi numquam labore laudantium aut eaque dolor eum, nam dolorum. Possimus, qui!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni at sit provident quae iure numquam, consectetur blanditiis sunt, facere ratione unde i Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, fuga eos! Excepturi obcaecati facilis incidunt fugit quasi, hic rem voluptate et quidem soluta amet nostrum molestias, vero eligendi ipsam accusamus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique possimus
                    </p>
                    </section>
                </main>

            </div >
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
