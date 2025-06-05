import Title from "./Title";
import InputField from "./InputField";

function RegisterForm() {
  return (
    <div className="container">
      <Title text="Formulario de Registro" />
      <form className="form">
        <InputField label="Nombre" type="text" placeholder="Ingrese su nombre" />
        <InputField label="Apellido" type="text" placeholder="Ingrese su apellido" />
        <InputField label="Email" type="email" placeholder="ejemplo@mail.com" />
        <InputField label="Teléfono" type="tel" placeholder="11-1234-5678" />
        <InputField label="Contraseña" type="password" placeholder="Ingrese una contraseña" />
        <InputField label="Confirmar Contraseña" type="password" placeholder="Repita la contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterForm;