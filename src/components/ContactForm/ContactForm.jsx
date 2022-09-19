import { Component } from "react";
import { nanoid } from "nanoid";
import { PhoneForm, PhoneField, PhoneTitle, PhoneInput, PhoneButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }

  getInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...this.state,
      id: nanoid(),
    }
    this.props.addContact({ newContact });
    this.setState({name: "", number: ""});
  }
  render() {
    return (
      <PhoneForm onSubmit={this.handleSubmit}>
        <PhoneField>
          <PhoneTitle>Name</PhoneTitle>
          <PhoneInput
            type="text"
            name="name"
            onChange={this.getInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required/>
        </PhoneField>
        <PhoneField>
          <PhoneTitle>Number</PhoneTitle>
          <PhoneInput
            type="tel"
            name="number"
            onChange={this.getInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            required/>
        </PhoneField>
        <PhoneButton type="submit">Add contact</PhoneButton>
      </PhoneForm>
    )
  }
}
export default ContactForm;