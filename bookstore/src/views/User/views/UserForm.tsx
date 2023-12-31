import React, { useState } from 'react';
import useStore from '../store/store';

function UserForm() {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState('');
    const addUser = useStore((state) => state.addUser);
    const selectUser = useStore((state) => state.selectUser);
    const updateUser = useStore((state) => state.updateUser)
    const { selectedUser } = useStore();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(selectedUser) {
            updateUser(selectedUser.id, name, parseInt(age));
            selectUser(null);
        } else {
            addUser(name, parseInt(age));
            setName('');
            setAge('');
        }
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <button type='submit'>전송버튼</button>
      </form>
    </>
  );
}

export default UserForm;