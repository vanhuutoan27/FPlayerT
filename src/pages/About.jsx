import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Collapsible accordion={false}>
          <CollapsibleItem header="THE TEAM" icon={<i className="material-icons">people</i>}>
            <p>
              Here you can see the player card, which consists of over 50 soccer football from all
              over the world.
            </p>
          </CollapsibleItem>
          <CollapsibleItem header="Nations" icon={<i className="material-icons">location_on</i>}>
            <p>
              Here you can see the player card, which consists of over 50 soccer football from all
              over the world.
            </p>
          </CollapsibleItem>
          <CollapsibleItem header="Daily news" icon={<i className="material-icons">whatshot</i>}>
            <p>
              Here you can see the player card, which consists of over 50 soccer football from all
              over the world.
            </p>
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default About;
