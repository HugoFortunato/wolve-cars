import axios from 'axios';

export default function CreateUser() {
  async function createUser(formData: FormData) {
    'use server';

    const rawFormData = {
      userId: formData.get('userId'),
      name: formData.get('name'),
    };

    try {
      await axios.post('http://localhost:3000/api/create-user', rawFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  }

  return (
    <form action={createUser} className="mt-10">
      <div>
        <label htmlFor="userId">User ID</label>
        <input type="text" name="userId" id="userId" required />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <button type="submit">Create Invoice</button>
    </form>
  );
}
