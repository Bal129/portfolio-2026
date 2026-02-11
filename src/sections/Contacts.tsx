import type { ContactsType } from '../types/resume';

type Props = {
  data: ContactsType[];
}

function Contacts({data}: Props) {
  return (
    <div>
      <h1>Contacts</h1>

      {data.map((contact) => (
        <div key={contact.username}>
          <a href={contact.url}>
            <img 
              src={"/icons/"+contact.icon}
              alt={contact.type}
              width="50" height="50"
            />
          </a>
          <h3>{contact.username}</h3>
        </div>
      ))}
    </div>
  )
}

export default Contacts;
