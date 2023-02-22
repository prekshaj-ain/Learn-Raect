import { useFormik } from "formik";
import * as Yup from 'yup';
import Image from "../Assets/Images/pasta-g1fc7a5bb2_1280.jpg";
import Logo from "./Logo";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),
    onSubmit: (values) => {console.log(values)},
  });
  return (
      <div className="loginPage">
      <div className="form">
        <div className="form-header">
          <Logo />
          <div className="buttons">
            Login
            <button>Sign up</button>
          </div>
        </div>
        <div className="form-handler">
        <form onSubmit={formik.handleSubmit} className="form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}     
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
         <div className="fieldError">{formik.errors.name}</div>
       ) : null}
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}               
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
         <div className="fieldError">{formik.errors.email}</div>
       ) : null}
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
         <div className="fieldError">{formik.errors.password}</div>
       ) : null}
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
      <img src={Image} alt="" className="image" />
    </div>
  );
};
export default Login;
