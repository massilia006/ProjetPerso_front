import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
 class AddVoitures extends Component {
  render() {
    return (
      <div>
         <Form method="POST" action="http://localhost:5000/api/voiture">
        <Form.Group widths='equal'>
          <Form.Input fluid label='Marque' placeholder='Marque' name="marque" />
          <Form.Input fluid label='Last Modéle' placeholder='Last Modéle' name="modele" />
          <Form.Input fluid label='Année ' placeholder='Année'  name="annee" type="number" />
          <Form.Input fluid label='Immatriculation ' placeholder='XX-123-XX ' name="immatriculation" />
         
       
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' name="description" />
        <Form.Input fluid label='Année de mise en service ' placeholder='Date ' name="mise_en_service"  type="date"/>
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    )
  }
}

export default AddVoitures