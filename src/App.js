import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully");
  };

  return (
    <div className="App">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="form-table">
          <tbody>
            <tr>
              <td><label>Name</label></td>
              <td>
                <input 
                  type="text" 
                  {...register('name', { 
                    required: "Name is required", 
                    minLength: {
                      value: 4,
                      message: "Name must be at least 4 characters long"
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Name cannot contain numbers or special characters"
                    }
                  })} 
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td>
                <input 
                  type="email" 
                  {...register('email', { 
                    required: "Email is required", 
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email"
                    }
                  })} 
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
              </td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td>
                <input 
                  type="password" 
                  {...register('password', { 
                    required: "Password is required", 
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters"
                    }
                  })} 
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Signup</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
