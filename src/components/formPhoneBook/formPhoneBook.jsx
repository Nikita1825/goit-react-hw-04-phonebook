import { useState } from 'react';
import css from './phoneBook.module.css';
import PropTypes from 'prop-types';
export const FormPhone =({onAddContact})=> {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const handleChange = e => {
    const { name, value } = e.target;
    setName({ [name]: value });
  };

const handleSubmit = e => {
    e.preventDefault();

    onAddContact(name, number);
    setName('');
    setNumber('')
   
  };

  
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  
}

FormPhone.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
