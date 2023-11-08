import { useState } from 'react';
import users from '../users.json';
import '../App.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos del formulario antes de enviarlos
    if (formData.email && formData.password) {
      const user = users.find(user => user.email === formData.email && user.password === formData.password);
      if (user) {
        /* Redirigir a la ruta /Home */
        window.location.href = '/Home';       
        
      } else {
        document.getElementById('error').innerHTML = 'Email o contraseña incorrectos';
      }
    }
  };

  return (
    <div className="login">
      <img src="https://cdn.pixabay.com/photo/2015/01/30/08/59/urban-617277_1280.jpg" alt="" />
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <button type="submit">Entrar</button>
        <span id="error"></span>
    </form>
    </div>
    
  );
}

export default Login;