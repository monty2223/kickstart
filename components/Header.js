import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
    return(
    <Menu style={{marginTop: '10px'}}>
        <Menu.Item>
          CrowdCoin
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            Compaigns
          </Menu.Item>

          <Menu.Item>
            +
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    );

}