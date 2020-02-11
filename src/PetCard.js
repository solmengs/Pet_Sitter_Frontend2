import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'


const PetCard = () => (
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="">
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
        <button class="ui button">Edit Pet</button>
      </Card>
)

export default PetCard