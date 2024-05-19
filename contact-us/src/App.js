import logo from './logo.svg';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [queryType, setQueryType] = useState('');
  const [message, setMessage] = useState('');

  const getInfo = (e) => {
    e.preventDefault();
    console.log('working');
    console.log({ firstName, lastName, email, queryType, message });
  };

  return (
    <>
    <div id='background'>
    <div id='card'>
      <h1>Contact Us</h1>
      <form onSubmit={getInfo}>
        <label htmlFor="first-name">First Name:</label>
        <input
          id="first-name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className='name'
        />
        <label htmlFor="last-name">Last Name:</label>
        <input
          id="last-name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className='name'
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="query-type">Query Type:</label>
        <div id="query-type">
          <input
            id="general-enquiry"
            type="radio"
            name="query-type"
            required
            value="general enquiry"
            onChange={(e) => setQueryType(e.target.value)}
            className='query'
          />
          <label htmlFor="general-enquiry" class='query'>General Enquiry</label>
          <input
            id="support-request"
            type="radio"
            name="query-type"
            required
            value="support request"
            onChange={(e) => setQueryType(e.target.value)}
            className='query'
          />
          <label htmlFor="support-request" class='query'>Support Request</label>
        </div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div class='container'>
        <button type="submit" id='submit'>Submit</button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default App;
